import Layout from "@/components/Layout";

const MentionsLegales = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-foreground">Mentions légales</h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Éditeur du site</h2>
              <p>Le site <strong className="text-foreground">Les Pauses Sophro de Margot</strong> est édité par Margot, sophrologue et psychologue, exerçant en tant qu'auto-entrepreneur.</p>
              <p className="mt-2">Adresse e-mail : <a href="mailto:contact@margot-sophrologie.fr" className="text-primary hover:underline">contact@margot-sophrologie.fr</a></p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Hébergement</h2>
              <p>Ce site est hébergé par Lovable (lovable.dev).</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Propriété intellectuelle</h2>
              <p>L'ensemble des contenus présents sur ce site (textes, images, audios, logos, design) sont la propriété exclusive de l'éditeur, sauf mention contraire. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans autorisation écrite préalable.</p>
              <p className="mt-2">Les audios guidés proposés à la vente sont protégés par le droit d'auteur. Ils sont destinés à un usage strictement personnel et ne peuvent être copiés, redistribués, partagés ou diffusés sous quelque forme que ce soit.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Nature des contenus</h2>
              <p>Les audios de sophrologie proposés sur ce site sont des outils de bien-être et de relaxation. Ils ne constituent en aucun cas un acte thérapeutique, un traitement médical ou un suivi psychologique. Ils ne se substituent pas à une consultation auprès d'un professionnel de santé.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Responsabilité</h2>
              <p>L'éditeur s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour des informations.</p>
              <p className="mt-2">L'utilisation des audios se fait sous la responsabilité de l'utilisateur. L'éditeur décline toute responsabilité quant aux résultats obtenus.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Liens externes</h2>
              <p>Ce site peut contenir des liens vers des sites tiers (Ko-fi, Instagram, Facebook). L'éditeur n'exerce aucun contrôle sur le contenu de ces sites et décline toute responsabilité les concernant.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MentionsLegales;
