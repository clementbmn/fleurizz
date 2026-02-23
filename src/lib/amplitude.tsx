"use client";

import { useEffect } from "react";
import * as amplitude from "@amplitude/analytics-browser";

const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY || "";

export function AmplitudeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (AMPLITUDE_API_KEY) {
      amplitude.init(AMPLITUDE_API_KEY, undefined, {
        defaultTracking: {
          sessions: true,
          pageViews: true,
          formInteractions: true,
          fileDownloads: false,
        },
      });
    }
  }, []);

  return <>{children}</>;
}

export function trackEvent(
  eventName: string,
  eventProperties?: Record<string, unknown>
) {
  amplitude.track(eventName, eventProperties);
}
