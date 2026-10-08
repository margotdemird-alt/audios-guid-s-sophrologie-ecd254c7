import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import Stripe from 'npm:stripe@17'

const CYCLES: Record<string, { name: string; price: number }> = {
  stress: { name: 'Cycle Régulation du stress', price: 3500 },
  sommeil: { name: 'Cycle Sommeil', price: 3500 },
  energie: { name: 'Cycle Énergie', price: 3500 },
  motivation: { name: 'Cycle Motivation', price: 3500 },
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { cycleSlug, email, origin } = await req.json()

    if (!cycleSlug || !CYCLES[cycleSlug]) {
      return new Response(JSON.stringify({ error: 'Cycle inconnu' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Adresse e-mail invalide' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') ?? '', {
      apiVersion: '2024-06-20',
    })

    const cycle = CYCLES[cycleSlug]
    const baseUrl = typeof origin === 'string' && origin.startsWith('http')
      ? origin
      : 'https://audios.sophrologie-margot.com'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'eur',
            unit_amount: cycle.price,
            product_data: {
              name: cycle.name,
              description: '4 semaines · 4 audios guidés de sophrologie',
            },
          },
        },
      ],
      metadata: { cycle_slug: cycleSlug },
      success_url: `${baseUrl}/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/audios/${cycleSlug}`,
    })

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('create-checkout error', err)
    return new Response(JSON.stringify({ error: 'Erreur lors de la création du paiement' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
