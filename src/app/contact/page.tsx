'use client';

import { motion } from 'framer-motion';
import FormContact from '@/components/FormContact';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const mkContactInfo = (t: (k: string) => any) => ([
  {
    icon: Mail,
    title: t('Contact.info.email'),
    content: 'julia@osterloh.de',
    href: 'mailto:julia@osterloh.de',
  },
  {
    icon: Phone,
    title: t('Contact.info.phone'),
    content: '+49 421 123456',
    href: 'tel:+49421123456',
  },
  {
    icon: MapPin,
    title: t('Contact.info.address'),
    content: t('Contact.info.addressValue'),
    href: 'https://maps.google.com/?q=Bremen',
  },
  {
    icon: Clock,
    title: t('Contact.info.hours'),
    content: t('Contact.info.hoursValue'),
    href: '#',
  },
]);

export default function ContactPage() {
  const { t } = useI18n();
  const contactInfo = mkContactInfo(t as unknown as (k: string) => any);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900">
              {t('Contact.heroTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('Contact.heroBody')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 text-center group hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <a
                    href={info.href}
                    className="text-gray-600 hover:text-accent transition-colors"
                  >
                    {info.content}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              {t('Contact.formTitle')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('Contact.formSubtitle')}
            </p>
          </motion.div>

          <FormContact />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              {t('Contact.faqTitle')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('Contact.faqSubtitle')}
            </p>
          </motion.div>

          <div className="space-y-6">
            {(t('Contact.faqs') as { q: string; a: string }[] || []).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}