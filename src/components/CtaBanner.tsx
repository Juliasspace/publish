'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { BlueButton } from '@/components/ui/BlueButton';

export default function CtaBanner() {
  const { t } = useI18n();
  return (
    <section className="w-full bg-accent py-16 px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-white"
      >
        <div className="w-full px-6 sm:px-12 lg:px-20 space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center">
              <Sparkles className="h-8 w-8" aria-hidden="true" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              {t('CTA.title')}
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              {t('CTA.body')}
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4 flex justify-center">
            <BlueButton href="/contact">
              <span>{t('CTA.button')}</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </BlueButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
