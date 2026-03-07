import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Play, Download, Clock, ArrowLeft } from "lucide-react";

const cyclesData: Record<string, { title: string; description: string; audios: { title: string; description: string; duration: string }[] }> = {
  "gestion-du-stress": {
    title: "Gestion du stress",
    description: "Une série d'audios guidés pour relâcher la pression mentale et calmer le système nerveux. Ces exercices vous aideront à retrouver un état de calme intérieur.",
    audios: [
      { title: "Scan corporel de détente", description: "Un parcours guidé du corps pour identifier et relâcher les zones de tension.", duration: "8 min" },
      { title: "Respirer pour relâcher le stress", description: "Un exercice de respiration simple pour apaiser le système nerveux.", duration: "5 min" },
      { title: "Lâcher les tensions mentales", description: "Une visualisation pour relâcher la pression mentale accumulée.", duration: "7 min" },
    ],
  },
  "equilibre-emotionnel": {
    title: "Équilibre émotionnel",
    description: "Des pratiques pour mieux comprendre et réguler ses émotions au quotidien.",
    audios: [
      { title: "Accueillir ses émotions", description: "Apprendre à observer ses émotions sans jugement.", duration: "6 min" },
      { title: "Respiration apaisante", description: "Un exercice de respiration pour calmer les émotions fortes.", duration: "4 min" },
      { title: "Visualisation d'équilibre", description: "Retrouver un sentiment de stabilité intérieure.", duration: "8 min" },
    ],
  },
  "sommeil": {
    title: "Sommeil",
    description: "Préparer le corps et l'esprit à un sommeil plus réparateur grâce à des exercices doux et progressifs.",
    audios: [
      { title: "Détente progressive du soir", description: "Relâcher chaque partie du corps pour préparer le sommeil.", duration: "10 min" },
      { title: "Respiration du soir", description: "Un rythme respiratoire apaisant pour favoriser l'endormissement.", duration: "5 min" },
      { title: "Lâcher prise mental", description: "Libérer les pensées de la journée pour un sommeil serein.", duration: "7 min" },
    ],
  },
  "detente-corporelle": {
    title: "Détente corporelle",
    description: "Relâcher les tensions physiques accumulées grâce à des exercices simples et guidés.",
    audios: [
      { title: "Scan corporel complet", description: "Un parcours détaillé de tout le corps pour relâcher les tensions.", duration: "10 min" },
      { title: "Relâchement des épaules et du dos", description: "Cibler les zones de tension les plus fréquentes.", duration: "6 min" },
      { title: "Détente profonde", description: "Un exercice de relaxation profonde pour tout le corps.", duration: "8 min" },
    ],
  },
  "pause-mentale": {
    title: "Pause mentale",
    description: "Retrouver de la clarté et calmer l'agitation mentale en quelques minutes.",
    audios: [
      { title: "Pause respiration", description: "3 minutes pour se recentrer et calmer le mental.", duration: "3 min" },
      { title: "Recentrage", description: "Revenir à l'instant présent et retrouver de la clarté.", duration: "5 min" },
      { title: "Calme intérieur", description: "Une visualisation pour retrouver un espace de calme.", duration: "7 min" },
    ],
  },
  "energie-et-recuperation": {
    title: "Énergie et récupération",
    description: "Des exercices pour retrouver clarté mentale et vitalité au quotidien.",
    audios: [
      { title: "Respiration dynamisante", description: "Retrouver de l'énergie en quelques minutes.", duration: "4 min" },
      { title: "Activation corporelle", description: "Réveiller le corps avec douceur et intention.", duration: "6 min" },
      { title: "Visualisation énergisante", description: "Recharger les batteries grâce à la visualisation.", duration: "7 min" },
    ],
  },
};

const CycleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cycle = slug ? cyclesData[slug] : null;

  if (!cycle) {
    return (
      <Layout>
        <div className="py-24 text-center container">
          <h1 className="text-2xl font-semibold mb-4 text-foreground">Cycle introuvable</h1>
          <Button variant="outline" asChild>
            <Link to="/audios"><ArrowLeft size={14} /> Retour aux audios</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="container max-w-3xl">
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link to="/audios"><ArrowLeft size={14} /> Retour aux audios</Link>
          </Button>

          <div className="fade-in-up">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">{cycle.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">{cycle.description}</p>
          </div>

          <div className="space-y-4">
            {cycle.audios.map((audio, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                      Audio {index + 1} — {audio.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">{audio.description}</p>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock size={12} />
                      <span>{audio.duration}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="default" size="sm">
                      <Play size={14} /> Écouter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download size={14} /> Télécharger
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ko-fi placeholder */}
          <div className="mt-12 p-8 bg-sand-light rounded-2xl text-center">
            <p className="text-muted-foreground text-sm mb-3">
              Vous souhaitez soutenir ce projet ou accéder à des contenus exclusifs ?
            </p>
            <Button variant="warm" asChild>
              <a href="https://ko-fi.com" target="_blank" rel="noopener noreferrer">
                Soutenir sur Ko-fi
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CycleDetail;
