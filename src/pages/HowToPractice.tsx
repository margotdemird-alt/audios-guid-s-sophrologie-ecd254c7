import Layout from "@/components/Layout";
import { Headphones, RotateCcw, Users } from "lucide-react";

const HowToPractice = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6 text-foreground">Comment pratiquer</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              La sophrologie est une pratique simple et accessible. Voici quelques conseils pour profiter pleinement des audios guidés.
            </p>
          </div>

          {/* Comment écouter */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Headphones className="text-primary" size={24} />
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Comment écouter</h2>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft space-y-4">
              {[
                "Choisir un moment calme dans votre journée",
                "S'installer confortablement, assis ou allongé",
                "Écouter avec des écouteurs si possible pour une meilleure immersion",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fréquence */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <RotateCcw className="text-primary" size={24} />
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Fréquence de pratique</h2>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Une pratique courte et régulière est plus efficace qu'une longue séance occasionnelle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Même <strong className="text-foreground">3 à 5 minutes</strong> peuvent aider le corps à retrouver un état de détente. L'important est la régularité.
              </p>
            </div>
          </div>

          {/* Pour qui */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-primary" size={24} />
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Pour qui sont ces audios ?</h2>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ces audios peuvent aider les personnes qui ressentent :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Du stress", "Une surcharge émotionnelle", "Des difficultés de sommeil", "Des tensions physiques", "Une fatigue mentale"].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 bg-sand-light rounded-xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowToPractice;
