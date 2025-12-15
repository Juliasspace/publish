'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Home, User, Mail, Users } from 'lucide-react';
import clsx from 'clsx';
import { NavBar } from '@/components/ui/tubelight-navbar';
import LanguageToggle from '@/components/LanguageToggle';
import { useI18n } from '@/lib/i18n';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useI18n();

  return (
    <header className="bg-background/90 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-colors">
              <Image
                src="/images/header_logo_transparent.png"
                alt="Julia Osterloh brandmark"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <span className="text-2xl font-semibold text-[#123458]">
                Julia Osterloh
              </span>
            </Link>
          </div>

          {/* Right-side navigation (Tubelight) */}
          <div className="hidden md:block">
            <NavBar
              items={[
                { name: t('Nav.home'), url: '/', icon: Home },
                { name: t('Nav.about'), url: '/about', icon: User },
                { name: t('Nav.coaching'), url: '/coaching', icon: Users },
                { name: t('Nav.contact'), url: '/contact', icon: Mail },
              ]}
              floating={false}
              size="lg"
            />
          </div>

          {/* Language toggle */}
          <div className="ml-4 hidden md:block">
            <LanguageToggle />
          </div>

          {/* Mobile menu button (kept for a11y, no old list) */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-[#123458] hover:opacity-80 focus-ring rounded-lg p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Tubelight compact) */}
        <div className={clsx(
          'md:hidden transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        )}>
          <div className="py-3 border-t border-secondary flex justify-center">
            <NavBar
              items={[
                { name: t('Nav.home'), url: '/', icon: Home },
                { name: t('Nav.about'), url: '/about', icon: User },
                { name: t('Nav.coaching'), url: '/coaching', icon: Users },
                { name: t('Nav.contact'), url: '/contact', icon: Mail },
              ]}
              floating={false}
              size="md"
            />
          </div>
          <div className="pb-4 flex justify-center">
            <LanguageToggle />
          </div>
        </div>
      </nav>


    </header>
  );
}
