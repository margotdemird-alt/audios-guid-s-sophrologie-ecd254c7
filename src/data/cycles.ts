import { Brain, Moon, Zap, Flame, Leaf, type LucideIcon } from "lucide-react";

export interface CycleDetails {
  subtitle: string;
  startingPoint: string[];
  forWhoIntro: string;
  forWho: string[];
  promise: string;
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
  audios?: CycleAudio[];
  details?: CycleDetails;
}

export interface CycleAudio { title: string; desc: string; takeaway?: string }

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
  howTo: [
    "Commencez par un audio par semaine et prenez le temps de le réécouter plusieurs fois si vous en ressentez le besoin.",
    "Installez-vous assis·e ou allongé·e dans un endroit calme. Vous pouvez utiliser un casque ou des écouteurs pour favoriser l'immersion, mais ce n'est pas obligatoire.",
    "Il n'y a rien à réussir : laissez-vous simplement guider et avancez à votre rythme.",
  ],
};

export const cycles: Cycle[] = [
  { slug: "stress", title: "Cycle Régulation du stress", shortName: "Stress", benefit: "Apaiser les tensions du quotidien.", icon: Brain, kofiUrl: "https://ko-fi.com/s/248ec202e1", available: true, price: CYCLE_PRICE, audios: [{ title: 'Observer ce que le stress fait au corps', desc: 'Prendre conscience des sensations liées au stress sans les juger, puis laisser passer les pensées comme des nuages dans le ciel.', takeaway: 'Je suis plus grand que ce que je porte.' },{ title: 'Déposer les tensions accumulées', desc: "Se laisser guider dans une forêt et confier symboliquement ses tensions à un arbre solide pour permettre au corps de relâcher progressivement ce qui s'est accumulé.", takeaway: 'Je peux déposer ce que je porte, mon corps sait se libérer.' },{ title: 'Retrouver un espace de sécurité intérieure', desc: 'Rejoindre mentalement un lieu personnel et sécurisant, puis retrouver une lumière intérieure stable associée au calme.', takeaway: "Le calme existe en moi, il m'attend toujours." },{ title: 'Apprendre à revenir au calme par soi-même', desc: "Retrouver ce lieu de sécurité avec l'intention de pouvoir y revenir ensuite de façon autonome lorsque le besoin se présente.", takeaway: "Je sais revenir au calme, cette capacité m'appartient." }], details: stressDetails },
  { slug: "sommeil", title: "Cycle Sommeil", shortName: "Sommeil", benefit: "Retrouver le chemin du sommeil.", icon: Moon, kofiUrl: "https://ko-fi.com/s/448e43182a", available: true, price: CYCLE_PRICE, audios: [{ title: 'La respiration du ballon', desc: "Détendre progressivement le corps par la respiration et l'accompagner vers un état favorable à l'endormissement." },{ title: "La source d'eau chaude", desc: 'Imaginer une chaleur douce qui relâche profondément le corps et prépare au sommeil et à la récupération.' },{ title: 'La vague du sommeil', desc: 'Laisser une vague de détente parcourir le corps et emporter progressivement les tensions et les résistances.' },{ title: 'La barque du sommeil', desc: "Se laisser bercer mentalement jusqu'à un état de relâchement profond propice à un sommeil réparateur." }], details: sommeilDetails },
  { slug: "energie", title: "Cycle Énergie", shortName: "Énergie", benefit: "Sortir de la fatigue persistante.", icon: Zap, kofiUrl: "https://ko-fi.com/s/20030c5d41", available: true, price: CYCLE_PRICE, audios: [{ title: 'La cascade', desc: 'Se détendre et imaginer une eau fraîche qui libère les tensions afin de faire de la place à une énergie nouvelle.' },{ title: 'La lumière intérieure', desc: "Évacuer progressivement ce qui voile l'énergie, puis laisser une lumière intérieure grandir dans tout le corps." },{ title: 'La lumière dorée', desc: "Se nourrir d'une sensation de chaleur et d'énergie, puis laisser cette vitalité rayonner à l'intérieur de soi." },{ title: 'Retrouver son énergie au quotidien', desc: 'Se projeter dans son quotidien avec une énergie retrouvée et apprendre à mieux la préserver dans le temps.' }], details: energieDetails },
  { slug: "motivation", title: "Cycle Motivation", shortName: "Motivation", benefit: "Retrouver l'élan à son rythme.", icon: Flame, kofiUrl: "https://ko-fi.com/s/f7529011f4", available: true, price: CYCLE_PRICE, audios: [{ title: 'Retrouver son rythme naturel', desc: 'Ralentir, revenir au corps et retrouver un rythme plus juste pour soi avant de chercher à se remettre en mouvement.' },{ title: "Alléger ce qui freine l'élan", desc: "Déposer les tensions, les résistances et ce qui pèse pour faire davantage de place au mouvement et à l'envie d'avancer." },{ title: "Faire naître l'élan intérieur", desc: "Recontacter l'énergie de la motivation et laisser émerger progressivement une envie d'avancer plus claire." },{ title: 'Persévérer et maintenir son effort', desc: "Se projeter sur un chemin qui monte, franchir les différentes étapes et ressentir la fierté d'avoir poursuivi jusqu'au bout." }], details: motivationDetails },
  { slug: "douleurs-corporelles", title: "Cycle Douleurs corporelles", shortName: "Douleurs corporelles", benefit: "Relâcher les tensions installées.", icon: Leaf, available: false },
];

export const availableCycles = cycles.filter((c) => c.available);
export const upcomingCycles = cycles.filter((c) => !c.available);
export const getCycle = (slug?: string) => cycles.find((c) => c.slug === slug);
