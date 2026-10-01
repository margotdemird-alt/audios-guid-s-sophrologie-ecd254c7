import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const steps = [
  "Choisir un moment calme dans votre journée",
  "S'installer confortablement, assis ou allongé",
  "Écouter avec des écouteurs si possible pour une meilleure immersion",
];

const forWho = ["Du stress", "Une surcharge émotionnelle", "Des difficultés de sommeil", "Des tensions physiques", "Une fatigue mentale"];

const HowToPractice = () => (
  <Layout>
    <section className="py-16 md:py-28">
      <div className="container max-w-3xl">
        <p className="text-xs uppercase tracking-[0.18em] text-accent mb-4 fade-in-up">Guide</p>
        <h1 className="text-4xl md:text-6xl mb-6 fade-in-up">Comment pratiquer</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-xl">
          La sophrologie est une pratique simple et accessible. Voici quelques conseils pour profiter pleinement des audios guidés.
        </p>

        <h2 className="text-2xl md:text-3xl mb-6">Comment écouter</h2>
        <ol className="mb-16 divide-y divide-border border-y border-border">
          {steps.map((s, i) => (
            <li key={s} className="flex gap-5 py-5">
              <span className="font-serif text-2xl text-accent w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <p className="pt-1">{s}</p>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl md:text-3xl mb-6">Fréquence de pratique</h2>
        <div className="bg-secondary rounded-2xl p-6 md:p-8 mb-16 space-y-3 text-muted-foreground leading-relaxed">
          <p>Une pratique courte et régulière est plus efficace qu'une longue séance occasionnelle.</p>
          <p>Même <strong className="text-foreground">3 à 5 minutes</strong> peuvent aider le corps à retrouver un état de détente. L'important est la régularité.</p>
        </div>

        <h2 className="text-2xl md:text-3xl mb-6">Pour qui sont ces audios ?</h2>
        <p className="text-muted-foreground mb-5">Ces audios peuvent aider les personnes qui ressentent :</p>
        <div className="flex flex-wrap gap-3 mb-14">
          {forWho.map((f) => (
            <span key={f} className="bg-sage-light px-4 py-2 rounded-full text-sm">{f}</span>
          ))}
        </div>

        <Link to="/audios" className="h-14 px-8 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-medium hover:bg-olive-dark transition-colors w-full sm:w-auto">
          Découvrir les audios
        </Link>
      </div>
    </section>
  </Layout>
);

export default HowToPractice;
