import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import margotImg from "@/assets/margot-portrait.jpg";
import { MapPin, Clock, Heart, Brain, Moon, Sparkles, Wind, ArrowRight } from "lucide-react";

const cycles = [
  { title: "Gestion du stress", description: "Apprendre à relâcher la pression mentale et apaiser le système nerveux.", icon: Brain },
  { title: "Équilibre émotionnel", description: "Mieux comprendre et réguler ses émotions.", icon: Heart },
  { title: "Sommeil", description: "Préparer le corps et l'esprit à un sommeil plus réparateur.", icon: Moon },
  { title: "Détente corporelle", description: "Relâcher les tensions physiques accumulées.", icon: Wind },
  { title: "Énergie et récupération", description: "Retrouver clarté mentale et vitalité.", icon: Sparkles },
];

const benefits = [
  { icon: MapPin, title: "Pratiquer n'importe où", description: "Chez vous, au bureau ou en déplacement." },
  { icon: Clock, title: "Séances courtes", description: "De 3 à 10 minutes seulement." },
  { icon: Sparkles, title: "Facile à intégrer", description: "S'adapte à votre rythme quotidien." },
  { icon: Heart, title: "Réguler les émotions", description: "Retrouver un équilibre intérieur." },
  { icon: Wind, title: "Détente et récupération", description: "Relâcher les tensions accumulées." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Paysage de dunes et herbes de pampas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-warm-white/60" />
        </div>
        <div className="relative container text-center max-w-3xl py-20 fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-foreground">
            Des audios guidés de sophrologie pour apaiser l'esprit et relâcher le corps
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Des pratiques courtes et accessibles pour réguler le stress, calmer les émotions et retrouver un état de détente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <Link to="/audios">Découvrir les audios</Link>
            </Button>
            <Button variant="hero-outline" asChild>
              <Link to="/comment-pratiquer">Découvrir la sophrologie</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que la sophrologie */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container max-w-3xl text-center fade-in-up">
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-foreground">Qu'est-ce que la sophrologie ?</h2>
          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            La sophrologie est une méthode qui associe respiration, détente corporelle et visualisation. Elle permet de :
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto">
            {["Réguler le stress", "Apaiser le système nerveux", "Relâcher les tensions du corps", "Améliorer le sommeil", "Retrouver un état de calme intérieur"].map((item) => (
              <div key={item} className="flex items-start gap-3 p-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 text-base">
            La sophrologie est simple, accessible et peut se pratiquer facilement grâce à des audios guidés.
          </p>
        </div>
      </section>

      {/* Pourquoi des audios guidés */}
      <section className="py-20 md:py-28 bg-sand-light">
        <div className="container">
          <h2 className="text-2xl md:text-4xl font-semibold mb-14 text-center text-foreground">
            Pourquoi utiliser des audios guidés ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((b) => (
              <div key={b.title} className="bg-warm-white rounded-2xl p-8 shadow-soft hover:shadow-card transition-shadow duration-300">
                <b.icon className="text-primary mb-4" size={28} />
                <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les cycles d'audios */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container">
          <h2 className="text-2xl md:text-4xl font-semibold mb-14 text-center text-foreground">
            Les cycles d'audios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cycles.map((cycle) => (
              <div key={cycle.title} className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col">
                <cycle.icon className="text-primary mb-4" size={28} />
                <h3 className="font-serif text-lg font-semibold mb-3 text-foreground">{cycle.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{cycle.description}</p>
                <Button variant="outline" size="sm" asChild className="self-start">
                  <Link to={`/audios/${cycle.title.toLowerCase().replace(/\s+/g, '-').replace(/[éè]/g, 'e')}`}>
                    Découvrir le programme <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment utiliser les audios */}
      <section className="py-20 md:py-28 bg-sand-light">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-semibold mb-14 text-center text-foreground">
            Comment utiliser les audios ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Trouver un endroit calme", desc: "Installez-vous confortablement, dans un espace où vous ne serez pas dérangé." },
              { step: "2", title: "Écouter l'audio guidé", desc: "Laissez-vous porter par la voix et suivez les instructions simplement." },
              { step: "3", title: "Se laisser guider", desc: "Respirez, détendez-vous et laissez le corps et l'esprit se relâcher." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-serif font-semibold mx-auto mb-5">
                  {s.step}
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos de la praticienne */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-foreground">Margot</h2>
              <p className="text-primary font-medium mb-6">Sophrologue et psychologue</p>
              <blockquote className="text-muted-foreground leading-relaxed mb-4 italic border-l-2 border-primary pl-4">
                "J'ai créé ces audios guidés pour proposer des outils simples et accessibles afin d'aider chacun à retrouver plus de calme et d'équilibre dans son quotidien."
              </blockquote>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                Ma formation en psychologie et en sophrologie me permet de proposer des pratiques centrées sur la régulation du stress, des émotions, du sommeil et des tensions corporelles.
              </p>
              <Button variant="outline" asChild>
                <Link to="/a-propos">En savoir plus <ArrowRight size={14} /></Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img
                src={margotImg}
                alt="Margot, sophrologue et psychologue"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
