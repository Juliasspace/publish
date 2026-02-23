'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { BlueButton } from '@/components/ui/BlueButton';
import { Typewriter } from '@/components/ui/typewriter';
import { useI18n } from '@/lib/i18n';

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="section bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#123458] leading-tight uppercase tracking-tight">
              {t('Hero.titlePrefix')}{' '}
              <Typewriter
                words={["Julia", "a Business Psychologist", "an HR Consultant", "a Coach"]}
                speed={100}
                delayBetweenWords={2000}
                className="text-accent"
              />
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('Hero.subtitle')}
              {t('Hero.subtitleCont')}
            </p>
          </div>

          <div className="space-y-6">
            {t('Hero.body') && (
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('Hero.body')}
              </p>
            )}

            <BlueButton href="/about">
              <span>{t('Hero.cta')}</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </BlueButton>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:pl-24"
        >
          <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/julia-portrait.png"
              alt="Profile picture of Julia Osterloh"
              fill
              className="object-cover"
              priority
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
