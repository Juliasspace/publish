import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung für Julia Osterloh - Kreative Designerin & Entwicklerin',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
