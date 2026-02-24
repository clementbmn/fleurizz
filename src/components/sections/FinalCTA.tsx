"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const t = useTranslations("FinalCTA");

  return (
    <SectionWrapper sectionName="final_cta" className="bg-vert">
      <div className="text-center">
        <h2 className="font-heading text-3xl font-medium text-blanc md:text-5xl">
          {t("title")}
        </h2>

        <div className="mt-10">
          <Button
            href="/inscription"
            variant="primary"
            trackingLocation="footer_cta"
            trackingLabel="Commencer maintenant"
          >
            {t("cta")}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
