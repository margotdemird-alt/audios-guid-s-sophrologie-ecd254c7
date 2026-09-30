import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/audios", label: "Audios" },
  { to: "/sophrologie", label: "Sophrologie" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (to: string) => (to === "/" ? location.pathname === "/" : location.pathname.startsWith(to));

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-serif text-lg md:text-xl text-foreground leading-none">
          Les Pauses Sophro <em className="text-primary">de Margot</em>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[15px] transition-colors hover:text-foreground ${isActive(link.to) ? "text-foreground" : "text-muted-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/audios" className="h-10 px-5 inline-flex items-center rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-olive-dark transition-colors">
            Les audios
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden -mr-2 p-3 text-foreground" aria-label="Menu" aria-expanded={isOpen}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border fade-in h-[calc(100dvh-4rem)]">
          <div className="container py-6 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-serif text-3xl py-3 border-b border-border/60 ${isActive(link.to) ? "text-primary" : "text-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/audios" className="mt-8 h-14 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-base font-medium">
              Découvrir les audios
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
