import Layout from "@/components/Layout";
import margotImg from "@/assets/margot-portrait.jpg";

const expertise = [
  "Gestion du stress",
  "Régulation des émotions",
  "Tensions corporelles et somatisation",
  "Sommeil",
  "Récupération mentale",
];

const About = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start fade-in-up">
            <div className="md:col-span-2 flex justify-center">
              <img
                src={margotImg}
                alt="Margot, sophrologue et psychologue"
                className="w-64 h-72 md:w-full md:h-auto object-cover rounded-2xl shadow-card"
              />
            </div>
            <div className="md:col-span-3">
              <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-foreground">À propos de Margot</h1>
              <p className="text-primary font-medium mb-8">Sophrologue et psychologue</p>

              <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
                <p>
                  Je suis sophrologue et psychologue de formation. Mon travail consiste à accompagner les personnes vers plus de calme intérieur et de régulation émotionnelle.
                </p>
                <p>
                  La sophrologie permet de se reconnecter au corps et de retrouver des ressources internes grâce à des exercices simples de respiration, de détente corporelle et de visualisation.
                </p>
                <p>
                  Ces audios guidés ont été conçus pour rendre ces pratiques accessibles à tous, même avec un quotidien chargé.
                </p>
              </div>

              <h2 className="font-serif text-xl font-semibold mb-4 text-foreground">Domaines d'expertise</h2>
              <div className="flex flex-wrap gap-3">
                {expertise.map((item) => (
                  <span key={item} className="bg-card text-foreground text-sm px-4 py-2 rounded-xl shadow-soft">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
