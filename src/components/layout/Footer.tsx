import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-noir py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-heading text-xl font-medium text-blanc">
            Fleurizz
          </p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gris">
            <Link
              href="/mentions-legales"
              className="transition-colors duration-300 hover:text-blanc"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="transition-colors duration-300 hover:text-blanc"
            >
              Politique de confidentialité
            </Link>
            <a
              href="mailto:contact@fleurizz.fr"
              className="transition-colors duration-300 hover:text-blanc"
            >
              Contact
            </a>
          </nav>
          <p className="text-sm text-gris">
            &copy; 2025 Fleurizz — Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
