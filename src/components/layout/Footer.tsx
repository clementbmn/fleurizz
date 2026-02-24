"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: "fr" | "en") => {
    router.replace(pathname, { locale: newLocale });
  };

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
              {t("legalNotice")}
            </Link>
            <Link
              href="/confidentialite"
              className="transition-colors duration-300 hover:text-blanc"
            >
              {t("privacyPolicy")}
            </Link>
            <a
              href="mailto:contact@fleurizz.fr"
              className="transition-colors duration-300 hover:text-blanc"
            >
              {t("contact")}
            </a>
          </nav>
          <div className="flex items-center gap-1 font-body text-xs font-semibold uppercase tracking-[0.15em]">
            <button
              onClick={() => switchLocale("fr")}
              className={`px-1.5 py-1 transition-colors duration-300 ${
                locale === "fr" ? "text-blanc" : "text-gris hover:text-blanc"
              }`}
            >
              FR
            </button>
            <span className="text-gris/40">|</span>
            <button
              onClick={() => switchLocale("en")}
              className={`px-1.5 py-1 transition-colors duration-300 ${
                locale === "en" ? "text-blanc" : "text-gris hover:text-blanc"
              }`}
            >
              EN
            </button>
          </div>
          <p className="text-sm text-gris">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
