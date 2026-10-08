import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import Stripe from 'npm:stripe@17'
import { createClient } from 'npm:@supabase/supabase-js@2'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') ?? '', {
      apiVersion: '2024-06-20',
    })
    const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')

    const signature = req.headers.get('stripe-signature')
    const body = await req.text()

    let event: Stripe.Event
    if (webhookSecret && signature) {
      event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret)
    } else {
      // Mode test sans secret de webhook configuré : on parse directement
      event = JSON.parse(body) as Stripe.Event
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session
      const email = session.customer_email ?? session.customer_details?.email
      const cycleSlug = session.metadata?.cycle_slug

      if (email && cycleSlug) {
        const supabase = createClient(
          Deno.env.get('SUPABASE_URL') ?? '',
          Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
        )

        // Idempotent : ignore si la session a déjà été traitée
        const { data: existing } = await supabase
          .from('purchases')
          .select('id')
          .eq('stripe_session_id', session.id)
          .maybeSingle()

        if (!existing) {
          const { data: purchase, error } = await supabase
            .from('purchases')
            .insert({
              email,
              cycle_slug: cycleSlug,
              stripe_session_id: session.id,
              status: 'paid',
              amount_total: session.amount_total,
            })
            .select('id')
            .single()

          if (error) throw error

          const { data: tokenRow, error: tokenError } = await supabase
            .from('access_tokens')
            .insert({ purchase_id: purchase.id })
            .select('token')
            .single()

          if (tokenError) throw tokenError

          // Envoi de l'e-mail de confirmation
          const accessUrl = `https://audios.sophrologie-margot.com/acces/${tokenRow.token}`
          await fetch(`${Deno.env.get('SUPABASE_URL')}/functions/v1/send-confirmation-email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
            },
            body: JSON.stringify({ email, cycleSlug, accessUrl }),
          })
        }
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('stripe-webhook error', err)
    return new Response(JSON.stringify({ error: 'Webhook error' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
