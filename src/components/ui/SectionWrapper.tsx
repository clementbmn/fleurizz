"use client";

import { motion } from "motion/react";
import { trackEvent } from "@/lib/amplitude";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  sectionName?: string;
  fullWidth?: boolean;
}

export function SectionWrapper({
  children,
  className = "",
  sectionName,
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onViewportEnter={() => {
        if (sectionName) {
          trackEvent("section_viewed", { section: sectionName });
        }
      }}
      className={`py-24 md:py-32 ${className}`}
    >
      {fullWidth ? (
        children
      ) : (
        <div className="mx-auto max-w-5xl px-6">{children}</div>
      )}
    </motion.section>
  );
}
