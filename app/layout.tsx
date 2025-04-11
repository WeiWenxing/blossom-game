import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blossom Games - Free Online Games | Play HTML5 Games Without Download',
  description: 'Play free online games at Blossom Games! Enjoy Love Tester, Bubble Shooter, Candy Match and more. No downloads needed - play instantly in your browser.',
  keywords: 'Blossom Games, free online games, browser games, HTML5 games, no download games, Love Tester game',
  openGraph: {
    title: 'Blossom Games - Free Online Games | Play Without Download',
    description: 'Play free online games at Blossom Games! Enjoy Love Tester, Bubble Shooter, Candy Match and more.',
    type: 'website',
    locale: 'en_US',
    url: 'https://blossomgames.example.com',
    siteName: 'Blossom Games',
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
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="canonical" href="https://gamehub.example.com" />
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

