'use client';

import { useI18n } from '@/lib/i18n';
import { Users, Target, Lightbulb, CheckCircle } from 'lucide-react';

export default function CoachingPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4C9BE] rounded-full mb-6">
            <Users className="w-8 h-8 text-[#123458]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#123458] mb-6">
            {t('Coaching.heroTitle')}
          </h1>
          <p className="text-xl text-[#123458]/80 mb-8 max-w-2xl mx-auto">
            {t('Coaching.heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#123458] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#123458]/90 transition-colors">
              {t('Coaching.ctaButton')}
            </button>
            <button className="border-2 border-[#123458] text-[#123458] px-8 py-3 rounded-full font-semibold hover:bg-[#123458] hover:text-white transition-colors">
              {t('Coaching.secondaryButton')}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F1EFEC]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#123458] mb-4">
              {t('Coaching.servicesTitle')}
            </h2>
            <p className="text-lg text-[#123458]/80 max-w-2xl mx-auto">
              {t('Coaching.servicesSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#D4C9BE]">
              <div className="w-12 h-12 bg-[#D4C9BE] rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#123458]" />
              </div>
              <h3 className="text-xl font-semibold text-[#123458] mb-4">
                {t('Coaching.service1.title')}
              </h3>
              <p className="text-[#123458]/80 mb-4">
                {t('Coaching.service1.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-[#123458]/70">
                  <CheckCircle className="w-4 h-4 text-[#D4C9BE] mr-2" />
                  {t('Coaching.service1.benefit1')}
                </li>
                <li className="flex items-center text-sm text-[#123458]/70">
                  <CheckCircle className="w-4 h-4 text-[#D4C9BE] mr-2" />
                  {t('Coaching.service1.benefit2')}
                </li>
                <li className="flex items-center text-sm text-[#123458]/70">
                  <CheckCircle className="w-4 h-4 text-[#D4C9BE] mr-2" />
                  {t('Coaching.service1.benefit3')}
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#D4C9BE]">
              <div className="w-12 h-12 bg-[#D4C9BE] rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-[#123458]" />
              </div>
              <h3 className="text-xl font-semibold text-[#123458] mb-4">
                {t('Coaching.service2.title')}
              </h3>
              <p className="text-[#123458]/80 mb-4">
                {t('Coaching.service2.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-[#123458]/70">
                  <CheckCircle className="w-4 h-4 text-[#D4C9BE] mr-2" />
                  {t('Coaching.service2.benefit1')}
                </li>
                <li className="flex items-center text-sm text-[#123458]/70">
                  <CheckCircle className="w-4 h-4 text-[#D4C9BE] mr-2" />
                  {t('Coaching.service2.benefit2')}
                </li>
                <li className="flex items-center text-sm text-[#123458]/70">
                  <CheckCircle className="w-4 h-4 text-[#D4C9BE] mr-2" />
                  {t('Coaching.service2.benefit3')}
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#D4C9BE] md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-[#D4C9BE] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#123458]" />
              </div>
              <h3 className="text-xl font-semibold text-[#123458] mb-4">
                {t('Coaching.service3.title')}
              </h3>
              <p className="text-[#123458]/80 mb-4">
                {t('Coaching.service3.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-[#123458]/70">
                  <CheckCircle className="w-4 h-4 text-[#D4C9BE] mr-2" />
                  {t('Coaching.service3.benefit1')}
                </li>
                <li className="flex items-center text-sm text-[#123458]/70">
                  <CheckCircle className="w-4 h-4 text-[#D4C9BE] mr-2" />
                  {t('Coaching.service3.benefit2')}
                </li>
                <li className="flex items-center text-sm text-[#123458]/70">
                  <CheckCircle className="w-4 h-4 text-[#D4C9BE] mr-2" />
                  {t('Coaching.service3.benefit3')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#123458] mb-4">
              {t('Coaching.processTitle')}
            </h2>
            <p className="text-lg text-[#123458]/80">
              {t('Coaching.processSubtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D4C9BE] rounded-full flex items-center justify-center text-[#123458] font-bold text-lg">
                  {step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[#123458] mb-2">
                    {t(`Coaching.step${step}.title`)}
                  </h3>
                  <p className="text-[#123458]/80">
                    {t(`Coaching.step${step}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F1EFEC]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#123458] mb-6">
            {t('Coaching.ctaTitle')}
          </h2>
          <p className="text-lg text-[#123458]/80 mb-8 max-w-2xl mx-auto">
            {t('Coaching.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#123458] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#123458]/90 transition-colors">
              {t('Coaching.ctaButton')}
            </button>
            <button className="border-2 border-[#123458] text-[#123458] px-8 py-3 rounded-full font-semibold hover:bg-[#123458] hover:text-white transition-colors">
              {t('Coaching.secondaryButton')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
