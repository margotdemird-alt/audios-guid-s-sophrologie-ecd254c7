import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CycleCard from "@/components/CycleCard";
import { availableCycles, upcomingCycles } from "@/data/cycles";
import { ArrowRight, ShieldCheck } from "lucide-react";

const Audios = () => {
  return (
    <Layout>
      <section className="pt-12 pb-10 md:pt-20 md:pb-14">
        <div className="container max-w-3xl fade-in-up">
          <p className="eyebrow mb-4">Les audios</p>
          <h1 className="text-4xl sm:text-6xl text-foreground mb-6">Les cycles d'audios guidés</h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Chaque cycle vous accompagne pendant 4 semaines avec 4 audios courts, pour avancer à votre rythme vers plus de calme et de bien-être.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {availableCycles.map((c) => <CycleCard key={c.slug} cycle={c} />)}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-secondary p-5 text-sm text-muted-foreground max-w-3xl">
            <ShieldCheck className="text-primary shrink-0" size={20} />
            <p>Vous serez redirigé vers Ko-fi, une plateforme sécurisée de confiance, pour accéder et télécharger vos audios en toute simplicité.</p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl text-foreground mb-8">Bientôt disponible</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {upcomingCycles.map((c) => <CycleCard key={c.slug} cycle={c} />)}
            <Link to="/quel-cycle-pour-moi" className="rounded-3xl bg-olive-dark text-primary-foreground p-7 sm:p-8 flex flex-col justify-between gap-6 hover:opacity-95 transition-opacity">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-light mb-3">Vous hésitez ?</p>
                <h3 className="text-2xl sm:text-3xl">Quel cycle est fait pour moi ?</h3>
              </div>
              <span className="inline-flex items-center gap-2 font-medium">Faire le questionnaire <ArrowRight size={18} /></span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Audios;
