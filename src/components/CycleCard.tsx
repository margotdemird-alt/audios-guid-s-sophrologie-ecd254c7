import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Cycle } from "@/data/cycles";

const CycleCard = ({ cycle }: { cycle: Cycle }) => {
  if (!cycle.available) {
    return (
      <div className="rounded-3xl border border-dashed border-foreground/20 p-7 sm:p-8 flex flex-col">
        <cycle.icon className="text-muted-foreground mb-6" size={26} strokeWidth={1.5} />
        <span className="eyebrow text-muted-foreground mb-2">Bientôt disponible</span>
        <h3 className="text-2xl sm:text-3xl mb-2 text-foreground">{cycle.title}</h3>
        <p className="text-muted-foreground">{cycle.benefit}</p>
      </div>
    );
  }
  return (
    <Link
      to={`/audios/${cycle.slug}`}
      className="group rounded-3xl bg-card border border-border p-7 sm:p-8 flex flex-col shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mb-6">
        <cycle.icon className="text-primary" size={22} strokeWidth={1.6} />
      </div>
      <h3 className="text-2xl sm:text-3xl mb-2 text-foreground">{cycle.title}</h3>
      <p className="text-muted-foreground text-base sm:text-lg mb-6">{cycle.benefit}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground">4 semaines</span>
        <span className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground">4 audios guidés</span>
      </div>
      <span className="mt-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium self-stretch sm:self-start group-hover:bg-olive-dark transition-colors">
        Découvrir le cycle <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
};

export default CycleCard;
