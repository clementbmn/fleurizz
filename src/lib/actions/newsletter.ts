"use server";

import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().min(1).email(),
  firstName: z.string().max(50).optional().or(z.literal("")),
  gdprConsent: z.literal(true),
});

type NewsletterResult = { success: true } | { success: false; error: string };

export async function subscribeNewsletter(
  formData: unknown
): Promise<NewsletterResult> {
  const parsed = newsletterSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, error: "Données invalides." };
  }

  const { email, firstName } = parsed.data;

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY is not configured");
    return { success: false, error: "Erreur de configuration serveur." };
  }

  const listId = process.env.BREVO_LIST_ID;

  const body: Record<string, unknown> = {
    email,
    updateEnabled: true,
  };

  if (firstName) {
    body.attributes = { FIRSTNAME: firstName };
  }

  if (listId) {
    body.listIds = [parseInt(listId, 10)];
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return { success: true };
    }

    const errorData = await response.json().catch(() => null);
    console.error("Brevo API error:", response.status, errorData);

    return {
      success: false,
      error: "Une erreur est survenue. Veuillez réessayer.",
    };
  } catch (error) {
    console.error("Brevo API network error:", error);
    return {
      success: false,
      error: "Impossible de se connecter au serveur. Veuillez réessayer.",
    };
  }
}
