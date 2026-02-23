"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <SectionWrapper sectionName="final_cta" className="bg-vert">
      <div className="text-center">
        <h2 className="font-heading text-3xl font-medium text-blanc md:text-5xl">
          Prêt à marquer des points ?
        </h2>

        <div className="mt-10">
          <Button
            href="/inscription"
            variant="primary"
            trackingLocation="footer_cta"
            trackingLabel="Rejoindre Fleurizz"
          >
            Rejoindre Fleurizz
          </Button>
        </div>

        <p className="mt-4 font-body text-sm font-medium text-blanc/70">
          Inscrivez-vous pour être informé du lancement.
        </p>
      </div>
    </SectionWrapper>
  );
}
