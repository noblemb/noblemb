import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rolxofficial.com'),
  title: 'RolxOfficial — Valorant & Minecraft Updates',
  description: 'Fresh Valorant patch notes, Minecraft updates, and the RolxOfficial YouTube live room in one red-glass gaming hub.',
  openGraph: {
    title: 'RolxOfficial — Stay Ahead. Play Bold.',
    description: 'Valorant patches, Minecraft drops, and RolxOfficial live status.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RolxOfficial — Stay Ahead. Play Bold.',
    description: 'Valorant patches, Minecraft drops, and RolxOfficial live status.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
