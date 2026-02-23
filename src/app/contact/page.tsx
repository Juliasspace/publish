'use client';

import { motion } from 'framer-motion';
import FormContact from '@/components/FormContact';
import { useI18n } from '@/lib/i18n';

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-[10vw] leading-none font-serif text-[#123458] text-center tracking-tight whitespace-nowrap">
            {t('Contact.heroTitle')}
          </h1>
        </motion.div>



        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-medium text-[#123458] leading-tight mb-8">
                {t('Contact.subTitle')}
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  {t('Contact.contactText')}{' '}
                  <a href="mailto:juliaosterloh@gmx.de" className="font-semibold text-[#123458] hover:opacity-70 transition-opacity">
                    juliaosterloh@gmx.de
                  </a>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <FormContact />
          </div>

        </div>
      </div>
    </div>
  );
}