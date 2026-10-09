import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

const CYCLE_NAMES: Record<string, string> = {
  stress: 'Cycle Régulation du stress',
  sommeil: 'Cycle Sommeil',
  energie: 'Cycle Énergie',
  motivation: 'Cycle Motivation',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email, cycleSlug, accessUrl } = await req.json()
    if (!email || !cycleSlug || !accessUrl) {
      return new Response(JSON.stringify({ error: 'Paramètres manquants' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const cycleName = CYCLE_NAMES[cycleSlug] ?? cycleSlug

    // Envoi via l'infrastructure e-mail de Lovable Cloud (active une fois le
    // domaine d'envoi sophrologie-margot.com vérifié dans Cloud → Emails).
    const res = await fetch(`${Deno.env.get('SUPABASE_URL')}/functions/v1/send-transactional-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
      },
      body: JSON.stringify({
        to: email,
        subject: `Votre accès au ${cycleName}`,
        purpose: 'transactional',
        idempotency_key: `purchase-${cycleSlug}-${email}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #3d3a34;">
            <h1 style="font-size: 24px;">Merci pour votre confiance</h1>
            <p>Votre achat du <strong>${cycleName}</strong> est confirmé.</p>
            <p>Voici votre lien personnel d'accès à vos 4 audios guidés :</p>
            <p style="text-align: center; margin: 32px 0;">
              <a href="${accessUrl}" style="background: #7a8b6f; color: #fff; padding: 14px 28px; border-radius: 8px; text-decoration: none;">Accéder à mes audios</a>
            </p>
            <p style="font-size: 14px; color: #8a857c;">Conservez cet e-mail : ce lien est personnel et vous permet de réécouter vos audios à tout moment.</p>
            <p style="font-size: 14px; color: #8a857c;">— Margot, Les Pauses Sophro de Margot</p>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      // L'infrastructure e-mail n'est pas encore active : on journalise pour traitement manuel
      console.log('EMAIL_PENDING', JSON.stringify({ email, cycleSlug, accessUrl }))
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('send-confirmation-email error', err)
    return new Response(JSON.stringify({ error: 'Erreur envoi e-mail' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
