import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { createClient } from 'npm:@supabase/supabase-js@2'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { token } = await req.json()
    if (!token || typeof token !== 'string' || token.length > 128) {
      return new Response(JSON.stringify({ error: 'Lien invalide' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const { data: tokenRow } = await supabase
      .from('access_tokens')
      .select('purchase_id, purchases(email, cycle_slug, status)')
      .eq('token', token)
      .maybeSingle()

    const purchase = tokenRow?.purchases as { email: string; cycle_slug: string; status: string } | null
    if (!tokenRow || !purchase || purchase.status !== 'paid') {
      return new Response(JSON.stringify({ error: 'Lien invalide ou achat non confirmé' }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Liste les fichiers du cycle dans le bucket privé et crée des liens signés (7 jours)
    const { data: files } = await supabase.storage
      .from('audios')
      .list(purchase.cycle_slug, { limit: 50 })

    const audios: { name: string; url: string }[] = []
    for (const file of files ?? []) {
      const { data: signed } = await supabase.storage
        .from('audios')
        .createSignedUrl(`${purchase.cycle_slug}/${file.name}`, 60 * 60 * 24 * 7)
      if (signed?.signedUrl) {
        audios.push({ name: file.name, url: signed.signedUrl })
      }
    }

    return new Response(
      JSON.stringify({ cycleSlug: purchase.cycle_slug, email: purchase.email, audios }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  } catch (err) {
    console.error('get-audio-access error', err)
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
