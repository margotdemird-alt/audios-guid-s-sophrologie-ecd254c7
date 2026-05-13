import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Sparkles, Moon, Heart, Brain, Wind, Leaf, Clock } from "lucide-react";

type CycleKey = "sommeil" | "stress" | "energie" | "motivation" | "ancrage" | "calme";

const cycles: Record<CycleKey, { title: string; description: string; icon: typeof Moon; kofiUrl?: string }> = {
  sommeil: {
    title: "Cycle Sommeil",
    description: "Pour retrouver le chemin d'un sommeil apaisé et réparateur.",
    icon: Moon,
    kofiUrl: "https://ko-fi.com/s/448e43182a",
  },
  stress: {
    title: "Cycle Régulation du stress",
    description: "Pour apaiser les tensions du quotidien et retrouver du calme.",
    icon: Brain,
  },
  energie: {
    title: "Cycle Énergie",
    description: "Pour sortir de la fatigue persistante et raviver la vitalité.",
    icon: Sparkles,
    kofiUrl: "https://ko-fi.com/s/20030c5d41",
  },
  motivation: {
    title: "Cycle Motivation",
    description: "Pour retrouver l'élan, à son rythme et en douceur.",
    icon: Heart,
    kofiUrl: "https://ko-fi.com/s/f7529011f4",
  },
  ancrage: {
    title: "Cycle Ancrage",
    description: "Pour se reconnecter à soi et retrouver une stabilité intérieure.",
    icon: Leaf,
  },
  calme: {
    title: "Cycle Calme",
    description: "Pour cultiver un espace mental serein face aux émotions.",
    icon: Wind,
  },
};

type Question = {
  id: string;
  text: string;
  options: { label: string; cycles: CycleKey[] }[];
};

const questions: Question[] = [
  {
    id: "q1",
    text: "Comment vous sentez-vous ces dernières semaines ?",
    options: [
      { label: "Fatigué·e, comme vidé·e d'énergie", cycles: ["energie"] },
      { label: "Tendu·e, sous pression", cycles: ["stress", "calme"] },
      { label: "Sans élan, démotivé·e", cycles: ["motivation"] },
      { label: "Agité·e, dispersé·e", cycles: ["ancrage", "calme"] },
    ],
  },
  {
    id: "q2",
    text: "Comment se passent vos nuits ?",
    options: [
      { label: "Difficiles : endormissement long ou réveils nocturnes", cycles: ["sommeil"] },
      { label: "Correctes mais pas vraiment réparatrices", cycles: ["sommeil", "stress"] },
      { label: "Plutôt bonnes", cycles: [] },
      { label: "Cela dépend des semaines", cycles: ["sommeil"] },
    ],
  },
  {
    id: "q3",
    text: "Qu'est-ce qui pèse le plus dans votre quotidien ?",
    options: [
      { label: "Un stress chronique difficile à relâcher", cycles: ["stress"] },
      { label: "Des émotions intenses, parfois envahissantes", cycles: ["calme", "ancrage"] },
      { label: "Un manque d'énergie pour avancer", cycles: ["energie", "motivation"] },
      { label: "Des tensions corporelles ou inconforts", cycles: ["stress", "ancrage"] },
    ],
  },
  {
    id: "q4",
    text: "Comment vivez-vous votre concentration ?",
    options: [
      { label: "Difficile, l'esprit part dans tous les sens", cycles: ["ancrage", "calme"] },
      { label: "Je n'arrive plus à m'y mettre", cycles: ["motivation", "energie"] },
      { label: "Cela va, mais je me sens vite saturé·e", cycles: ["stress"] },
      { label: "Plutôt stable", cycles: [] },
    ],
  },
  {
    id: "q5",
    text: "Qu'aimeriez-vous ressentir davantage ?",
    options: [
      { label: "Plus de calme intérieur", cycles: ["calme", "stress"] },
      { label: "Plus d'énergie et d'élan", cycles: ["energie", "motivation"] },
      { label: "Un sommeil profond et réparateur", cycles: ["sommeil"] },
      { label: "Une présence à moi-même, ancrée", cycles: ["ancrage"] },
    ],
  },
];

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);

  const handleSelect = (qId: string, idx: number) => {
    const next = { ...answers, [qId]: idx };
    setAnswers(next);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  const computeRecommendations = (): CycleKey[] => {
    const scores: Record<CycleKey, number> = {
      sommeil: 0, stress: 0, energie: 0, motivation: 0, ancrage: 0, calme: 0,
    };
    questions.forEach((q) => {
      const idx = answers[q.id];
      if (idx === undefined) return;
      q.options[idx].cycles.forEach((c) => { scores[c] += 1; });
    });
    const sorted = (Object.keys(scores) as CycleKey[])
      .filter((k) => scores[k] > 0)
      .sort((a, b) => scores[b] - scores[a]);
    if (sorted.length === 0) return ["calme"];
    return sorted.slice(0, 3);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
  };

  const progress = done ? 100 : ((step) / questions.length) * 100;

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-sand-light min-h-[80vh]">
        <div className="container max-w-3xl">
          <div className="text-center mb-10 fade-in-up">
            <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-4 text-foreground">
              Quel cycle est fait pour moi ?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Quelques questions douces pour vous orienter vers la pratique la plus adaptée à ce que vous vivez aujourd'hui.
            </p>
          </div>

          {!done ? (
            <div className="bg-warm-white rounded-2xl p-6 sm:p-10 shadow-card border border-border/50 fade-in-up">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-muted-foreground mb-2">
                  <span>Question {step + 1} / {questions.length}</span>
                </div>
                <div className="w-full h-1.5 bg-sand-light rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-foreground">
                {questions[step].text}
              </h2>

              <div className="space-y-3">
                {questions[step].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(questions[step].id, idx)}
                    className="w-full text-left bg-sand-light hover:bg-primary hover:text-primary-foreground transition-colors duration-200 rounded-xl px-5 py-4 text-base sm:text-lg text-foreground border border-transparent hover:border-primary"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {step > 0 && (
                <div className="mt-8">
                  <Button variant="ghost" size="sm" onClick={() => setStep(step - 1)}>
                    <ArrowLeft size={16} /> Question précédente
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="fade-in-up">
              <div className="text-center mb-10">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Sparkles className="text-primary" size={26} />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-3 text-foreground">
                  Voici les pratiques qui pourraient vous accompagner
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  Prenez le temps de choisir celle qui résonne le plus avec vous en ce moment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {computeRecommendations().map((key) => {
                  const c = cycles[key];
                  const Icon = c.icon;
                  return (
                    <div
                      key={key}
                      className="bg-warm-white rounded-2xl p-6 sm:p-8 shadow-card border border-border/50 flex flex-col"
                    >
                      <Icon className="text-primary mb-4" size={30} />
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-2 text-foreground">
                        {c.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                        {c.description}
                      </p>
                      {c.kofiUrl ? (
                        <Button
                          variant="outline"
                          asChild
                          className="self-start hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                        >
                          <a href={c.kofiUrl} target="_blank" rel="noopener noreferrer">
                            Découvrir ce cycle <ArrowRight size={16} />
                          </a>
                        </Button>
                      ) : (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock size={16} /> Bientôt disponible
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="text-center">
                <Button variant="ghost" onClick={reset}>
                  <ArrowLeft size={16} /> Refaire le questionnaire
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Quiz;
