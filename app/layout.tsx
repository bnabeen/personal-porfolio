import type { Metadata } from "next";
import "./globals.css";
import "@uploadthing/react/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nabinbudha.com.np"),
  alternates: {
    canonical: "./",
  },
  title: "Nabeen Budha | AI, Content & Digital Growth",
  description: "Nabeen Budha is a BCA student in Kathmandu helping local businesses grow with AI and content. Ex-editor at RUJU FactCheck, now building Devata Tech.",
  keywords: ["Nabeen Budha", "AI Marketing", "Content Systems", "Devata Tech", "Customer Acquisition", "Nepal Tech"],
  authors: [{ name: "Nabeen Budha" }],
  openGraph: {
    title: "Nabeen Budha | AI, Content & Digital Growth",
    description: "Nabeen Budha is a BCA student in Kathmandu helping local businesses grow with AI and content. Ex-editor at RUJU FactCheck, now building Devata Tech.",
    type: "website",
    locale: "en_US",
    siteName: "Nabeen Budha Portfolio",
  },
  icons: {
    icon: "/icon.svg",
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

import { Suspense } from "react";
import ClickEffect from "@/components/ClickEffect";
import NavigationProgress from "@/components/NavigationProgress";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/ThemeProvider";
import NewsletterPopup from "@/components/NewsletterPopup";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <Toaster position="bottom-right" toastOptions={{ style: { background: 'var(--bg)', color: 'var(--ink)', border: '1px solid var(--line)' } }} />
          <Suspense fallback={null}>
            <NavigationProgress />
          </Suspense>
          <ClickEffect />
          <NewsletterPopup />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
