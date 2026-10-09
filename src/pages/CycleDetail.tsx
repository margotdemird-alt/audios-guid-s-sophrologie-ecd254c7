import { useState } from "react";
import { useParams, Link, Navigate, useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import FaqList from "@/components/FaqList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getCycle } from "@/data/cycles";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, ArrowRight, Clock, Headphones, CalendarDays, Play, ShieldCheck, Tag, Loader2, FlaskConical } from "lucide-react";

/**
 * Modèle de page produit générique pour tous les cycles.
 * Les contenus viennent de `cycle.details` ; sans détails, des marqueurs "à venir" s'affichent.
 */
const Placeholder = ({ children }: { children: React.ReactNode }) => (
  <p className="text-muted-foreground italic">{children}</p>
);

const faq = [
  { q: "Faut-il avoir déjà pratiqué la sophrologie ?", a: "Non. Les audios sont conçus pour être accessibles même si vous n'avez jamais pratiqué la sophrologie." },
  { q: "Combien de temps dure un audio ?", a: "Les pratiques durent environ 8 à 12 minutes afin de pouvoir s'intégrer facilement dans le quotidien." },
  { q: "Puis-je réécouter les audios ?", a: "Oui. Vous pouvez reprendre chaque audio autant de fois que vous le souhaitez et avancer à votre rythme." },
  { q: "Comment vais-je recevoir les audios ?", a: "Après votre achat, les modalités d'accès à vos audios vous seront indiquées immédiatement." },
  { q: "Ce cycle remplace-t-il un suivi médical ou psychologique ?", a: "Non. Ces audios de sophrologie sont des outils de bien-être et ne remplacent pas un diagnostic, un traitement ou un accompagnement médical ou psychologique lorsqu'il est nécessaire." },
];

const CycleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cycle = getCycle(slug);
  if (!cycle) return <Navigate to="/audios" replace />;
  const d = cycle.details;
  const priceLabel = cycle.price ? `${cycle.price} €` : null;
  const ctaLabel = priceLabel ? `Commencer le cycle – ${priceLabel}` : "Commencer le cycle";

  // Mode test Stripe : visible uniquement avec ?test=1 dans l'URL.
  // Ko-fi reste le parcours d'achat actif pour les visiteurs.
  const [searchParams] = useSearchParams();
  const testMode = searchParams.get("test") === "1";
  const [testEmail, setTestEmail] = useState("");
  const [testLoading, setTestLoading] = useState(false);
  const [testError, setTestError] = useState<string | null>(null);

  const startTestCheckout = async () => {
    setTestError(null);
    setTestLoading(true);
    const { data, error } = await supabase.functions.invoke("create-checkout", {
      body: { cycleSlug: cycle.slug, email: testEmail, origin: window.location.origin },
    });
    setTestLoading(false);
    if (error || !data?.url) {
      setTestError("Impossible de lancer le paiement test. Réessayez.");
      return;
    }
    window.location.href = data.url;
  };

  const TestCheckout = () =>
    testMode && cycle.available ? (
      <div className="mt-6 rounded-2xl border-2 border-dashed border-accent bg-card p-5 sm:p-6">
        <p className="flex items-center gap-2 text-sm font-medium text-foreground">
          <FlaskConical size={16} className="text-accent" /> Paiement en ligne — mode test
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Nouveau système en cours de test. Aucun argent réel n'est débité.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            placeholder="Votre adresse e-mail"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
            className="sm:max-w-xs"
          />
          <Button variant="hero" onClick={startTestCheckout} disabled={testLoading || !testEmail}>
            {testLoading ? <Loader2 className="animate-spin" /> : <ArrowRight />}
            {ctaLabel}
          </Button>
        </div>
        {testError && <p className="mt-2 text-sm text-destructive">{testError}</p>}
      </div>
    ) : null;

  const BuyButton = () =>
    cycle.kofiUrl ? (
      <Button variant="hero" asChild className="w-full sm:w-auto">
        <a href={cycle.kofiUrl} target="_blank" rel="noopener noreferrer">{ctaLabel} <ArrowRight /></a>
      </Button>
    ) : (
      <span className="inline-flex h-14 items-center px-8 rounded-full bg-secondary text-muted-foreground">Bientôt disponible</span>
    );

  const chips = [
    { i: CalendarDays, t: "4 semaines" },
    { i: Headphones, t: "4 audios guidés" },
    { i: Clock, t: "8 à 12 min" },
    ...(priceLabel ? [{ i: Tag, t: priceLabel }] : []),
  ];

  return (
    <Layout>
      <section className="pt-8 pb-16 md:pt-14 md:pb-24 bg-secondary">
        <div className="container max-w-4xl">
          <Link to="/audios" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10">
            <ArrowLeft size={16} /> Tous les cycles
          </Link>
          <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center mb-6">
            <cycle.icon className="text-primary" size={24} strokeWidth={1.6} />
          </div>
          <h1 className="text-4xl sm:text-6xl text-foreground mb-4">{cycle.title}</h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">{d?.subtitle ?? cycle.benefit}</p>
          <div className="flex flex-wrap gap-2 mb-10">
            {chips.map(({ i: I, t }) => (
              <span key={t} className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-card text-foreground"><I size={15} className="text-primary" />{t}</span>
            ))}
          </div>
          <BuyButton />
        </div>
      </section>

      <div className="container max-w-4xl py-16 md:py-24 space-y-16 md:space-y-24">
        <section>
          <p className="eyebrow mb-3">Ce que vous vivez</p>
          <h2 className="text-3xl sm:text-4xl text-foreground mb-5">Le point de départ</h2>
          {d ? (
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              {d.startingPoint.map((p) => <p key={p}>{p}</p>)}
            </div>
          ) : <Placeholder>Description du problème vécu — à venir.</Placeholder>}
        </section>

        <section className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="eyebrow mb-3">Pour qui</p>
            <h2 className="text-3xl text-foreground mb-5">À qui s'adresse ce cycle</h2>
            {d ? (
              <>
                <p className="text-muted-foreground mb-4">{d.forWhoIntro}</p>
                <ul className="space-y-3">
                  {d.forWho.map((f) => (
                    <li key={f} className="flex gap-3 text-foreground leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </>
            ) : <Placeholder>Profils concernés — à venir.</Placeholder>}
          </div>
          <div>
            <p className="eyebrow mb-3">Le parcours</p>
            <h2 className="text-3xl text-foreground mb-5">Ce que propose le cycle</h2>
            {d ? <p className="text-muted-foreground leading-relaxed">{d.promise}</p> : <Placeholder>Promesse du parcours — à venir.</Placeholder>}
          </div>
        </section>

        <section>
          <p className="eyebrow mb-3">Le programme</p>
          <h2 className="text-3xl sm:text-4xl text-foreground mb-8">Les 4 audios</h2>
          <ol className="divide-y divide-border border-y border-border">
            {[0, 1, 2, 3].map((i) => (
              <li key={i} className="py-5 flex items-start sm:items-center gap-5">
                <span className="font-serif text-3xl text-primary/50 w-10 shrink-0">0{i + 1}</span>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-1">Semaine {i + 1}</p>
                  <p className="text-lg text-foreground">{cycle.audios?.[i]?.title ?? `Semaine ${i + 1}`}</p>
                  <p className="text-sm text-muted-foreground">{cycle.audios?.[i]?.desc ?? "Titre et description à venir"}</p>
                  {cycle.audios?.[i]?.takeaway && <p className="text-sm text-primary italic mt-2">« {cycle.audios[i].takeaway} »</p>}
                </div>
                <span className="text-sm text-muted-foreground inline-flex items-center gap-1 shrink-0"><Clock size={14} /> 8 à 12 min</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-3xl bg-card border border-border p-7 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Play className="text-primary ml-1" size={24} />
          </div>
          <div>
            <p className="eyebrow mb-2">Extrait gratuit</p>
            <h2 className="text-2xl text-foreground mb-1">Écouter un extrait</h2>
            <Placeholder>L'extrait audio sera disponible prochainement.</Placeholder>
          </div>
        </section>

        <section>
          <p className="eyebrow mb-3">Mode d'emploi</p>
          <h2 className="text-3xl sm:text-4xl text-foreground mb-5">Comment utiliser le cycle</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {(d?.howTo ?? ["Écoutez un audio par semaine, idéalement plusieurs fois, dans un endroit calme. Installez-vous assis ou allongé, avec des écouteurs si possible, et laissez-vous guider."]).map((p) => <p key={p}>{p}</p>)}
          </div>
        </section>

        <section>
          <p className="eyebrow mb-3">Questions</p>
          <h2 className="text-3xl sm:text-4xl text-foreground mb-8">FAQ</h2>
          <FaqList items={faq} />
        </section>

        <section className="rounded-[2rem] bg-olive-dark text-primary-foreground p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl mb-3">{cycle.title}</h2>
          <p className="text-primary-foreground/75 mb-2">4 semaines · 4 audios guidés · 8 à 12 min</p>
          {priceLabel && <p className="font-serif text-4xl mb-8">{priceLabel}</p>}
          {cycle.kofiUrl ? (
            <a href={cycle.kofiUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 w-full sm:w-auto">
              {ctaLabel} <ArrowRight size={18} />
            </a>
          ) : <p>Bientôt disponible</p>}
          <p className="flex items-center justify-center gap-2 text-xs text-primary-foreground/60 mt-6">
            <ShieldCheck size={14} /> Paiement sécurisé
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default CycleDetail;
