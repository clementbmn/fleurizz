"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Vous choisissez",
    description: "Un abonnement mensuel, au rythme qui vous convient.",
  },
  {
    number: "02",
    title: "On compose",
    description:
      "Chaque mois, un artisan fleuriste crée un bouquet de saison unique.",
  },
  {
    number: "03",
    title: "Elle sourit",
    description: "Livré directement chez elle. Vous n'avez rien à faire.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper sectionName="how_it_works" className="bg-blanc">
      <h2 className="text-center font-heading text-3xl font-medium text-noir md:text-5xl">
        Trois étapes. Zéro effort.
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: "easeOut",
            }}
            className="text-center"
          >
            <span className="font-heading text-6xl font-medium text-rose md:text-7xl">
              {step.number}
            </span>
            <h3 className="mt-4 font-heading text-2xl font-medium text-noir">
              {step.title}
            </h3>
            <p className="mt-3 font-body text-base font-medium text-gris">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
