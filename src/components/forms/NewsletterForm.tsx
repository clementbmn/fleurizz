"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/amplitude";
import { useRef } from "react";

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "L'email est requis.")
    .email("Veuillez entrer un email valide."),
  firstName: z
    .string()
    .max(50, "Le prénom ne doit pas dépasser 50 caractères.")
    .optional()
    .or(z.literal("")),
  gdprConsent: z.literal(true, {
    message: "Vous devez accepter la politique de confidentialité.",
  }),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export function NewsletterForm() {
  const formStartedRef = useRef(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = (data: NewsletterFormData) => {
    trackEvent("newsletter_form_submitted", {
      has_firstname: !!data.firstName,
    });
    console.log("Newsletter signup:", data);
  };

  const onError = () => {
    const errorFields = Object.keys(errors);
    errorFields.forEach((field) => {
      trackEvent("newsletter_form_error", { error_field: field });
    });
  };

  const handleFocus = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackEvent("newsletter_form_started");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isSubmitSuccessful ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h3 className="font-heading text-3xl font-medium text-blanc">
            Merci !
          </h3>
          <p className="mt-4 font-body text-base font-medium text-gris">
            On vous tient au courant très vite.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit(onSubmit, onError)}
          className="space-y-6"
          noValidate
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.2em] text-gris"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              placeholder="votre@email.com"
              onFocus={handleFocus}
              {...register("email")}
              className="w-full border border-gris/40 bg-transparent px-4 py-3 font-body text-base font-medium text-blanc placeholder:text-gris/50 transition-colors duration-300 focus:border-rose focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 font-body text-sm text-rose-dark">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.2em] text-gris"
            >
              Prénom (optionnel)
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Votre prénom"
              onFocus={handleFocus}
              {...register("firstName")}
              className="w-full border border-gris/40 bg-transparent px-4 py-3 font-body text-base font-medium text-blanc placeholder:text-gris/50 transition-colors duration-300 focus:border-rose focus:outline-none"
            />
            {errors.firstName && (
              <p className="mt-1 font-body text-sm text-rose-dark">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="flex items-start gap-3">
            <input
              id="gdprConsent"
              type="checkbox"
              {...register("gdprConsent")}
              className="mt-1 h-4 w-4 shrink-0 accent-rose"
            />
            <label
              htmlFor="gdprConsent"
              className="font-body text-sm font-medium text-gris"
            >
              J&apos;accepte de recevoir des emails de Fleurizz. Consultez
              notre{" "}
              <a
                href="/confidentialite"
                className="text-rose underline transition-colors duration-300 hover:text-blanc"
              >
                politique de confidentialité
              </a>
              .
            </label>
          </div>
          {errors.gdprConsent && (
            <p className="font-body text-sm text-rose-dark">
              {errors.gdprConsent.message}
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            className="w-full"
          >
            S&apos;inscrire
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
