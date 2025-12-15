'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import deTranslations from '@/messages/de.json';
import enTranslations from '@/messages/en.json';

export type LanguageCode = 'de' | 'en';

type Translations = Record<string, any>;

const translations: Record<LanguageCode, Translations> = {
  de: deTranslations,
  en: enTranslations,
};

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children, initialLanguage }: { children: React.ReactNode; initialLanguage?: LanguageCode }) {
  const [language, setLanguageState] = useState<LanguageCode>(initialLanguage ?? 'de');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? (localStorage.getItem('lang') as LanguageCode | null) : null;
    const cookieLang =
      typeof document !== 'undefined'
        ? (document.cookie.split(';').find(c => c.trim().startsWith('NEXT_LOCALE='))?.split('=')[1] as LanguageCode)
        : null;

    const finalLang = stored || cookieLang || initialLanguage || 'de';

    if (finalLang === 'de' || finalLang === 'en') {
      setLanguageState(finalLang);
      if (typeof document !== 'undefined') document.documentElement.lang = finalLang;
    } else {
      if (typeof document !== 'undefined') document.documentElement.lang = 'de';
    }
  }, [initialLanguage]);

  const setLanguage = useCallback((lang: LanguageCode) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') localStorage.setItem('lang', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=31536000; samesite=lax`;
    }
  }, []);

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export function useI18n() {
  const { language } = useLanguage();

  const t = useCallback(
    (path: string, params?: Record<string, string>): any => {
      const parts = path.split('.');
      let node: any = (translations as any)[language];
      for (const part of parts) {
        if (node && typeof node === 'object' && part in node) {
          node = node[part];
        } else {
          return path; // fallback to key
        }
      }
      
      // Handle string interpolation
      if (typeof node === 'string' && params) {
        return node.replace(/\{(\w+)\}/g, (match, key) => params[key] || match);
      }
      
      return node;
    },
    [language]
  );

  // Add raw method for accessing nested objects
  const tWithRaw = Object.assign(t, {
    raw: (path: string) => t(path)
  });

  return { t: tWithRaw, language };
}
