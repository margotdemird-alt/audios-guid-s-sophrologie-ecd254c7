import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sand-light border-t border-border/50 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Les Pauses Sophro <span className="text-primary font-normal">de Margot</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Des audios guidés pour retrouver calme, équilibre et bien-être au quotidien.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { to: "/", label: "Accueil" },
                { to: "/audios", label: "Audios" },
                { to: "/comment-pratiquer", label: "Comment pratiquer" },
                { to: "/a-propos", label: "À propos" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-serif text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Informations</h4>
            <div className="flex flex-col gap-2.5 mb-6">
              <span className="text-sm text-muted-foreground">Mentions légales</span>
              <span className="text-sm text-muted-foreground">Politique de confidentialité</span>
              <span className="text-sm text-muted-foreground">Conditions d'utilisation</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="mailto:contact@margot-sophrologie.fr" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 text-center">
          <p className="text-xs text-muted-foreground">© 2026 Les Pauses Sophro de Margot. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
