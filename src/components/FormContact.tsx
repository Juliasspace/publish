'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { BlueButton } from '@/components/ui/BlueButton';

const createContactSchema = (t: (key: string) => string) => z.object({
  firstName: z.string().min(2, t('Contact.form.firstName') + ' required'),
  lastName: z.string().optional(),
  email: z.string().email(t('Contact.form.email') + ' invalid'),
  subject: z.string().min(2, t('Contact.form.subject') + ' required'),
  message: z.string().min(10, t('Contact.form.message') + ' required'),
});

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

export default function FormContact() {
  const { t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const schema = createContactSchema(t as any);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-[#F9F9F9] border border-gray-300 rounded-2xl focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all duration-200";
  const labelClasses = "block text-sm font-medium text-gray-600 mb-1";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Fields */}
        <div>
          <label className={labelClasses}>
            {t('Contact.form.name')} <span className="text-gray-400 text-xs font-normal">{t('Contact.form.required')}</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="sr-only">{t('Contact.form.firstName')}</label>
              <input
                {...register('firstName')}
                type="text"
                id="firstName"
                placeholder={t('Contact.form.firstName')}
                className={inputClasses}
                aria-invalid={errors.firstName ? 'true' : 'false'}
              />
              {errors.firstName && (
                <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">{t('Contact.form.lastName')}</label>
              <input
                {...register('lastName')}
                type="text"
                id="lastName"
                placeholder={t('Contact.form.lastName')}
                className={inputClasses}
              />
            </div>
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className={labelClasses}>
            {t('Contact.form.email')} <span className="text-gray-400 text-xs font-normal">{t('Contact.form.required')}</span>
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className={inputClasses}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className={labelClasses}>
            {t('Contact.form.subject')} <span className="text-gray-400 text-xs font-normal">{t('Contact.form.required')}</span>
          </label>
          <input
            {...register('subject')}
            type="text"
            id="subject"
            className={inputClasses}
            aria-invalid={errors.subject ? 'true' : 'false'}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className={labelClasses}>
            {t('Contact.form.message')} <span className="text-gray-400 text-xs font-normal">{t('Contact.form.required')}</span>
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={5}
            className={`${inputClasses} resize-none`}
            aria-invalid={errors.message ? 'true' : 'false'}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <BlueButton
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3 text-base"
          >
            {isSubmitting ? '...' : t('Contact.form.submit')}
          </BlueButton>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 text-green-800 text-sm rounded-lg">
            Message sent successfully!
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 text-red-800 text-sm rounded-lg">
            Something went wrong. Please try again.
          </div>
        )}
      </form>
    </motion.div>
  );
}
