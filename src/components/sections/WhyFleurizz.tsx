"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const reasonKeys = ["reason1", "reason2", "reason3", "reason4"] as const;

export function WhyFleurizz() {
  const t = useTranslations("WhyFleurizz");

  return (
    <SectionWrapper sectionName="why" className="bg-noir">
      <h2 className="text-center font-heading text-3xl font-medium text-blanc md:text-5xl">
        {t("title")}
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {reasonKeys.map((key, i) => (
          <motion.div
            key={key}
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
              {t(`${key}Title`)}
            </h3>
            <p className="mt-3 font-body text-base font-medium text-gris">
              {t(`${key}Desc`)}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
