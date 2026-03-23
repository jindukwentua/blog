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
    <html lang="en">
      <body
        className={`
          ${inter.variable} 
          ${jetbrainsMono.variable} 
          antialiased
          bg-[var(--color-page)]
          text-[#2d2d2d]
          min-h-screen
        `}
      >
        {children}
      </body>
    </html>
  );
}