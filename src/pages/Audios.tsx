import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Flame, Zap, Moon, Brain, Heart, ArrowRight, Clock } from "lucide-react";

const availableCycles = [
  {
    title: "Cycle Motivation",
    subtitle: "Retrouver l'élan à son rythme",
    icon: Flame,
    kofiUrl: "https://ko-fi.com",
  },
  {
    title: "Cycle Énergie",
    subtitle: "Sortir de la fatigue persistante",
    icon: Zap,
    kofiUrl: "https://ko-fi.com",
  },
  {
    title: "Cycle Sommeil",
    subtitle: "Retrouver le chemin du sommeil",
    icon: Moon,
    kofiUrl: "https://ko-fi.com",
  },
];

const upcomingCycles = [
  {
    title: "Cycle Régulation du stress",
    subtitle: "Apaiser les tensions du quotidien",
    icon: Brain,
  },
  {
    title: "Cycle Douleurs corporelles",
    subtitle: "Relâcher les tensions installées",
    icon: Heart,
  },
];

const Audios = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6 text-foreground">Les cycles d'audios guidés</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Chaque cycle propose une série d'audios courts pour vous accompagner vers plus de calme et de bien-être.
            </p>
          </div>

          {/* Available cycles */}
          <h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Cycles disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {availableCycles.map((cycle) => (
              <div key={cycle.title} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col">
                <cycle.icon className="text-primary mb-4" size={28} />
                <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">{cycle.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{cycle.subtitle}</p>
                <Button variant="outline" size="sm" asChild className="self-start mt-auto">
                  <a href={cycle.kofiUrl} target="_blank" rel="noopener noreferrer">
                    Accéder au cycle <ArrowRight size={14} />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Upcoming cycles */}
          <h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Bientôt disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingCycles.map((cycle) => (
              <div key={cycle.title} className="bg-card rounded-2xl p-8 shadow-soft opacity-75 flex flex-col">
                <cycle.icon className="text-muted-foreground mb-4" size={28} />
                <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">{cycle.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cycle.subtitle}</p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-auto">
                  <Clock size={12} />
                  <span>À venir</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Audios;
