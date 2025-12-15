import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über mich',
  description: 'Erfahre mehr über meine Reise als kreative Designerin und Entwicklerin. Meine Erfahrung, Leidenschaften und der Weg, der mich hierher geführt hat.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
