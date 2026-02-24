import { getTranslations } from "next-intl/server";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { InscriptionTracker } from "./tracker";

export default async function InscriptionPage() {
  const t = await getTranslations("Newsletter");

  return (
    <main className="flex min-h-screen items-center justify-center bg-noir px-6 py-24">
      <InscriptionTracker />
      <div className="w-full max-w-md">
        <h1 className="text-center font-heading text-4xl font-medium text-blanc md:text-5xl">
          {t("pageTitle")}
        </h1>
        <p className="mt-4 text-center font-body text-base font-medium text-gris">
          {t("pageDesc")}
        </p>
        <div className="mt-10">
          <NewsletterForm />
        </div>
      </div>
    </main>
  );
}
