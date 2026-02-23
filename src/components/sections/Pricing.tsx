"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface Feature {
  label: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  subtitle: string;
  badge?: string;
  features: Feature[];
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    name: "Essentiel",
    price: "15€",
    subtitle: "par mois — sans engagement",
    features: [
      { label: "Petit bouquet de saison", included: true },
      { label: "Livraison incluse", included: true },
      { label: "Carte personnalisée", included: false },
      { label: "Variétés rares et fleurs nobles", included: false },
    ],
  },
  {
    name: "Signature",
    price: "25€",
    subtitle: "par mois — sans engagement",
    badge: "Populaire",
    highlighted: true,
    features: [
      { label: "Bouquet de saison généreux", included: true },
      { label: "Livraison incluse", included: true },
      { label: "Carte personnalisée avec votre message", included: true },
      { label: "Variétés rares et fleurs nobles", included: false },
    ],
  },
  {
    name: "Prestige",
    price: "40€",
    subtitle: "par mois — sans engagement",
    features: [
      { label: "Grand bouquet premium", included: true },
      { label: "Livraison incluse", included: true },
      { label: "Carte personnalisée avec votre message", included: true },
      { label: "Variétés rares et fleurs nobles", included: true },
    ],
  },
];

export function Pricing() {
  return (
    <SectionWrapper sectionName="pricing" className="bg-blanc">
      <h2 className="text-center font-heading text-3xl font-medium text-noir md:text-5xl">
        Choisissez votre formule
      </h2>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
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
                <Badge>{plan.badge}</Badge>
              </div>
            )}

            <h3 className="font-heading text-2xl font-medium text-noir">
              {plan.name}
            </h3>

            <p className="mt-4 font-heading text-5xl font-medium text-noir">
              {plan.price}
            </p>
            <p className="mt-2 font-body text-sm font-medium text-gris">
              {plan.subtitle}
            </p>

            <ul className="mt-8 flex-1 space-y-4 text-left">
              {plan.features.map((feature) => (
                <li
                  key={feature.label}
                  className={`flex items-start gap-3 font-body text-base font-medium ${
                    feature.included ? "text-noir" : "text-gris"
                  }`}
                >
                  <span
                    className={`mt-0.5 ${feature.included ? "text-vert" : "text-gris"}`}
                  >
                    {feature.included ? "\u2713" : "—"}
                  </span>
                  {feature.label}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                href="/inscription"
                variant="primary"
                trackingLocation="pricing"
                trackingLabel={`Choisir ${plan.name}`}
                className="w-full"
              >
                Choisir
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
