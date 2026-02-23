"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const reasons = [
  {
    title: "Sans engagement",
    description: "Résiliez quand vous voulez. Pas de piège.",
  },
  {
    title: "Bouquets de saison",
    description:
      "Des fleurs fraîches, composées par des artisans, jamais les mêmes.",
  },
  {
    title: "Livraison incluse",
    description: "Directement chez elle, à la date de votre choix.",
  },
  {
    title: "Un rappel de moins",
    description: "Plus besoin d'y penser. On s'occupe de tout.",
  },
];

export function WhyFleurizz() {
  return (
    <SectionWrapper sectionName="why" className="bg-noir">
      <h2 className="text-center font-heading text-3xl font-medium text-blanc md:text-5xl">
        Le geste qui compte, automatisé.
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            className="rounded-xl border border-gris-light/20 p-8"
          >
            <h3 className="font-heading text-xl font-medium text-blanc">
              {reason.title}
            </h3>
            <p className="mt-3 font-body text-base font-medium text-gris">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
