import Link from "next/link";

export default function MentionsLegalesPage() {
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
          Mentions légales
        </h1>
        <p className="mt-4 font-body text-sm text-gris">
          Dernière mise à jour : 24 février 2026
        </p>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Éditeur du site
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Le site fleurizz.fr est édité par Clément Baumann, personne physique.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>Adresse : 76 avenue du Général Leclerc, 94100 Saint-Maur-des-Fossés, France</li>
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

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Directeur de la publication
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Clément Baumann.
        </p>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Hébergeur
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Le site est hébergé par Vercel Inc.
        </p>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>Adresse : 440 N Barranca Ave, Covina, CA 91723, États-Unis</li>
          <li>
            Site web :{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-noir underline transition-colors duration-300 hover:text-gris"
            >
              vercel.com
            </a>
          </li>
        </ul>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Propriété intellectuelle
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          L&apos;ensemble du contenu du site fleurizz.fr (textes, graphismes, logo, icônes, mise
          en page) est la propriété exclusive de Clément Baumann, sauf mention contraire. Toute
          reproduction, représentation, modification ou exploitation, totale ou partielle, de
          quelque nature que ce soit, est interdite sans autorisation écrite préalable.
        </p>
        <p className="mt-4 font-body text-base font-medium text-gris">
          La marque Fleurizz, ainsi que le logo et les éléments graphiques associés, sont la
          propriété de Clément Baumann. Toute utilisation non autorisée constitue une contrefaçon
          sanctionnée par le Code de la propriété intellectuelle.
        </p>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Limitation de responsabilité
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Le site fleurizz.fr est fourni en l&apos;état. Clément Baumann s&apos;efforce d&apos;assurer
          l&apos;exactitude des informations diffusées, mais ne saurait garantir l&apos;exhaustivité
          ni l&apos;absence d&apos;erreurs. L&apos;utilisation des informations mises à disposition
          se fait sous la responsabilité de l&apos;utilisateur.
        </p>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Clément Baumann ne peut être tenu responsable des interruptions de service, qu&apos;elles
          soient volontaires (maintenance) ou involontaires (panne, force majeure).
        </p>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Liens hypertextes
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Le site peut contenir des liens vers des sites tiers. Clément Baumann n&apos;exerce aucun
          contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs
          pratiques en matière de protection des données personnelles.
        </p>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          Droit applicable
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          Les présentes mentions légales sont régies par le droit français. En cas de litige, et
          après tentative de résolution amiable, les tribunaux français seront seuls compétents.
        </p>
      </div>
    </main>
  );
}
