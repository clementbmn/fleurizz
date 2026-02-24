import { getLocale } from "next-intl/server";
import { cormorant, cormorantGaramond } from "@/lib/fonts";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${cormorantGaramond.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
