"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const stepNumbers = ["01", "02", "03"] as const;
const stepKeys = ["step1", "step2", "step3"] as const;

export function HowItWorks() {
  const t = useTranslations("HowItWorks");

  return (
    <SectionWrapper sectionName="how_it_works" className="bg-blanc">
      <h2 className="text-center font-heading text-3xl font-medium text-noir md:text-5xl">
        {t("title")}
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        {stepKeys.map((key, i) => (
          <motion.div
            key={stepNumbers[i]}
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
              {stepNumbers[i]}
            </span>
            <h3 className="mt-4 font-heading text-2xl font-medium text-noir">
              {t(`${key}Title`)}
            </h3>
            <p className="mt-3 font-body text-base font-medium text-gris-dark">
              {t(`${key}Desc`)}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
