import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function MentionsLegalesPage() {
  const t = await getTranslations("Legal");

  return (
    <main className="min-h-screen bg-blanc px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="font-body text-sm text-gris transition-colors duration-300 hover:text-noir"
        >
          &larr; {t("back")}
        </Link>
        <h1 className="mt-8 font-heading text-4xl font-medium text-noir">
          {t("title")}
        </h1>
        <p className="mt-4 font-body text-sm text-gris">
          {t("lastUpdate")}
        </p>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("editorTitle")}
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("editorDesc")}
        </p>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>{t("editorAddress")}</li>
          <li>
            {t("editorEmail")}{" "}
            <a
              href="mailto:contact@fleurizz.fr"
              className="text-noir underline transition-colors duration-300 hover:text-gris"
            >
              contact@fleurizz.fr
            </a>
          </li>
        </ul>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("directorTitle")}
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("directorDesc")}
        </p>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("hostTitle")}
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("hostDesc")}
        </p>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>{t("hostAddress")}</li>
          <li>
            {t("hostWebsite")}{" "}
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
          {t("ipTitle")}
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("ipDesc1")}
        </p>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("ipDesc2")}
        </p>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("liabilityTitle")}
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("liabilityDesc1")}
        </p>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("liabilityDesc2")}
        </p>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("linksTitle")}
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("linksDesc")}
        </p>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("lawTitle")}
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("lawDesc")}
        </p>
      </div>
    </main>
  );
}
