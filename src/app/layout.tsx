import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Joonas Hiltunen',
  description: 'Homepage of Joonas Hiltunen',
  keywords: [
    'Joonas Hiltunen',
    'Homepage',
    'Developer',
    'Software Developer',
    'Full stack developer',
    'Full stack',
    'Web developer',
    'Backend developer',
    'Finland',
    'Next.js',
    'React',
    'TypeScript',
    'Python',
    'Tampere University',
    'TUNI',
    'Tampere',
    'Tampereen yliopisto',
    'Tampereen Teknillinen Yliopisto',
    'Suomi',
    'Ohjelmistokehittäjä',
    'Joonas Hiltunen Homepage',
    'Joonas Hiltunen Developer',
    'Joonas Hiltunen LinkedIn',
  ],
  authors: [{ name: 'Joonas Hiltunen', url: 'https://joonashiltunen.fi' }],
  creator: 'Joonas Hiltunen <joonas@hiltunen.email>',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
