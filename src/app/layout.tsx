import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jindu Kwentua",
  description:
    "Data engineering, analytics, and machine learning in real-world systems. Stories from building data products in Africa.",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Jindu Kwentua",
    description:
      "Data engineering, analytics, and machine learning in real-world systems.",
    type: "website",
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
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased
          bg-[#f5f6f7]
          text-[#2d2d2d]
          min-h-screen
        `}
      >
        {children}
      </body>
    </html>
  );
}