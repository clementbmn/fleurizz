"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const testimonials = [
  {
    quote:
      "Ma copine attend son bouquet chaque mois maintenant. Meilleure décision.",
    author: "Thomas",
    age: "28 ans",
  },
  {
    quote: "Simple, élégant, et elle adore. Je recommande.",
    author: "Maxime",
    age: "32 ans",
  },
];

export function Testimonials() {
  return (
    <SectionWrapper sectionName="testimonials" className="bg-rose-light">
      <div className="mx-auto max-w-3xl space-y-12">
        {testimonials.map((testimonial, i) => (
          <motion.blockquote
            key={testimonial.author}
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
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-4 font-body text-base font-medium text-gris-dark">
              — {testimonial.author}, {testimonial.age}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </SectionWrapper>
  );
}
