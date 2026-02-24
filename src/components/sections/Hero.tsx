"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/amplitude";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      onViewportEnter={() => trackEvent("section_viewed", { section: "hero" })}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-noir px-6 pt-20"
    >
      {/* Subtle radial gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(232,196,200,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(45,74,62,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-4xl font-medium leading-tight text-blanc md:text-6xl lg:text-7xl"
        >
          {t("titleLine1")}
          <br />
          {t("titleLine2")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-2xl font-body text-lg font-medium text-gris md:text-xl"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10"
        >
          <Button
            href="/inscription"
            variant="primary"
            trackingLocation="hero"
            trackingLabel="Choisir mon abonnement"
          >
            {t("cta")}
          </Button>

          <p className="mt-4 font-body text-sm italic text-gris">
            {t("price")}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
