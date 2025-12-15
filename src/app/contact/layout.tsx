import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Hast du ein Projekt im Kopf? Lass uns darüber sprechen! Kontaktiere mich für ein kostenloses Beratungsgespräch.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
