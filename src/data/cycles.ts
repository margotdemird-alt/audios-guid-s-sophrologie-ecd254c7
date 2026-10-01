import { Brain, Moon, Zap, Flame, Leaf, type LucideIcon } from "lucide-react";

export interface CycleDetails {
  subtitle: string;
  startingPoint: string[];
  forWhoIntro: string;
  forWho: string[];
  promise: string;
  audios: { title: string; desc: string }[];
  howTo: string[];
}

export interface Cycle {
  slug: string;
  title: string;
  shortName: string;
  benefit: string;
  icon: LucideIcon;
  kofiUrl?: string;
  available: boolean;
  price?: number;
  details?: CycleDetails;
}

export const CYCLE_PRICE = 35;

const stressDetails: CycleDetails = {
  subtitle: "4 semaines pour relâcher les tensions et retrouver plus facilement le calme.",
  startingPoint: [
    "Quand le stress s'accumule, le corps peut rester en tension même lorsque la situation est passée. Le mental continue de tourner, la fatigue s'installe et il devient parfois difficile de retrouver réellement le calme.",
    "Ce cycle vous propose de prendre quelques minutes chaque semaine pour revenir au corps, relâcher progressivement les tensions et développer des repères simples pour mieux réguler le stress au quotidien.",
  ],
  forWhoIntro: "Ce cycle peut vous accompagner si :",
  forWho: [
    "vous vous sentez régulièrement tendu·e ou sous pression ;",
    "vous avez du mal à redescendre après une journée chargée ;",
    "votre mental continue de tourner lorsque vous voudriez vous détendre ;",
    "vous sentez que votre corps reste en tension ;",
    "vous cherchez une pratique simple et autonome pour retrouver plus facilement le calme.",
  ],
  promise: "Un parcours progressif sur 4 semaines pour apprendre à mieux repérer la montée du stress, relâcher les tensions corporelles et retrouver plus facilement un état de calme grâce à des pratiques de sophrologie guidée.",
  audios: [
    { title: "Faire redescendre la pression", desc: "Une première pratique pour ralentir, revenir aux sensations du corps et commencer à relâcher ce qui s'est accumulé." },
    { title: "Relâcher les tensions du corps", desc: "Une pratique centrée sur la détente corporelle et la respiration pour permettre au corps de relâcher progressivement les tensions." },
    { title: "Retrouver le calme plus facilement", desc: "Développer des repères simples pour revenir plus rapidement vers un état de calme lorsque la pression monte." },
    { title: "Ancrer de nouveaux repères", desc: "Une dernière pratique pour consolider les sensations de calme et intégrer ces outils dans le quotidien." },
  ],
  howTo: [
    "Commencez par un audio par semaine et prenez le temps de le réécouter plusieurs fois si vous en ressentez le besoin.",
    "Installez-vous assis·e ou allongé·e dans un endroit calme. Vous pouvez utiliser un casque ou des écouteurs pour favoriser l'immersion, mais ce n'est pas obligatoire.",
    "Il n'y a rien à réussir : laissez-vous simplement guider et avancez à votre rythme.",
  ],
};

export const cycles: Cycle[] = [
  { slug: "stress", title: "Cycle Régulation du stress", shortName: "Stress", benefit: "Apaiser les tensions du quotidien.", icon: Brain, kofiUrl: "https://ko-fi.com/s/248ec202e1", available: true, price: CYCLE_PRICE, details: stressDetails },
  { slug: "sommeil", title: "Cycle Sommeil", shortName: "Sommeil", benefit: "Retrouver le chemin du sommeil.", icon: Moon, kofiUrl: "https://ko-fi.com/s/448e43182a", available: true },
  { slug: "energie", title: "Cycle Énergie", shortName: "Énergie", benefit: "Sortir de la fatigue persistante.", icon: Zap, kofiUrl: "https://ko-fi.com/s/20030c5d41", available: true },
  { slug: "motivation", title: "Cycle Motivation", shortName: "Motivation", benefit: "Retrouver l'élan à son rythme.", icon: Flame, kofiUrl: "https://ko-fi.com/s/f7529011f4", available: true },
  { slug: "douleurs-corporelles", title: "Cycle Douleurs corporelles", shortName: "Douleurs corporelles", benefit: "Relâcher les tensions installées.", icon: Leaf, available: false },
];

export const availableCycles = cycles.filter((c) => c.available);
export const upcomingCycles = cycles.filter((c) => !c.available);
export const getCycle = (slug?: string) => cycles.find((c) => c.slug === slug);
