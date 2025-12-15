'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { BlueButton } from '@/components/ui/BlueButton';
import { useI18n } from '@/lib/i18n';

const highlightsDe = [
  'Über 5 Jahre Erfahrung im kreativen Design',
  'Spezialisiert auf moderne Web- und Print-Lösungen',
  'Leidenschaft für benutzerfreundliche Interfaces'
];

export default function AboutTeaser() {
  const { t } = useI18n();
  const highlights = t('AboutTeaser.highlights');
  const highlightsList = Array.isArray(highlights) ? highlights : highlightsDe;

  return (
    <section className="section bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              {t('AboutTeaser.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
              {t('AboutTeaser.body')}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            {highlightsList.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-gray-700">{highlight}</p>
              </motion.div>
            ))}
          </div>

            <BlueButton href="/about">
              <span>{t('AboutTeaser.cta')}</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </BlueButton>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder/about-teaser.jpg"
              alt={t('AboutTeaser.imageAlt') || "Julia Osterloh bei der Arbeit"}
              fill
              className="object-cover"
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
