import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jindu Kwentua",
  description:
    "Data engineering, analytics, and machine learning in real-world systems. Stories from building data products in Africa.",
  metadataBase: new URL("https://jindukwentua.com"),
  icons: {
    apple: [{ url: "/profile.jpg", type: "image/jpeg" }],
  },
  openGraph: {
    title: "Jindu Kwentua",
    description:
      "Data engineering, analytics, and machine learning in real-world systems.",
    type: "website",
    images: ["/sexiest_job.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem('theme');
                  var theme = (saved === 'light' || saved === 'dark')
                    ? saved
                    : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.dataset.theme = theme;
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`
          ${inter.variable} 
          ${jetbrainsMono.variable} 
          antialiased
          bg-[var(--background)]
          text-[var(--foreground)]
          min-h-screen
        `}
      >
        {children}
      </body>
    </html>
  );
}