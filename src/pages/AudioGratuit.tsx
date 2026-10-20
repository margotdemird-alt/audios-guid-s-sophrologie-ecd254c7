import { Link } from "react-router-dom";
import { Clock, Sprout, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  { icon: Clock, text: "Environ 10 minutes" },
  { icon: Sprout, text: "Accessible aux débutants" },
  { icon: Headphones, text: "À écouter chez vous, avec ou sans écouteurs" },
];

const AudioGratuit = () => {
  const scrollToForm = () =>
    document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="container py-5 text-center">
        <Link to="/" className="font-serif text-lg text-foreground">Les Pauses Sophro de Margot</Link>
      </header>

      <main className="flex-1">
        <section className="py-10 sm:py-16">
          <div className="container max-w-2xl text-center">
            <p className="eyebrow mb-4">Audio guidé offert</p>
            <h1 className="text-3xl sm:text-5xl text-foreground mb-5 leading-tight">
              10 minutes pour relâcher les tensions et retrouver un peu de calme
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Une pause guidée de sophrologie à écouter quand le mental s'agite, que les tensions s'accumulent ou que vous ressentez simplement le besoin de souffler.
            </p>
            <div id="formulaire" className="rounded-3xl bg-terracotta-light p-5 sm:p-8">
              <div className="ml-embedded max-w-lg mx-auto" data-form="d5edhS"></div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              L'audio vous sera envoyé directement par e-mail. Vous pourrez vous désinscrire à tout moment.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-sand-light">
          <div className="container max-w-3xl">
            <h2 className="text-2xl sm:text-4xl text-foreground text-center mb-8">
              Une pause simple, même si vous n'avez jamais pratiqué
            </h2>
            <ul className="grid sm:grid-cols-3 gap-4">
              {points.map(({ icon: Icon, text }) => (
                <li key={text} className="rounded-3xl bg-card border border-border p-6 text-center">
                  <Icon className="text-primary mx-auto mb-3" size={26} strokeWidth={1.5} />
                  <p className="text-foreground">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container max-w-2xl text-center">
            <h2 className="text-2xl sm:text-4xl text-foreground mb-5">Ce que cette pause vous propose</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pendant quelques minutes, je vous guide pour revenir au corps, relâcher progressivement certaines tensions et créer un espace plus calme dans votre journée. Il n'y a rien à réussir : vous avez simplement à vous laisser guider.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-sand-light">
          <div className="container max-w-2xl text-center">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Je suis Margot, sophrologue certifiée et psychologue de formation. Je crée Les Pauses Sophro de Margot pour proposer des pratiques simples et accessibles autour du stress, du sommeil, des tensions et de l'énergie.
            </p>
            <Button size="lg" className="w-full sm:w-auto rounded-full" onClick={scrollToForm}>
              Recevoir l'audio gratuitement
            </Button>
          </div>
        </section>
      </main>

      <footer className="container py-6 text-center text-sm text-muted-foreground">
        <Link to="/mentions-legales" className="hover:text-foreground">Mentions légales</Link>
        {" · "}
        <Link to="/politique-de-confidentialite" className="hover:text-foreground">Confidentialité</Link>
      </footer>
    </div>
  );
};

export default AudioGratuit;
