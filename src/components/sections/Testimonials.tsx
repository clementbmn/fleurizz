"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const testimonialKeys = ["1", "2"] as const;

export function Testimonials() {
  const t = useTranslations("Testimonials");

  return (
    <SectionWrapper sectionName="testimonials" className="bg-rose-light">
      <div className="mx-auto max-w-3xl space-y-12">
        {testimonialKeys.map((key, i) => (
          <motion.blockquote
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: "easeOut",
            }}
            className="text-center"
          >
            <p className="font-heading text-2xl font-medium italic text-noir md:text-3xl">
              &ldquo;{t(`quote${key}`)}&rdquo;
            </p>
            <footer className="mt-4 font-body text-base font-medium text-gris-dark">
              — {t(`author${key}`)}, {t(`age${key}`)}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </SectionWrapper>
  );
}
