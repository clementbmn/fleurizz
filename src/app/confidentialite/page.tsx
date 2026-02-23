import Link from "next/link";

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-blanc px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="font-body text-sm text-gris transition-colors duration-300 hover:text-noir"
        >
          &larr; Retour
        </Link>
        <h1 className="mt-8 font-heading text-4xl font-medium text-noir">
          Politique de confidentialité
        </h1>
        <p className="mt-4 font-body text-sm text-gris">
          Dernière mise à jour : 24 février 2026
        </p>

        <p className="mt-8 font-body text-base font-medium text-gris">
          Fleurizz s&apos;engage à protéger la vie privée de ses utilisateurs. La présente
          politique de confidentialité décrit les données personnelles collectées via le site
          fleurizz.fr, les raisons de leur collecte et les droits dont vous disposez.
        </p>

        {/* Responsable du traitement */}
        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Responsable du traitement
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Le responsable du traitement des données personnelles est :
        </p>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>Clément Baumann</li>
          <li>76 avenue du Général Leclerc, 94100 Saint-Maur-des-Fossés, France</li>
          <li>
            Email :{" "}
            <a
              href="mailto:contact@fleurizz.fr"
              className="text-noir underline transition-colors duration-300 hover:text-gris"
            >
              contact@fleurizz.fr
            </a>
          </li>
        </ul>

        {/* Données collectées */}
        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Données collectées
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Nous collectons les données suivantes :
        </p>
        <h3 className="mt-6 font-heading text-xl font-medium text-noir">
          Données fournies directement
        </h3>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>Adresse email (obligatoire) — lors de l&apos;inscription à la newsletter</li>
          <li>Prénom (facultatif) — lors de l&apos;inscription à la newsletter</li>
        </ul>
        <h3 className="mt-6 font-heading text-xl font-medium text-noir">
          Données collectées automatiquement
        </h3>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Nous utilisons Amplitude, un service de mesure d&apos;audience, qui collecte des données
          de navigation : pages consultées, interactions avec le site (clics, défilement),
          type d&apos;appareil, navigateur et système d&apos;exploitation.
        </p>

        {/* Finalités */}
        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Finalités du traitement
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>
            <strong className="text-noir">Newsletter</strong> — vous informer du lancement de
            Fleurizz et de nos actualités
          </li>
          <li>
            <strong className="text-noir">Mesure d&apos;audience</strong> — comprendre comment le
            site est utilisé afin d&apos;améliorer l&apos;expérience utilisateur
          </li>
        </ul>

        {/* Base légale */}
        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Base légale
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>
            <strong className="text-noir">Newsletter</strong> — votre consentement, donné lors de
            l&apos;inscription via la case à cocher
          </li>
          <li>
            <strong className="text-noir">Mesure d&apos;audience</strong> — notre intérêt légitime
            à comprendre l&apos;utilisation du site
          </li>
        </ul>

        {/* Durée de conservation */}
        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Durée de conservation
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>
            <strong className="text-noir">Données newsletter</strong> — conservées jusqu&apos;à
            votre désinscription ou demande de suppression
          </li>
          <li>
            <strong className="text-noir">Données de navigation</strong> — conservées 13 mois
            maximum, conformément aux recommandations de la CNIL
          </li>
        </ul>

        {/* Destinataires */}
        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Destinataires des données
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Vos données sont accessibles uniquement aux prestataires suivants, dans le cadre strict
          de leurs services :
        </p>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>
            <strong className="text-noir">Amplitude Inc.</strong> — mesure d&apos;audience
            (États-Unis)
          </li>
          <li>
            <strong className="text-noir">Vercel Inc.</strong> — hébergement du site (États-Unis)
          </li>
        </ul>

        {/* Transferts hors UE */}
        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Transferts hors Union européenne
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Certaines données sont transférées vers les États-Unis (Amplitude, Vercel). Ces
          transferts sont encadrés par des clauses contractuelles types approuvées par la
          Commission européenne, garantissant un niveau de protection adéquat de vos données.
        </p>

        {/* Droits */}
        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Vos droits
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
          des droits suivants :
        </p>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>Droit d&apos;accès à vos données personnelles</li>
          <li>Droit de rectification des données inexactes</li>
          <li>Droit à l&apos;effacement de vos données</li>
          <li>Droit d&apos;opposition au traitement</li>
          <li>Droit à la portabilité de vos données</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit de retirer votre consentement à tout moment</li>
        </ul>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Pour exercer ces droits, contactez-nous à{" "}
          <a
            href="mailto:contact@fleurizz.fr"
            className="text-noir underline transition-colors duration-300 hover:text-gris"
          >
            contact@fleurizz.fr
          </a>
          . Nous nous engageons à répondre dans un délai d&apos;un mois.
        </p>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Si vous estimez que le traitement de vos données ne respecte pas la réglementation, vous
          pouvez introduire une réclamation auprès de la CNIL :{" "}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-noir underline transition-colors duration-300 hover:text-gris"
          >
            www.cnil.fr
          </a>
          .
        </p>

        {/* Cookies */}
        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Cookies et traceurs
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Le site utilise des cookies déposés par Amplitude à des fins de mesure d&apos;audience.
          Ces cookies permettent d&apos;identifier votre navigateur et de suivre votre parcours
          sur le site de manière anonyme. Ils sont conservés pour une durée maximale de 13 mois.
        </p>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.
          La désactivation des cookies n&apos;empêche pas la navigation sur le site.
        </p>

        {/* Modifications */}
        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Modifications
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Nous nous réservons le droit de modifier la présente politique de confidentialité à tout
          moment. En cas de modification substantielle, une notification sera affichée sur le site.
          La date de dernière mise à jour est indiquée en haut de cette page.
        </p>
      </div>
    </main>
  );
}
