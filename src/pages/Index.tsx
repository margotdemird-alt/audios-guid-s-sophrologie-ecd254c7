import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldCheck, Brain as BrainIcon, Bed, Leaf, HeartPulse, Gift } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import margotImg from "@/assets/margot-portrait.jpg";
import { MapPin, Clock, Heart, Brain, Moon, Sparkles, Wind, ArrowRight } from "lucide-react";

const cycles = [
  { title: "Cycle Motivation", description: "Retrouver l'élan à son rythme.", icon: Heart, available: true, kofiUrl: "https://ko-fi.com/s/f7529011f4" },
  { title: "Cycle Énergie", description: "Sortir de la fatigue persistante.", icon: Sparkles, available: true, kofiUrl: "https://ko-fi.com/s/20030c5d41" },
  { title: "Cycle Sommeil", description: "Retrouver le chemin du sommeil.", icon: Moon, available: true, kofiUrl: "https://ko-fi.com/s/448e43182a" },
  { title: "Cycle Régulation du stress", description: "Apaiser les tensions du quotidien.", icon: Brain, available: false },
  { title: "Cycle Douleurs corporelles", description: "Relâcher les tensions installées.", icon: Wind, available: false },
];

const benefits = [
  { icon: MapPin, title: "Pratiquer n'importe où", description: "Chez vous, au bureau ou en déplacement." },
  { icon: Clock, title: "Séances courtes", description: "De 8 à 12 minutes seulement." },
  { icon: Sparkles, title: "Facile à intégrer", description: "S'adapte à votre rythme quotidien." },
  { icon: Heart, title: "Réguler les émotions", description: "Retrouver un équilibre intérieur." },
  { icon: Wind, title: "Détente et récupération", description: "Relâcher les tensions accumulées." },
];

const Index = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

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
        <div className="container max-w-5xl fade-in-up">
          <div className="text-center mb-14">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Comprendre</p>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-4">Qu'est-ce que la sophrologie ?</h2>
            <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-14">
            {/* Left: description */}
            <div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                La sophrologie est une méthode douce qui associe <strong className="text-foreground">respiration</strong>, <strong className="text-foreground">détente corporelle</strong> et <strong className="text-foreground">visualisation</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Elle aide à mieux gérer le stress, à apaiser les émotions et à relâcher les tensions accumulées dans le corps. C'est une approche globale qui agit à la fois sur le mental et sur le physique.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Contrairement à certaines idées reçues, la sophrologie ne demande aucune compétence particulière. Il suffit de se laisser guider par la voix et de suivre des exercices simples, adaptés à chacun.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Simple et accessible, elle peut se pratiquer facilement grâce à des audios guidés, sans expérience préalable.
              </p>
            </div>

            {/* Right: benefit cards */}
            <div className="space-y-3">
              {[
                { icon: ShieldCheck, label: "Réguler le stress", desc: "Retrouver un état de calme face aux pressions quotidiennes" },
                { icon: HeartPulse, label: "Apaiser le système nerveux", desc: "Activer la détente profonde du corps" },
                { icon: Leaf, label: "Relâcher les tensions", desc: "Libérer les tensions physiques accumulées" },
                { icon: Bed, label: "Améliorer le sommeil", desc: "Favoriser un endormissement plus serein" },
                { icon: BrainIcon, label: "Retrouver le calme intérieur", desc: "Cultiver un espace mental apaisé" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-sand-light rounded-xl p-4 hover:shadow-soft transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-warm-white flex items-center justify-center shrink-0 shadow-soft">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium text-base">{item.label}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {cycles.map((cycle) => (
              <div key={cycle.title} className={`bg-sand-light rounded-2xl p-6 sm:p-10 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col ${!cycle.available ? 'opacity-75' : ''}`}>
                <cycle.icon className={`${cycle.available ? 'text-primary' : 'text-muted-foreground'} mb-4 sm:mb-5`} size={32} />
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-foreground">{cycle.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 flex-1">{cycle.description}</p>
                {cycle.available ? (
                  <Button variant="outline" size="default" asChild className="self-start hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                    <a href={cycle.kofiUrl} target="_blank" rel="noopener noreferrer">
                      Accéder au cycle <ArrowRight size={16} />
                    </a>
                  </Button>
                ) : (
                  <span className="text-sm text-muted-foreground">Bientôt disponible</span>
                )}
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
