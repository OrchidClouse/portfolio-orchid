import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import StarsCanvas from '@/components/main/StarsBackground';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Korolev Maksim - Developer Portfolio',
  description:
    'Developer Portfolio of Frontend Developer from Russia with 3+ years of expertise. Middle+ Software Engineer. Specializing web, UX, and JavaScript technologies.',
  keywords: [
    'Developer',
    'Portfolio',
    'Developer Portflio',
    'Korolev Maksim',
    'Next.js',
  ],
  openGraph: {
    title: 'Korolev Maksim - SWE | IXD | UX',
    description:
      'Frontend Developer from Russia with 3+ years of expertise. Middle+ Software Engineer. Specializing web, UX, and JavaScript technologies.',
    images: '/OpenGraph.jpg',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'Person',
              name: 'Maksim Korolev',
              jobTitle: 'Software Engineer',
              sameAs: ['https://github.com/OrchidClouse'],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
