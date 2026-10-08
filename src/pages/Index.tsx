import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import CycleCard from "@/components/CycleCard";
import FaqList from "@/components/FaqList";
import heroBg from "@/assets/hero-bg.jpg";
import margotImg from "@/assets/margot-portrait.jpg";
import { cycles } from "@/data/cycles";
import { ArrowRight, Gift, MessageCircle } from "lucide-react";

const audience = [
  "Vous vous sentez souvent tendu·e ou sous pression",
  "Votre sommeil est devenu léger ou irrégulier",
  "La fatigue s'installe et l'énergie manque",
  "Vous avez du mal à retrouver l'élan",
  "Vous cherchez un moment rien qu'à vous, simple et guidé",
  "Vous débutez : aucune expérience n'est nécessaire",
];

const steps = [
  { n: "01", title: "Choisissez votre cycle", desc: "Selon ce dont vous avez besoin en ce moment : stress, sommeil, énergie ou motivation." },
  { n: "02", title: "Installez-vous", desc: "Un endroit calme, assis ou allongé. Des écouteurs si possible." },
  { n: "03", title: "Laissez-vous guider", desc: "Un audio par semaine, à écouter régulièrement pendant 4 semaines." },
];

const reasons = [
  { title: "Courts", desc: "De 8 à 12 minutes, faciles à glisser dans une journée chargée." },
  { title: "Progressifs", desc: "4 audios sur 4 semaines pour installer une pratique pas à pas." },
  { title: "Accessibles", desc: "Respiration, détente corporelle et visualisation, sans prérequis." },
  { title: "Conçus par une professionnelle", desc: "Des pratiques pensées par une sophrologue, psychologue de formation." },
];

const faq = [
  { q: "Faut-il avoir déjà pratiqué la sophrologie ?", a: "Non. Les audios sont conçus pour être suivis sans expérience préalable : il suffit de se laisser guider par la voix." },
  { q: "Combien de temps dure un audio ?", a: "Les séances durent entre 8 et 12 minutes, pour s'intégrer facilement à votre quotidien." },
  { q: "Comment se déroule l'achat ?", a: "Le paiement est sécurisé et les modalités d'accès à vos audios vous sont indiquées immédiatement après l'achat." },
  { q: "Les audios remplacent-ils un accompagnement médical ?", a: "Non. Les audios sont des outils de bien-être et de détente, sans visée thérapeutique. Ils ne remplacent pas un avis ou un suivi médical." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container grid md:grid-cols-12 gap-10 md:gap-12 items-center pt-10 pb-16 md:py-24">
          <div className="md:col-span-7 fade-in-up">
            <p className="eyebrow mb-5">Audios guidés de sophrologie</p>
            <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl text-foreground mb-6">
              Retrouver calme, équilibre <em className="text-primary">et élan</em> au quotidien.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-9 leading-relaxed">
              Des pratiques courtes et accessibles pour réguler le stress, mieux dormir et retrouver un état de détente.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" asChild><Link to="/audios">Découvrir les audios <ArrowRight /></Link></Button>
              <Button variant="hero-outline" asChild><Link to="/sophrologie">Découvrir la sophrologie</Link></Button>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] max-h-[520px] w-full rounded-[2rem] overflow-hidden shadow-card">
              <img src={heroBg} alt="Femme au casque audio, détendue dans un fauteuil" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* À qui */}
      <section className="section bg-secondary">
        <div className="container grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow mb-4">Pour qui ?</p>
            <h2 className="text-3xl sm:text-5xl text-foreground">Ces audios sont faits pour vous si…</h2>
          </div>
          <ul className="md:col-span-7 divide-y divide-foreground/10 border-y border-foreground/10">
            {audience.map((a) => (
              <li key={a} className="py-4 sm:py-5 flex gap-4 text-lg text-foreground">
                <span className="mt-2.5 w-2 h-2 rounded-full bg-accent shrink-0" />{a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cycles */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-4">Les cycles</p>
              <h2 className="text-3xl sm:text-5xl text-foreground max-w-xl">4 semaines pour prendre soin de soi</h2>
            </div>
            <Link to="/quel-cycle-pour-moi" className="text-primary font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
              Quel cycle est fait pour moi ? <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {cycles.map((c) => <CycleCard key={c.slug} cycle={c} />)}
          </div>
        </div>
      </section>

      {/* Comment ça fonctionne */}
      <section className="section bg-olive-dark text-primary-foreground">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-light mb-4">Simple</p>
          <h2 className="text-3xl sm:text-5xl mb-14">Comment ça fonctionne ?</h2>
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-primary-foreground/20 pt-6">
                <p className="font-serif text-5xl text-primary-foreground/40 mb-4">{s.n}</p>
                <h3 className="text-2xl mb-3">{s.title}</h3>
                <p className="text-primary-foreground/75 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="section">
        <div className="container">
          <p className="eyebrow mb-4">Pourquoi ces audios ?</p>
          <h2 className="text-3xl sm:text-5xl text-foreground mb-12 max-w-2xl">Une pratique qui s'adapte à votre rythme</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-3xl bg-card border border-border p-7">
                <h3 className="text-2xl mb-3 text-foreground">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio offert (MailerLite) */}
      <section className="section bg-terracotta-light">
        <div className="container max-w-2xl text-center">
          <Gift className="text-accent mx-auto mb-5" size={28} strokeWidth={1.5} />
          <h2 className="text-3xl sm:text-5xl mb-4 text-foreground">Reçois un audio guidé offert</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Reçois gratuitement une pause guidée pour relâcher les tensions et découvrir ma façon de t'accompagner.
          </p>
          <div className="ml-embedded max-w-lg mx-auto" data-form="d5edhS"></div>
        </div>
      </section>

      {/* Margot */}
      <section className="section">
        <div className="container grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <img src={margotImg} alt="Margot, sophrologue" className="w-full max-w-sm mx-auto aspect-[4/5] object-cover rounded-[2rem] shadow-card" />
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow mb-4">Qui suis-je ?</p>
            <h2 className="text-3xl sm:text-5xl text-foreground mb-2">Margot</h2>
            <p className="text-primary font-medium mb-8">Sophrologue certifiée, psychologue de formation</p>
            <blockquote className="font-serif text-2xl sm:text-3xl leading-snug text-foreground mb-6">
              « J'ai créé ces audios guidés pour proposer des outils simples et accessibles afin d'aider chacun à retrouver plus de calme et d'équilibre dans son quotidien. »
            </blockquote>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ma formation en psychologie et en sophrologie me permet de proposer des pratiques centrées sur la régulation du stress, des émotions, du sommeil et des tensions corporelles.
            </p>
            <Button variant="outline" size="lg" asChild><Link to="/a-propos">En savoir plus <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section bg-secondary">
        <div className="container max-w-3xl text-center">
          <p className="eyebrow mb-4">Témoignages</p>
          <h2 className="text-3xl sm:text-5xl text-foreground mb-6">Ils ont pratiqué</h2>
          <div className="rounded-3xl border border-dashed border-foreground/20 p-8 sm:p-10">
            <MessageCircle className="text-primary mx-auto mb-4" size={26} strokeWidth={1.5} />
            <p className="text-muted-foreground leading-relaxed">
              Les premiers retours seront partagés ici très bientôt. Vous avez écouté un cycle ? Votre avis compte.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-5 text-primary font-medium">Partager mon expérience <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container max-w-3xl">
          <p className="eyebrow mb-4">Questions fréquentes</p>
          <h2 className="text-3xl sm:text-5xl text-foreground mb-10">Bon à savoir</h2>
          <FaqList items={faq} />
          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <Button variant="hero" asChild><Link to="/audios">Découvrir les audios <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
