import Layout from "@/components/Layout";

const PolitiqueConfidentialite = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-foreground">Politique de confidentialité</h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Introduction</h2>
              <p>La présente politique de confidentialité décrit la manière dont vos données personnelles sont collectées et traitées lors de votre visite sur le site <strong className="text-foreground">Les Pauses Sophro de Margot</strong>. La protection de vos données est une priorité.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Données collectées</h2>
              <p>Les données personnelles pouvant être collectées sur ce site sont les suivantes :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong className="text-foreground">Formulaire de contact :</strong> nom, adresse e-mail, contenu du message.</li>
                <li><strong className="text-foreground">Achat d'audios :</strong> les transactions sont gérées via la plateforme Ko-fi. Les données de paiement sont traitées directement par Ko-fi et ne sont pas stockées sur ce site.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Finalité du traitement</h2>
              <p>Les données collectées sont utilisées uniquement pour :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Répondre à vos demandes via le formulaire de contact.</li>
                <li>Permettre l'accès aux audios guidés après achat.</li>
              </ul>
              <p className="mt-2">Aucune donnée n'est utilisée à des fins publicitaires ni transmise à des tiers à des fins commerciales.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Durée de conservation</h2>
              <p>Les données issues du formulaire de contact sont conservées le temps nécessaire au traitement de votre demande, puis supprimées. Les données liées aux achats sont conservées conformément aux obligations légales en vigueur.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Cookies</h2>
              <p>Ce site n'utilise pas de cookies publicitaires ni de traceurs marketing. Seuls des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être utilisés.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Vos droits</h2>
              <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Droit d'accès, de rectification et de suppression.</li>
                <li>Droit à la portabilité des données.</li>
                <li>Droit d'opposition au traitement.</li>
              </ul>
              <p className="mt-2">Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@margot-sophrologie.fr" className="text-primary hover:underline">contact@margot-sophrologie.fr</a></p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Hébergement des données</h2>
              <p>Les données du site sont hébergées par Lovable (lovable.dev). Les transactions financières sont traitées par Ko-fi (ko-fi.com).</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolitiqueConfidentialite;
