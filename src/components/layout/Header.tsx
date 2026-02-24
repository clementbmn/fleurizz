"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";

export function Header() {
  const t = useTranslations("Header");

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-blanc/10 bg-noir/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-2xl font-medium text-blanc">
          Fleurizz
        </Link>
        <Button
          href="/inscription"
          variant="primary"
          trackingLocation="header"
          trackingLabel="Découvrir"
          className="px-5 py-2.5 text-xs"
        >
          {t("cta")}
        </Button>
      </div>
    </motion.header>
  );
}
