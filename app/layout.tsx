import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://blossom-game.com'),
  title: 'Blossom Game | Free Online Unblocked | blossom-game.com',
  description: 'Blossom Game, Play free daily flower connect. While not puzzles or Wordle, find similar brain-teasing fun. Simply match blooms—no wordplay, just colorful joy.',
  openGraph: {
    title: 'Blossom Games - Free Online Games | Play Without Download',
    description: 'Blossom Game, Play free daily flower connect',
    type: 'website',
    url: 'https://blossom-game.com',
    siteName: 'Blossom Game',
    images: [
      {
        url: '/assets/guides/blossom-game-howto-2.jpg',
        alt: 'Blossom Games - Free Online Games Screenshot',
      }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blossom Games - Free Online Games',
    description: 'Play free online games without download at Blossom Games',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://blossom-game.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon-16x16.png" />
        <link rel="manifest" href="/assets/img/site.webmanifest" />
        <link rel="mask-icon" href="/assets/img/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/assets/img/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/assets/img/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}




