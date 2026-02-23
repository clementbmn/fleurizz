import { Cormorant, Cormorant_Garamond } from "next/font/google";

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-cormorant",
  display: "swap",
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});
