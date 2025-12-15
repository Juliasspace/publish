"use client";

import Link from 'next/link';
import { Instagram, Youtube, Linkedin, Twitter, Heart } from 'lucide-react';
import { socialLinks } from '@/content/data';
import { useI18n } from '@/lib/i18n';

const iconMap = {
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
};

export default function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-accent">Julia Osterloh</h3>
            <p className="text-foreground/80 text-sm leading-relaxed">
              {t('Footer.brandDesc')}
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-accent">{t('Footer.followMe')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-foreground/60 hover:text-accent transition-colors focus-ring rounded-lg p-2"
                    aria-label={`${social.name} ${t('Footer.profile')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-accent">{t('Footer.legal')}</h4>
            <div className="space-y-2">
              <Link 
                href="/impressum" 
                className="block text-foreground/80 hover:text-accent transition-colors focus-ring rounded-lg py-1"
              >
                {t('Footer.impressum')}
              </Link>
              <Link 
                href="/datenschutz" 
                className="block text-foreground/80 hover:text-accent transition-colors focus-ring rounded-lg py-1"
              >
                {t('Footer.privacy')}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-secondary">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-foreground/60 text-sm flex items-center">
              {t('Footer.madeIn', { year: String(currentYear) })}
            </p>
            <p className="text-foreground/50 text-xs">
              {t('Footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
