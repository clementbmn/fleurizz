"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface PlanConfig {
  nameKey: string;
  priceKey: string;
  featureKeys: { key: string; included: boolean }[];
  badge?: boolean;
  highlighted?: boolean;
}

const planConfigs: PlanConfig[] = [
  {
    nameKey: "plan1Name",
    priceKey: "plan1Price",
    featureKeys: [
      { key: "feature1", included: true },
      { key: "feature2", included: true },
      { key: "feature3", included: false },
      { key: "feature4", included: false },
    ],
  },
  {
    nameKey: "plan2Name",
    priceKey: "plan2Price",
    badge: true,
    highlighted: true,
    featureKeys: [
      { key: "feature5", included: true },
      { key: "feature2", included: true },
      { key: "feature6", included: true },
      { key: "feature4", included: false },
    ],
  },
  {
    nameKey: "plan3Name",
    priceKey: "plan3Price",
    featureKeys: [
      { key: "feature7", included: true },
      { key: "feature2", included: true },
      { key: "feature6", included: true },
      { key: "feature4", included: true },
    ],
  },
];

export function Pricing() {
  const t = useTranslations("Pricing");

  return (
    <SectionWrapper sectionName="pricing" className="bg-blanc">
      <h2 className="text-center font-heading text-3xl font-medium text-noir md:text-5xl">
        {t("title")}
      </h2>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {planConfigs.map((plan, index) => (
          <motion.div
            key={plan.nameKey}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15 * index,
              ease: "easeOut",
            }}
            className={`relative flex flex-col rounded-xl border p-8 text-center ${
              plan.highlighted
                ? "border-rose shadow-lg md:scale-[1.03]"
                : "border-gris-light"
            }`}
          >
            {plan.badge && (
              <div className="mb-6">
                <Badge>{t("badge")}</Badge>
              </div>
            )}

            <h3 className="font-heading text-2xl font-medium text-noir">
              {t(plan.nameKey)}
            </h3>

            <p className="mt-4 font-heading text-5xl font-medium text-noir">
              {t(plan.priceKey)}
            </p>
            <p className="mt-2 font-body text-sm font-medium text-gris-dark">
              {t("subtitle")}
            </p>

            <ul className="mt-8 flex-1 space-y-4 text-left">
              {plan.featureKeys.map((feature) => (
                <li
                  key={feature.key}
                  className={`flex items-start gap-3 font-body text-base font-medium ${
                    feature.included ? "text-noir" : "text-gris-dark"
                  }`}
                >
                  <span
                    className={`mt-0.5 ${feature.included ? "text-vert" : "text-gris-dark"}`}
                  >
                    {feature.included ? "\u2713" : "—"}
                  </span>
                  {t(feature.key)}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                href="/inscription"
                variant="primary"
                trackingLocation="pricing"
                trackingLabel={`Choisir ${t(plan.nameKey)}`}
                className="w-full"
              >
                {t("cta")}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
