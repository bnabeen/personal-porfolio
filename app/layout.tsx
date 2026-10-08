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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline script: runs before paint to set data-theme, preventing flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = saved || (prefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Toaster position="bottom-right" toastOptions={{ style: { background: 'var(--bg)', color: 'var(--ink)', border: '1px solid var(--line)' } }} />
        <Suspense fallback={null}>
          <NavigationProgress />
        </Suspense>
        <ClickEffect />
        {children}
      </body>
    </html>
  );
}
