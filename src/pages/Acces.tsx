import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Download, Loader2, Music, ShieldX } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const CYCLE_NAMES: Record<string, string> = {
  stress: "Cycle Régulation du stress",
  sommeil: "Cycle Sommeil",
  energie: "Cycle Énergie",
  motivation: "Cycle Motivation",
};

type AccessState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ok"; cycleSlug: string; audios: { name: string; url: string }[] };

const Acces = () => {
  const { token } = useParams<{ token: string }>();
  const [state, setState] = useState<AccessState>({ status: "loading" });

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase.functions.invoke("get-audio-access", {
        body: { token },
      });
      if (error || !data?.cycleSlug) {
        setState({ status: "error" });
      } else {
        setState({ status: "ok", cycleSlug: data.cycleSlug, audios: data.audios ?? [] });
      }
    };
    load();
  }, [token]);

  return (
    <Layout>
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-xl">
            {state.status === "loading" && (
              <div className="flex flex-col items-center gap-4 py-16">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <p className="text-muted-foreground">Vérification de votre accès…</p>
              </div>
            )}

            {state.status === "error" && (
              <div className="rounded-2xl bg-card p-8 text-center shadow-sm sm:p-12">
                <ShieldX className="mx-auto h-12 w-12 text-destructive" />
                <h1 className="mt-6 font-serif text-3xl">Lien invalide</h1>
                <p className="mt-4 text-muted-foreground">
                  Ce lien d'accès n'est pas valide ou l'achat associé n'a pas
                  été confirmé. Si vous pensez qu'il s'agit d'une erreur,
                  contactez-moi à pauses-sophro-margot@outlook.fr.
                </p>
                <Button asChild variant="hero" size="lg" className="mt-8">
                  <Link to="/audios">Voir les cycles</Link>
                </Button>
              </div>
            )}

            {state.status === "ok" && (
              <div>
                <p className="eyebrow text-center">Votre espace personnel</p>
                <h1 className="mt-3 text-center font-serif text-3xl sm:text-4xl">
                  {CYCLE_NAMES[state.cycleSlug] ?? "Votre cycle"}
                </h1>
                <p className="mt-4 text-center text-muted-foreground">
                  Voici vos audios guidés. Vous pouvez les écouter ou les
                  télécharger autant de fois que vous le souhaitez.
                </p>
                <div className="mt-8 space-y-4">
                  {state.audios.length === 0 && (
                    <p className="rounded-xl bg-secondary p-6 text-center text-sm text-muted-foreground">
                      Vos audios sont en cours de préparation. Revenez dans
                      quelques instants.
                    </p>
                  )}
                  {state.audios.map((audio, i) => (
                    <div
                      key={audio.name}
                      className="flex items-center justify-between gap-4 rounded-xl bg-card p-5 shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <Music className="h-5 w-5 shrink-0 text-primary" />
                        <span className="font-medium">Audio {i + 1}</span>
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <a href={audio.url} download>
                          <Download className="mr-2 h-4 w-4" />
                          Télécharger
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Acces;
