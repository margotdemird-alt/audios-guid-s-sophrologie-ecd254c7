import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const benefits = [
  { label: "Réguler le stress", desc: "Retrouver un état de calme face aux pressions quotidiennes" },
  { label: "Apaiser le système nerveux", desc: "Activer la détente profonde du corps" },
  { label: "Relâcher les tensions", desc: "Libérer les tensions physiques accumulées" },
  { label: "Améliorer le sommeil", desc: "Favoriser un endormissement plus serein" },
  { label: "Retrouver le calme intérieur", desc: "Cultiver un espace mental apaisé" },
];

const Sophrologie = () => (
  <Layout>
    <section className="pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="container max-w-3xl fade-in-up">
        <p className="eyebrow mb-4">Comprendre</p>
        <h1 className="text-4xl sm:text-6xl text-foreground mb-8">Qu'est-ce que la sophrologie ?</h1>
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p className="text-xl text-foreground">
            La sophrologie est une méthode douce qui associe respiration, détente corporelle et visualisation.
          </p>
          <p>Elle aide à mieux gérer le stress, à apaiser les émotions et à relâcher les tensions accumulées dans le corps. C'est une approche globale qui agit à la fois sur le mental et sur le physique.</p>
          <p>Contrairement à certaines idées reçues, la sophrologie ne demande aucune compétence particulière. Il suffit de se laisser guider par la voix et de suivre des exercices simples, adaptés à chacun.</p>
          <p>Simple et accessible, elle peut se pratiquer facilement grâce à des audios guidés, sans expérience préalable.</p>
        </div>
      </div>
    </section>

    <section className="section bg-secondary">
      <div className="container max-w-4xl">
        <h2 className="text-3xl sm:text-5xl text-foreground mb-10">Ce qu'elle peut vous apporter</h2>
        <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
          {benefits.map((b) => (
            <li key={b.label} className="py-5 sm:py-6 grid sm:grid-cols-2 gap-1 sm:gap-8">
              <span className="font-serif text-xl sm:text-2xl text-foreground">{b.label}</span>
              <span className="text-muted-foreground">{b.desc}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground mt-8">La sophrologie est une pratique de bien-être : elle ne remplace pas un avis ou un traitement médical.</p>
      </div>
    </section>

    <section className="section">
      <div className="container max-w-3xl flex flex-col sm:flex-row gap-3">
        <Button variant="hero" asChild><Link to="/audios">Découvrir les audios <ArrowRight /></Link></Button>
        <Button variant="hero-outline" asChild><Link to="/comment-pratiquer">Comment pratiquer</Link></Button>
      </div>
    </section>
  </Layout>
);

export default Sophrologie;
