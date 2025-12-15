import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coaching - Julia Osterloh',
  description: 'Professional coaching services to help you achieve your goals and unlock your potential.',
  keywords: ['coaching', 'personal development', 'business psychology', 'career coaching'],
  openGraph: {
    title: 'Coaching - Julia Osterloh',
    description: 'Professional coaching services to help you achieve your goals and unlock your potential.',
    type: 'website',
  },
};

export default function CoachingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
