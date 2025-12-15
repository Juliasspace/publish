'use client';

import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/i18n';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  
  useEffect(() => {
    try {
      document.cookie = `NEXT_LOCALE=${language}; path=/; max-age=31536000; samesite=lax`;
    } catch {}
  }, [language]);

  const handleLanguageChange = (newLang: 'de' | 'en') => {
    setLanguage(newLang);
    // Force a page refresh to apply the new locale
    window.location.reload();
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full bg-[#F1EFEC]/70 border border-[#D4C9BE] backdrop-blur-lg p-1',
        'shadow-lg',
        className
      )}
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        aria-pressed={language === 'de'}
        onClick={() => handleLanguageChange('de')}
        className={cn(
          'relative cursor-pointer font-semibold rounded-full transition-colors text-sm px-6 py-2',
          'text-[#123458]/80 hover:text-[#123458] hover:bg-[#D4C9BE]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4C9BE] focus-visible:ring-offset-2',
          language === 'de' ? 'bg-[#D4C9BE] text-white' : 'bg-transparent'
        )}
      >
        DE
      </button>
      <button
        type="button"
        aria-pressed={language === 'en'}
        onClick={() => handleLanguageChange('en')}
        className={cn(
          'relative cursor-pointer font-semibold rounded-full transition-colors text-sm px-6 py-2',
          'text-[#123458]/80 hover:text-[#123458] hover:bg-[#D4C9BE]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4C9BE] focus-visible:ring-offset-2',
          language === 'en' ? 'bg-[#D4C9BE] text-white' : 'bg-transparent'
        )}
      >
        ENG
      </button>
    </div>
  );
}


