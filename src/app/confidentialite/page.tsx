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
        <p className="mt-8 font-body text-base font-medium text-gris">
          Contenu à venir.
        </p>
      </div>
    </main>
  );
}
