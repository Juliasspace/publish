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
        <h1 className="text-4xl sm:text-5xl font-serif font-medium text-[#123458] mb-4 uppercase tracking-tight">
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
              <h3 className="text-xl font-bold text-gray-900 mb-2 whitespace-pre-line">{item.title}</h3>
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


    </div>
  );
}
