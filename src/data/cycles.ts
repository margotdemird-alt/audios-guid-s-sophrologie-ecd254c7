import { Brain, Moon, Zap, Flame, Leaf, type LucideIcon } from "lucide-react";

export interface Cycle {
  slug: string;
  title: string;
  shortName: string;
  benefit: string;
  icon: LucideIcon;
  kofiUrl?: string;
  available: boolean;
}

export const cycles: Cycle[] = [
  { slug: "stress", title: "Cycle Régulation du stress", shortName: "Stress", benefit: "Apaiser les tensions du quotidien.", icon: Brain, kofiUrl: "https://ko-fi.com/s/248ec202e1", available: true },
  { slug: "sommeil", title: "Cycle Sommeil", shortName: "Sommeil", benefit: "Retrouver le chemin du sommeil.", icon: Moon, kofiUrl: "https://ko-fi.com/s/448e43182a", available: true },
  { slug: "energie", title: "Cycle Énergie", shortName: "Énergie", benefit: "Sortir de la fatigue persistante.", icon: Zap, kofiUrl: "https://ko-fi.com/s/20030c5d41", available: true },
  { slug: "motivation", title: "Cycle Motivation", shortName: "Motivation", benefit: "Retrouver l'élan à son rythme.", icon: Flame, kofiUrl: "https://ko-fi.com/s/f7529011f4", available: true },
  { slug: "douleurs-corporelles", title: "Cycle Douleurs corporelles", shortName: "Douleurs corporelles", benefit: "Relâcher les tensions installées.", icon: Leaf, available: false },
];

export const availableCycles = cycles.filter((c) => c.available);
export const upcomingCycles = cycles.filter((c) => !c.available);
export const getCycle = (slug?: string) => cycles.find((c) => c.slug === slug);
