import type { Metadata } from "next";
import "./globals.css";
import "@uploadthing/react/styles.css";

export const metadata: Metadata = {
  title: "Nabeen Budha | AI, Marketing & Content Portfolio",
  description: "I study how AI changes the way businesses earn attention and customers. Explore my work, experiments, and essays.",
  keywords: ["Nabeen Budha", "AI Marketing", "Content Systems", "Devata Tech", "Customer Acquisition", "Nepal Tech"],
  authors: [{ name: "Nabeen Budha" }],
  openGraph: {
    title: "Nabeen Budha | AI, Marketing & Content",
    description: "I study how AI changes the way businesses earn attention and customers.",
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
