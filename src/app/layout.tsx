import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/lib/i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://juliaosterloh.de'),
  title: {
    default: 'Julia Osterloh - Kreative Designerin & Entwicklerin',
    template: '%s | Julia Osterloh'
  },
  description: 'Kreative Lösungen für deine digitalen und analogen Projekte. Webdesign, Branding, Social Media Content und mehr.',
  keywords: ['Webdesign', 'Branding', 'UI/UX', 'Social Media', 'Kreativ', 'Design', 'Entwicklung'],
  authors: [{ name: 'Julia Osterloh' }],
  creator: 'Julia Osterloh',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://juliaosterloh.de',
    siteName: 'Julia Osterloh',
    title: 'Julia Osterloh - Kreative Designerin & Entwicklerin',
    description: 'Kreative Lösungen für deine digitalen und analogen Projekte. Webdesign, Branding, Social Media Content und mehr.',
    images: [
      {
        url: '/placeholder/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Julia Osterloh - Kreative Designerin & Entwicklerin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julia Osterloh - Kreative Designerin & Entwicklerin',
    description: 'Kreative Lösungen für deine digitalen und analogen Projekte.',
    images: ['/placeholder/og-image.jpg'],
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
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider initialLanguage="de">
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow w-[80%] mx-auto">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
