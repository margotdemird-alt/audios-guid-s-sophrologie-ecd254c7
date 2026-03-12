import Layout from "@/components/Layout";

const ConditionsUtilisation = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-warm-white">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-foreground">Conditions d'utilisation</h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Objet</h2>
              <p>Les présentes conditions générales d'utilisation régissent l'accès et l'utilisation du site <strong className="text-foreground">Les Pauses Sophro de Margot</strong> ainsi que l'achat et l'utilisation des audios guidés de sophrologie proposés à la vente.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Description des services</h2>
              <p>Le site propose à la vente des cycles d'audios guidés de sophrologie. Ces contenus audio sont des outils de bien-être et de relaxation destinés à un usage personnel.</p>
              <p className="mt-2 font-medium text-foreground">Les audios ne constituent pas un acte thérapeutique, un diagnostic médical ou un traitement. Ils ne remplacent en aucun cas une consultation auprès d'un professionnel de santé.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Achat et accès aux audios</h2>
              <p>L'achat des audios s'effectue via la plateforme Ko-fi. Une fois le paiement validé, l'utilisateur reçoit un accès aux fichiers audio conformément aux modalités indiquées sur Ko-fi.</p>
              <p className="mt-2">Les prix sont indiqués en euros, toutes taxes comprises. L'éditeur se réserve le droit de modifier les prix à tout moment, sans effet rétroactif sur les achats déjà effectués.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Droit de rétractation</h2>
              <p>Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux contenus numériques fournis sur un support immatériel dont l'exécution a commencé avec l'accord du consommateur. En accédant aux audios après achat, vous acceptez de renoncer à votre droit de rétractation.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Licence d'utilisation</h2>
              <p>L'achat d'un cycle d'audios confère à l'utilisateur une licence d'utilisation personnelle, non exclusive et non transférable. Cela signifie que :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Les audios sont destinés à un <strong className="text-foreground">usage strictement personnel</strong>.</li>
                <li>Toute copie, reproduction, redistribution, revente, partage ou diffusion des fichiers audio est <strong className="text-foreground">strictement interdite</strong>.</li>
                <li>Il est interdit de modifier, transformer ou créer des œuvres dérivées à partir des audios.</li>
                <li>Les audios ne peuvent pas être utilisés dans un cadre commercial ou professionnel sans autorisation écrite préalable.</li>
              </ul>
              <p className="mt-2">Tout manquement à ces conditions pourra donner lieu à des poursuites conformément à la législation en vigueur sur la propriété intellectuelle.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Responsabilité de l'utilisateur</h2>
              <p>L'utilisateur s'engage à utiliser les audios dans le respect des présentes conditions. L'écoute des audios se fait sous l'entière responsabilité de l'utilisateur.</p>
              <p className="mt-2">Il est recommandé de ne pas écouter les audios dans des situations nécessitant une attention particulière (conduite, manipulation de machines, etc.).</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Limitation de responsabilité</h2>
              <p>L'éditeur ne saurait être tenu responsable des résultats obtenus par l'utilisation des audios. Les effets de la sophrologie varient d'une personne à l'autre et ne peuvent être garantis.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Modification des conditions</h2>
              <p>L'éditeur se réserve le droit de modifier les présentes conditions d'utilisation à tout moment. Les utilisateurs seront informés de toute modification significative. La poursuite de l'utilisation du site après modification vaut acceptation des nouvelles conditions.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Droit applicable</h2>
              <p>Les présentes conditions sont soumises au droit français. Tout litige relatif à leur interprétation ou exécution relève de la compétence des tribunaux français.</p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">Contact</h2>
              <p>Pour toute question relative aux présentes conditions, vous pouvez nous contacter à : <a href="mailto:contact@margot-sophrologie.fr" className="text-primary hover:underline">contact@margot-sophrologie.fr</a></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ConditionsUtilisation;
