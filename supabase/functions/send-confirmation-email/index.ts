import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

const CYCLE_NAMES: Record<string, string> = {
  stress: 'Cycle Régulation du stress',
  sommeil: 'Cycle Sommeil',
  energie: 'Cycle Énergie',
  motivation: 'Cycle Motivation',
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  // Appel interne uniquement (depuis stripe-webhook)
  const auth = req.headers.get('Authorization') ?? ''
  if (auth !== `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`) {
    return json({ error: 'Unauthorized' }, 401)
  }

  try {
    const { email, cycleSlug, accessUrl } = await req.json()
    if (typeof email !== 'string' || !email.includes('@') || !CYCLE_NAMES[cycleSlug] || typeof accessUrl !== 'string') {
      return json({ error: 'Paramètres invalides' }, 400)
    }
    const cycleName = CYCLE_NAMES[cycleSlug]
    const apiKey = Deno.env.get('MAILERSEND_API_KEY')
    if (!apiKey) {
      console.log('EMAIL_PENDING', JSON.stringify({ email, cycleSlug, accessUrl }))
      return json({ ok: false, pending: true })
    }
    const fromEmail = Deno.env.get('MAILERSEND_FROM_EMAIL') ?? 'contact@sophrologie-margot.com'

    const html = `
      <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #3d3a34;">
        <h1 style="font-size: 24px;">Merci pour votre confiance</h1>
        <p>Votre achat du <strong>${cycleName}</strong> est confirmé.</p>
        <p>Voici votre lien personnel d'accès à vos 4 audios guidés :</p>
        <p style="text-align: center; margin: 32px 0;">
          <a href="${accessUrl}" style="background: #7a8b6f; color: #fff; padding: 14px 28px; border-radius: 8px; text-decoration: none;">Accéder à mes audios</a>
        </p>
        <p style="font-size: 14px; color: #8a857c;">Si le bouton ne fonctionne pas, copiez ce lien : ${accessUrl}</p>
        <p style="font-size: 14px; color: #8a857c;">Conservez cet e-mail : ce lien est personnel et vous permet de réécouter vos audios à tout moment.</p>
        <p style="font-size: 14px; color: #8a857c;">— Margot, Les Pauses Sophro de Margot</p>
      </div>`
    const text = `Merci pour votre confiance.\n\nVotre achat du ${cycleName} est confirmé.\n\nVotre lien personnel d'accès à vos 4 audios guidés :\n${accessUrl}\n\nConservez cet e-mail : ce lien est personnel.\n\n— Margot, Les Pauses Sophro de Margot`

    const res = await fetch('https://api.mailersend.com/v1/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from: { email: fromEmail, name: 'Les Pauses Sophro de Margot' },
        to: [{ email }],
        reply_to: { email: 'pauses-sophro-margot@outlook.fr', name: 'Margot' },
        subject: `Votre accès au ${cycleName}`,
        html,
        text,
      }),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.error('MAILERSEND_ERROR', res.status, detail)
      console.log('EMAIL_PENDING', JSON.stringify({ email, cycleSlug, accessUrl }))
      return json({ ok: false, status: res.status, detail }, 502)
    }
    return json({ ok: true })
  } catch (err) {
    console.error('send-confirmation-email error', err)
    return json({ error: 'Erreur envoi e-mail' }, 500)
  }
})
