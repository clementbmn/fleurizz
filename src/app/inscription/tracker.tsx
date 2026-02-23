"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/amplitude";

export function InscriptionTracker() {
  useEffect(() => {
    trackEvent("inscription_page_viewed");
  }, []);

  return null;
}
