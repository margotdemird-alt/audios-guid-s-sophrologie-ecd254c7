import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Moon, Wind, Sparkles, Coffee, ArrowRight } from "lucide-react";

const cycles = [
  { slug: "gestion-du-stress", title: "Gestion du stress", description: "Une série d'audios guidés pour relâcher la pression mentale et calmer le système nerveux.", content: ["Exercices de respiration", "Détente corporelle", "Relâchement mental"], icon: Brain },
  { slug: "equilibre-emotionnel", title: "Équilibre émotionnel", description: "Mieux comprendre et réguler ses émotions au quotidien.", content: ["Accueil des émotions", "Respiration apaisante", "Visualisation positive"], icon: Heart },
  { slug: "sommeil", title: "Sommeil", description: "Préparer le corps et l'esprit à un sommeil plus réparateur.", content: ["Détente progressive", "Respiration du soir", "Lâcher prise mental"], icon: Moon },
  { slug: "detente-corporelle", title: "Détente corporelle", description: "Relâcher les tensions physiques accumulées dans le corps.", content: ["Scan corporel", "Relâchement musculaire", "Détente profonde"], icon: Wind },
  { slug: "pause-mentale", title: "Pause mentale", description: "Retrouver de la clarté et calmer l'agitation mentale.", content: ["Pause respiration", "Recentrage", "Calme intérieur"], icon: Coffee },
  { slug: "energie-et-recuperation", title: "Énergie et récupération", description: "Retrouver clarté mentale et vitalité.", content: ["Respiration dynamisante", "Activation corporelle", "Visualisation énergisante"], icon: Sparkles },
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cycles.map((cycle) => (
              <div key={cycle.slug} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col">
                <cycle.icon className="text-primary mb-4" size={28} />
                <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">{cycle.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cycle.description}</p>
                <ul className="mb-6 flex-1">
                  {cycle.content.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground py-1">
                      <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" asChild className="self-start">
                  <Link to={`/audios/${cycle.slug}`}>
                    Accéder aux audios <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Audios;
