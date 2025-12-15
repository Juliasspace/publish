'use client';

import { motion } from 'framer-motion';
import { getPlatforms } from '@/content/data';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n';
import { useI18n } from '@/lib/i18n';

const iconMap = {
  Instagram: '📷',
  Youtube: '🎥',
  Linkedin: '💼',
};

export default function Platforms() {
  const { t, language } = useI18n();
  const platforms = getPlatforms(language as 'de' | 'en');
  return (
    <section className="section bg-background">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4"
        >
          {t('Cards.platformsTitle')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto" // This key is missing in the JSON, so it will display nothing.
        >
          {t('Cards.platformsSubtitle')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="card p-8 h-full flex flex-col text-center hover:shadow-xl transition-all duration-300">
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-2xl`}>
                {iconMap[platform.icon as keyof typeof iconMap]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {platform.name}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {platform.description}
              </p>

              {/* Button */}
              <Button asChild variant="primary" className="inline-flex items-center justify-center space-x-2 group-hover:scale-105 transition-transform">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${platform.name} Profil besuchen`}
                >
                  <span>{t('Cards.view')}</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
