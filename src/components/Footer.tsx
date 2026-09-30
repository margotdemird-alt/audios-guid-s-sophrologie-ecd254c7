import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";
import { navLinks } from "./Navbar";

const Footer = () => {
  return (
    <footer className="bg-olive-dark text-primary-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <p className="font-serif text-2xl mb-3">
              Les Pauses Sophro <em className="opacity-80">de Margot</em>
            </p>
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
              Des audios guidés de sophrologie pour retrouver calme, équilibre et élan au quotidien.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { href: "https://www.instagram.com/les_pauses_sophro_de_margot/", icon: Instagram, label: "Instagram" },
                { href: "https://www.facebook.com/profile.php?id=100089760737215", icon: Facebook, label: "Facebook" },
                { href: "mailto:pauses-sophro-margot@outlook.fr", icon: Mail, label: "Email" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-11 h-11 rounded-full border border-primary-foreground/25 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors">
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60 mb-4">Navigation</p>
            <div className="flex flex-col gap-3">
              {[...navLinks, { to: "/quel-cycle-pour-moi", label: "Quel cycle pour moi ?" }].map((link) => (
                <Link key={link.to} to={link.to} className="text-primary-foreground/85 hover:text-primary-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60 mb-4">Informations</p>
            <div className="flex flex-col gap-3">
              <Link to="/mentions-legales" className="text-primary-foreground/85 hover:text-primary-foreground">Mentions légales</Link>
              <Link to="/politique-de-confidentialite" className="text-primary-foreground/85 hover:text-primary-foreground">Politique de confidentialité</Link>
              <Link to="/conditions-utilisation" className="text-primary-foreground/85 hover:text-primary-foreground">Conditions d'utilisation</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-6 flex flex-col sm:flex-row gap-2 justify-between text-xs text-primary-foreground/60">
          <p>© 2026 Les Pauses Sophro de Margot. Tous droits réservés.</p>
          <p>Les audios ne remplacent pas un suivi médical.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
