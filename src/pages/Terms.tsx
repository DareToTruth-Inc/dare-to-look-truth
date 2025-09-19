import React from "react";

const Terms: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-600 mb-8">Effective Date: September 18, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Eligibility and Accounts</h2>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>The App is available to individuals 13 years of age or older. By creating an account, you confirm that you meet this requirement.</li>
          <li>Registration is required to access full features. You may use a pseudonym; real names are not required.</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials and all activity under your account.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. User Conduct</h2>
        <p className="mb-2">You agree not to post, share, or engage in any of the following:</p>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>Nudity, sexually explicit content, or obscene material.</li>
          <li>Hate speech, harassment, bullying, or threats of violence.</li>
          <li>Content that promotes or depicts violence, illegal activity, or discrimination.</li>
          <li>Misleading or defamatory information about restaurants, venues, or other users.</li>
          <li>Commercial or promotional content without our prior written approval.</li>
        </ul>
        <p className="mt-2">Violation of these rules may result in suspension or termination of your account.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Location and Venue Features</h2>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>The App allows you to share your location and participate in venue-based exposures. By enabling location services, you consent to the collection and display of your location to facilitate these features.</li>
          <li>Sharing your live location carries inherent risks. You use these features at your own discretion and risk.</li>
          <li>Restaurant and venue information displayed in the App may be sourced from third parties and is provided for informational purposes only. We do not guarantee accuracy or completeness.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Ratings, Comments, and Interactions</h2>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>You may post ratings, comments, and likes on exposures and venues.</li>
          <li>You may delete your own ratings or comments at any time.</li>
          <li>You may block or report other users through in-App tools.</li>
          <li>We reserve the right to remove content that violates these Terms or our community guidelines.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. User Content and Intellectual Property</h2>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>You retain ownership of the content you upload (photos, captions, comments, ratings).</li>
          <li>By posting content, you grant DareToTruth Inc. a worldwide, non-exclusive, royalty-free license to use, display, reproduce, and distribute your content solely to operate and improve the App, promote community engagement, and develop new features.</li>
          <li>All trademarks, service marks, branding, and source code related to DareToTruth remain our exclusive property.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Disclaimers and Limitation of Liability</h2>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>We do not guarantee uninterrupted or error-free operation of the App, or the accuracy of ratings, comments, or third-party information.</li>
          <li>You use the App at your own risk.</li>
          <li>To the fullest extent permitted by law, DareToTruth Inc. shall not be liable for any damages arising from your use of the App, including but not limited to personal exposure, interactions with other users, or reliance on restaurant information.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Enforcement and Termination</h2>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>We reserve the right to suspend, restrict, or terminate your account at any time, with or without notice, if you violate these Terms or applicable laws.</li>
          <li>In cases of severe violations (e.g., harassment, threats, illegal activity), termination may be immediate.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Governing Law and Dispute Resolution</h2>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>These Terms shall be governed by and construed under the laws of the Province of Quebec, Canada.</li>
          <li>Any disputes arising from or relating to these Terms or your use of the App shall be subject to the exclusive jurisdiction of the courts of Montreal, Quebec.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Payments and Monetization</h2>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>Some features of the App may require payment, subscription, or in-app purchases.</li>
          <li>All payments are subject to the terms provided at the time of purchase. Refunds, if any, will be handled in accordance with applicable law and our payment policies.</li>
          <li>DareToTruth reserves the right to update pricing, introduce new paid features, or discontinue existing ones.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">10. Changes to the Terms</h2>
        <p>We may update these Terms from time to time. Updates will be posted in the App and/or on our website. Continued use of the App after changes constitutes acceptance of the updated Terms.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">11. Contact Us</h2>
        <p>If you have questions about these Terms, please contact us at:</p>
        <ul className="list-disc list-inside ml-6">
          <li><strong>DareToTruth Inc.</strong></li>
          <li>Email: <a href="mailto:info@daretotruth.ca" className="text-blue-600">info@daretotruth.ca</a></li>
        </ul>
      </section>

      <hr className="my-10" />

      <h2 className="text-3xl font-bold mb-6">Conditions d'utilisation</h2>
      <p className="text-sm text-gray-600 mb-8">Date d’entrée en vigueur : 18 septembre 2025</p>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">1. Admissibilité et comptes</h3>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>L’App est disponible pour les personnes âgées de 13 ans et plus. En créant un compte, vous confirmez que vous répondez à cette exigence.</li>
          <li>L’inscription est requise pour accéder à l’ensemble des fonctionnalités. Vous pouvez utiliser un pseudonyme; les noms réels ne sont pas requis.</li>
          <li>Vous êtes responsable de la confidentialité de vos identifiants de connexion et de toute activité effectuée sous votre compte.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">2. Conduite de l’utilisateur</h3>
        <p className="mb-2">Vous vous engagez à ne pas publier, partager ou vous livrer à ce qui suit :</p>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>Nudité, contenu sexuellement explicite ou matériel obscène.</li>
          <li>Discours haineux, harcèlement, intimidation ou menaces de violence.</li>
          <li>Contenu promouvant ou représentant la violence, une activité illégale ou la discrimination.</li>
          <li>Informations trompeuses ou diffamatoires au sujet de restaurants, de lieux ou d’autres utilisateurs.</li>
          <li>Contenu commercial ou promotionnel sans notre approbation écrite préalable.</li>
        </ul>
        <p className="mt-2">La violation de ces règles peut entraîner la suspension ou la résiliation de votre compte.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">3. Fonctionnalités de localisation et de lieux</h3>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>L’App vous permet de partager votre localisation et de participer à des expositions liées à des lieux. En activant les services de localisation, vous consentez à la collecte et à l’affichage de votre localisation afin de faciliter ces fonctionnalités.</li>
          <li>Le partage de votre localisation en direct comporte des risques inhérents. Vous utilisez ces fonctionnalités à votre discrétion et à vos risques.</li>
          <li>Les informations sur les restaurants et lieux affichées dans l’App peuvent provenir de tiers et sont fournies à titre informatif uniquement. Nous n’en garantissons ni l’exactitude ni l’exhaustivité.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">4. Notes, commentaires et interactions</h3>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>Vous pouvez publier des notes, des commentaires et des likes sur les expositions et les lieux.</li>
          <li>Vous pouvez supprimer vos propres notes ou commentaires à tout moment.</li>
          <li>Vous pouvez bloquer ou signaler d’autres utilisateurs au moyen des outils intégrés à l’App.</li>
          <li>Nous nous réservons le droit de supprimer tout contenu qui enfreint les présentes Conditions ou nos règles communautaires.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">5. Contenu utilisateur et propriété intellectuelle</h3>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>Vous conservez la propriété du contenu que vous téléversez (photos, légendes, commentaires, notes).</li>
          <li>En publiant du contenu, vous accordez à DareToTruth Inc. une licence mondiale, non exclusive et libre de redevances pour utiliser, afficher, reproduire et distribuer votre contenu uniquement afin d’exploiter et d’améliorer l’App, de promouvoir l’engagement communautaire et de développer de nouvelles fonctionnalités.</li>
          <li>Toutes les marques de commerce, marques de service, éléments d’identification et le code source liés à DareToTruth demeurent notre propriété exclusive.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">6. Avertissements et limitation de responsabilité</h3>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>Nous ne garantissons ni le fonctionnement ininterrompu ou sans erreur de l’App, ni l’exactitude des notes, commentaires ou informations de tiers.</li>
          <li>Vous utilisez l’App à vos propres risques.</li>
          <li>Dans toute la mesure permise par la loi, DareToTruth Inc. ne pourra être tenue responsable des dommages découlant de votre utilisation de l’App, y compris, sans s’y limiter, l’exposition personnelle, les interactions avec d’autres utilisateurs ou la confiance accordée aux informations sur les restaurants.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">7. Application et résiliation</h3>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>Nous nous réservons le droit de suspendre, restreindre ou résilier votre compte à tout moment, avec ou sans préavis, si vous enfreignez les présentes Conditions ou les lois applicables.</li>
          <li>En cas de violations graves (p. ex., harcèlement, menaces, activité illégale), la résiliation peut être immédiate.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">8. Droit applicable et règlement des différends</h3>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>Les présentes Conditions sont régies par les lois de la province de Québec, Canada, et interprétées conformément à celles‑ci.</li>
          <li>Tout litige découlant des présentes Conditions ou lié à votre utilisation de l’App relève de la compétence exclusive des tribunaux de Montréal, Québec.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">9. Paiements et monétisation</h3>
        <ul className="list-disc list-inside ml-6 space-y-2">
          <li>Certaines fonctionnalités de l’App peuvent nécessiter un paiement, un abonnement ou des achats intégrés.</li>
          <li>Tous les paiements sont soumis aux conditions fournies au moment de l’achat. Les remboursements, le cas échéant, seront traités conformément à la loi applicable et à nos politiques de paiement.</li>
          <li>DareToTruth se réserve le droit de mettre à jour les prix, d’introduire de nouvelles fonctionnalités payantes ou d’en supprimer.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">10. Modifications des Conditions</h3>
        <p>Nous pouvons mettre à jour les présentes Conditions de temps à autre. Les mises à jour seront publiées dans l’App et/ou sur notre site web. L’utilisation continue de l’App après les modifications vaut acceptation des Conditions mises à jour.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">11. Nous contacter</h3>
        <p>Si vous avez des questions au sujet des présentes Conditions, veuillez nous contacter :</p>
        <ul className="list-disc list-inside ml-6">
          <li><strong>DareToTruth Inc.</strong></li>
          <li>Courriel : <a href="mailto:info@daretotruth.ca" className="text-blue-600">info@daretotruth.ca</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Terms;


