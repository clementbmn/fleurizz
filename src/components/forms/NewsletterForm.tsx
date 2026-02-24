"use client";

import { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/amplitude";
import { subscribeNewsletter } from "@/lib/actions/newsletter";
import { Link } from "@/i18n/navigation";

type NewsletterFormData = {
  email: string;
  firstName?: string;
  gdprConsent: true;
};

export function NewsletterForm() {
  const t = useTranslations("Newsletter");
  const formStartedRef = useRef(false);
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [serverError, setServerError] = useState("");

  const newsletterSchema = useMemo(
    () =>
      z.object({
        email: z
          .string()
          .min(1, t("emailRequired"))
          .email(t("emailInvalid")),
        firstName: z
          .string()
          .max(50, t("firstnameMax"))
          .optional()
          .or(z.literal("")),
        gdprConsent: z.literal(true, {
          message: t("consentRequired"),
        }),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setSubmitState("loading");
    setServerError("");

    trackEvent("newsletter_form_submitted", {
      has_firstname: !!data.firstName,
    });

    const result = await subscribeNewsletter({
      email: data.email,
      firstName: data.firstName,
      gdprConsent: data.gdprConsent,
    });

    if (result.success) {
      setSubmitState("success");
    } else {
      setSubmitState("error");
      setServerError(result.error);
    }
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
      {submitState === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h3 className="font-heading text-3xl font-medium text-blanc">
            {t("successTitle")}
          </h3>
          <p className="mt-4 font-body text-base font-medium text-gris">
            {t("successDesc")}
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
              {t("emailLabel")}
            </label>
            <input
              id="email"
              type="email"
              placeholder={t("emailPlaceholder")}
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
              {t("firstnameLabel")}
            </label>
            <input
              id="firstName"
              type="text"
              placeholder={t("firstnamePlaceholder")}
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
              {t("consentText")}{" "}
              <Link
                href="/confidentialite"
                className="text-rose underline transition-colors duration-300 hover:text-blanc"
              >
                {t("consentLink")}
              </Link>
              .
            </label>
          </div>
          {errors.gdprConsent && (
            <p className="font-body text-sm text-rose-dark">
              {errors.gdprConsent.message}
            </p>
          )}

          {serverError && (
            <p className="font-body text-sm text-rose-dark">{serverError}</p>
          )}

          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={submitState === "loading"}
          >
            {submitState === "loading"
              ? t("submitLoading")
              : t("submit")}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
