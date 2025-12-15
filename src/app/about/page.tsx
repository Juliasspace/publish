'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, Download } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { Timeline } from '@/components/ui/timeline';
import { Button } from '@/components/ui/Button';
import { BlueButton } from '@/components/ui/BlueButton';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="w-full mx-auto px-4 pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl sm:text-5xl font-semibold text-accent mb-4">
          {t('About.journeyTitle')}
        </h1>
        <p className="text-lg text-gray-600">
          {t('About.journeySubtitle')}
        </p>
      </motion.div>

      <Timeline
        data={(t('About.journey') as { year: string; title: string; desc: string; images?: string[] }[] || []).map((item, index) => ({
          title: item.year,
          content: (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <div className="text-gray-700 leading-relaxed mb-8">
                {item.desc ? (
                  item.desc.includes('•') ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {item.desc.split('•').map((part, i) => (
                        <li key={i}>{part.trim()}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.desc}</p>
                  )
                ) : null}
              </div>

              {/* Decorative images for visual richness */}
              {item.images && item.images.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {item.images.length === 1 ? (
                    <div className="relative h-20 md:h-44 lg:h-60 w-full overflow-hidden rounded-lg shadow-md col-span-2">
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <>
                      <div className="relative h-20 md:h-44 lg:h-60 w-full overflow-hidden rounded-lg shadow-md">
                        <Image
                          src={item.images[0]}
                          alt={`${item.title} 1`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="relative h-20 md:h-44 lg:h-60 w-full overflow-hidden rounded-lg shadow-md">
                        <Image
                          src={item.images[1]}
                          alt={`${item.title} 2`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          )
        }))}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12 mb-20"
      >
        <BlueButton href="/images/Julia CV PDF.pdf" download="Julia_Osterloh_CV.pdf">
          <span>{t('About.downloadCV')}</span>
          <Download className="h-5 w-5" aria-hidden="true" />
        </BlueButton>
      </motion.div>

      {/* Skills & Interests - Keeping this as it wasn't explicitly asked to be removed, but user said 'delete headlines work & education'. Skills is usually separate. If user wants it gone they'd say 'delete everything else'. I'll keep it as footer content essentially. */}
      <section className="section bg-background pt-0">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t('About.skillsInterestsTitle')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('About.skills')}</h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                {(t('About.skillsList') as string[] || []).map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="card p-6 md:col-span-2 lg:col-span-3">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('About.interests')}</h3>
              <p className="text-gray-700">{t('About.interestsText')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
