import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import FaqList from "@/components/FaqList";
import { Button } from "@/components/ui/button";
import { getCycle } from "@/data/cycles";
import { ArrowLeft, ArrowRight, Clock, Headphones, CalendarDays, Play, ShieldCheck } from "lucide-react";

/**
 * Modèle de page produit générique pour tous les cycles.
 * Les contenus marqués "à venir" seront complétés cycle par cycle.
 */
const Placeholder = ({ children }: { children: React.ReactNode }) => (
  <p className="text-muted-foreground italic">{children}</p>
);

const CycleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cycle = getCycle(slug);
  if (!cycle) return <Navigate to="/audios" replace />;

  const BuyButton = () =>
    cycle.kofiUrl ? (
      <Button variant="hero" asChild className="w-full sm:w-auto">
        <a href={cycle.kofiUrl} target="_blank" rel="noopener noreferrer">Accéder au cycle <ArrowRight /></a>
      </Button>
    ) : (
      <span className="inline-flex h-14 items-center px-8 rounded-full bg-secondary text-muted-foreground">Bientôt disponible</span>
    );

  return (
    <Layout>
      {/* En-tête */}
      <section className="pt-8 pb-16 md:pt-14 md:pb-24 bg-secondary">
        <div className="container max-w-4xl">
          <Link to="/audios" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10">
            <ArrowLeft size={16} /> Tous les cycles
          </Link>
          <div className="w-14 h-14 rounded-full bg-card flex items-center justify-center mb-6">
            <cycle.icon className="text-primary" size={24} strokeWidth={1.6} />
          </div>
          <h1 className="text-4xl sm:text-6xl text-foreground mb-4">{cycle.title}</h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">{cycle.benefit}</p>
          <div className="flex flex-wrap gap-2 mb-10">
            {[{ i: CalendarDays, t: "4 semaines" }, { i: Headphones, t: "4 audios guidés" }, { i: Clock, t: "8 à 12 min" }].map(({ i: I, t }) => (
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
          <Placeholder>Description du problème vécu — à venir.</Placeholder>
        </section>

        <section className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="eyebrow mb-3">Pour qui</p>
            <h2 className="text-3xl text-foreground mb-5">À qui s'adresse ce cycle</h2>
            <Placeholder>Profils concernés — à venir.</Placeholder>
          </div>
          <div>
            <p className="eyebrow mb-3">Le parcours</p>
            <h2 className="text-3xl text-foreground mb-5">Ce que propose le cycle</h2>
            <Placeholder>Promesse du parcours — à venir.</Placeholder>
          </div>
        </section>

        <section>
          <p className="eyebrow mb-3">Le programme</p>
          <h2 className="text-3xl sm:text-4xl text-foreground mb-8">Les 4 audios</h2>
          <ol className="divide-y divide-border border-y border-border">
            {[1, 2, 3, 4].map((n) => (
              <li key={n} className="py-5 flex items-center gap-5">
                <span className="font-serif text-3xl text-primary/50 w-10">0{n}</span>
                <div className="flex-1">
                  <p className="text-lg text-foreground">Semaine {n}</p>
                  <p className="text-sm text-muted-foreground">Titre et description à venir</p>
                </div>
                <span className="text-sm text-muted-foreground inline-flex items-center gap-1"><Clock size={14} /> — min</span>
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
          <p className="text-muted-foreground leading-relaxed">
            Écoutez un audio par semaine, idéalement plusieurs fois, dans un endroit calme. Installez-vous assis ou allongé, avec des écouteurs si possible, et laissez-vous guider.
          </p>
        </section>

        <section>
          <p className="eyebrow mb-3">Questions</p>
          <h2 className="text-3xl sm:text-4xl text-foreground mb-8">FAQ</h2>
          <FaqList items={[
            { q: "Comment vais-je recevoir les audios ?", a: "Vous êtes redirigé vers Ko-fi, une plateforme sécurisée, pour accéder et télécharger vos audios." },
            { q: "Ce cycle remplace-t-il un suivi médical ?", a: "Non. Les audios sont des outils de bien-être, sans visée thérapeutique." },
          ]} />
        </section>

        <section className="rounded-[2rem] bg-olive-dark text-primary-foreground p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl mb-3">{cycle.title}</h2>
          <p className="text-primary-foreground/75 mb-2">4 semaines · 4 audios guidés</p>
          <p className="text-primary-foreground/60 text-sm mb-8">Prix : à venir</p>
          {cycle.kofiUrl ? (
            <a href={cycle.kofiUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 w-full sm:w-auto">
              Accéder au cycle <ArrowRight size={18} />
            </a>
          ) : <p>Bientôt disponible</p>}
          <p className="flex items-center justify-center gap-2 text-xs text-primary-foreground/60 mt-6">
            <ShieldCheck size={14} /> Paiement et téléchargement via Ko-fi, plateforme sécurisée
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default CycleDetail;
