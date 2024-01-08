import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react";
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Joonas Hiltunen",
  description: "Homepage of Joonas Hiltunen",
  keywords: [
    "Joonas Hiltunen",
    "Homepage",
    "Developer",
    "Software Developer",
    "Finland",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Joonas Hiltunen", url: "https://joonashiltunen.fi" }],
  creator: "Joonas Hiltunen <joonas@jontzi.com>",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
