import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function ConfidentialitePage() {
  const t = await getTranslations("Privacy");

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

        <p className="mt-8 font-body text-base font-medium text-gris">
          {t("intro")}
        </p>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("controllerTitle")}
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("controllerDesc")}
        </p>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>{t("controllerName")}</li>
          <li>{t("controllerAddress")}</li>
          <li>
            {t("controllerEmail")}{" "}
            <a
              href="mailto:contact@fleurizz.fr"
              className="text-noir underline transition-colors duration-300 hover:text-gris"
            >
              contact@fleurizz.fr
            </a>
          </li>
        </ul>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("dataTitle")}
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("dataDesc")}
        </p>
        <h3 className="mt-6 font-heading text-xl font-medium text-noir">
          {t("dataDirectTitle")}
        </h3>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>{t("dataDirectEmail")}</li>
          <li>{t("dataDirectName")}</li>
        </ul>
        <h3 className="mt-6 font-heading text-xl font-medium text-noir">
          {t("dataAutoTitle")}
        </h3>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("dataAutoDesc")}
        </p>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("purposeTitle")}
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>
            <strong className="text-noir">{t("purposeNewsletter")}</strong> — {t("purposeNewsletterDesc")}
          </li>
          <li>
            <strong className="text-noir">{t("purposeAnalytics")}</strong> — {t("purposeAnalyticsDesc")}
          </li>
        </ul>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("legalBasisTitle")}
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>
            <strong className="text-noir">{t("legalBasisNewsletter")}</strong> — {t("legalBasisNewsletterDesc")}
          </li>
          <li>
            <strong className="text-noir">{t("legalBasisAnalytics")}</strong> — {t("legalBasisAnalyticsDesc")}
          </li>
        </ul>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("retentionTitle")}
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>
            <strong className="text-noir">{t("retentionNewsletter")}</strong> — {t("retentionNewsletterDesc")}
          </li>
          <li>
            <strong className="text-noir">{t("retentionAnalytics")}</strong> — {t("retentionAnalyticsDesc")}
          </li>
        </ul>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("recipientsTitle")}
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("recipientsDesc")}
        </p>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>
            <strong className="text-noir">{t("recipientAmplitude")}</strong> — {t("recipientAmplitudeDesc")}
          </li>
          <li>
            <strong className="text-noir">{t("recipientVercel")}</strong> — {t("recipientVercelDesc")}
          </li>
        </ul>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("transferTitle")}
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("transferDesc")}
        </p>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("rightsTitle")}
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("rightsDesc")}
        </p>
        <ul className="mt-4 list-inside list-disc space-y-1 font-body text-base font-medium text-gris">
          <li>{t("rightAccess")}</li>
          <li>{t("rightRectification")}</li>
          <li>{t("rightErasure")}</li>
          <li>{t("rightObjection")}</li>
          <li>{t("rightPortability")}</li>
          <li>{t("rightRestriction")}</li>
          <li>{t("rightWithdraw")}</li>
        </ul>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("rightsContact")}{" "}
          <a
            href="mailto:contact@fleurizz.fr"
            className="text-noir underline transition-colors duration-300 hover:text-gris"
          >
            contact@fleurizz.fr
          </a>
          {t("rightsDelay")}
        </p>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("rightsCnil")}{" "}
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

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("cookiesTitle")}
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("cookiesDesc1")}
        </p>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("cookiesDesc2")}
        </p>

        <h2 className="mt-12 font-heading text-2xl font-medium text-noir">
          {t("changesTitle")}
        </h2>
        <p className="mt-4 font-body text-base font-medium text-gris">
          {t("changesDesc")}
        </p>
      </div>
    </main>
  );
}
