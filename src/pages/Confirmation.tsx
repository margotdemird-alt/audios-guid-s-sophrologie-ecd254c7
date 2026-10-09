import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Confirmation = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <Layout>
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-xl rounded-2xl bg-card p-8 text-center shadow-sm sm:p-12">
            <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
            <h1 className="mt-6 font-serif text-3xl sm:text-4xl">
              Merci pour votre confiance
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Votre paiement est confirmé. Vous allez recevoir dans quelques
              instants un e-mail contenant votre lien personnel d'accès à vos
              audios.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-secondary p-4 text-left">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">
                Pensez à vérifier vos courriers indésirables. Conservez cet
                e-mail : votre lien d'accès est personnel et vous permet de
                réécouter vos audios à tout moment.
              </p>
            </div>
            {!sessionId && (
              <p className="mt-4 text-xs text-muted-foreground">
                Si vous venez de payer, votre e-mail de confirmation est en
                cours d'envoi.
              </p>
            )}
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/">Retour à l'accueil</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Confirmation;
