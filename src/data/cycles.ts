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

const sommeilDetails: CycleDetails = { ...stressDetails, subtitle: "4 semaines pour ralentir, relâcher les tensions et retrouver plus facilement le chemin du sommeil.", startingPoint: ['Il arrive que le corps soit fatigué mais que le sommeil ne vienne pas facilement. Le mental continue de tourner, les tensions de la journée restent présentes et il devient parfois difficile de véritablement décrocher au moment de se coucher.', "Ce cycle propose de créer progressivement les conditions favorables au sommeil en passant par la respiration, le relâchement corporel et des visualisations guidées qui accompagnent doucement vers l'endormissement."], forWho: ['vous avez du mal à vous détendre au moment du coucher ;', 'votre mental continue de tourner lorsque vous aimeriez dormir ;', 'vous sentez encore les tensions de la journée dans votre corps ;', 'votre sommeil est devenu plus léger ou irrégulier ;', 'vous souhaitez installer un rituel simple pour préparer progressivement le sommeil.'], promise: 'Un parcours progressif sur 4 semaines pour aider le corps et le mental à ralentir, approfondir le relâchement et retrouver progressivement des repères associés au sommeil grâce à des exercices de respiration et des visualisations guidées.' };
const energieDetails: CycleDetails = { ...stressDetails, subtitle: "4 semaines pour relâcher ce qui épuise et retrouver progressivement plus d’énergie au quotidien.", startingPoint: ["Certaines périodes laissent une sensation de fatigue persistante, même lorsque l'on essaie de se reposer. Le corps semble plus lourd, l'énergie moins disponible et les journées demandent parfois davantage d'effort qu'auparavant.", "Ce cycle propose de revenir progressivement aux sensations corporelles, de relâcher ce qui mobilise inutilement de l'énergie et de retrouver des sensations de vitalité à travers plusieurs visualisations guidées."], forWho: ["vous vous sentez régulièrement fatigué·e ou à court d'énergie ;", "vous avez l'impression de fonctionner en mode automatique ;", 'vous avez besoin de retrouver davantage de vitalité dans votre quotidien ;', "les tensions et la fatigue semblent s'accumuler ;", 'vous souhaitez retrouver une énergie plus stable sans vous pousser davantage.'], promise: 'Un parcours progressif sur 4 semaines pour relâcher les tensions, réveiller les sensations de vitalité et apprendre à mieux préserver son énergie au quotidien grâce à la détente corporelle, à la respiration et à différentes visualisations.' };
const motivationDetails: CycleDetails = { ...stressDetails, subtitle: "4 semaines pour retrouver de l’élan, avancer à son rythme et renforcer sa capacité à persévérer.", startingPoint: ["Il arrive de savoir ce que l'on aimerait faire sans réussir à retrouver l'élan nécessaire pour commencer ou poursuivre. La fatigue, les tensions, les doutes ou l'accumulation du quotidien peuvent progressivement freiner l'envie d'avancer.", "Plutôt que de chercher à se forcer, ce cycle propose d'abord de ralentir, de revenir au corps et d'alléger ce qui freine afin de retrouver progressivement une motivation plus naturelle."], forWho: ["vous avez du mal à vous mettre en mouvement malgré l'envie d'avancer ;", "vous manquez d'élan ou de motivation dans votre quotidien ;", 'vous avez tendance à vous pousser puis à vous épuiser ;', 'certains freins, tensions ou découragements vous empêchent de poursuivre ;', 'vous souhaitez retrouver une motivation plus stable et apprendre à persévérer à votre rythme.'], promise: "Un parcours progressif sur 4 semaines pour retrouver son rythme, alléger ce qui freine l'action, faire émerger progressivement l'élan intérieur puis renforcer la capacité à poursuivre ses efforts sans entrer dans une logique de pression." };

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
