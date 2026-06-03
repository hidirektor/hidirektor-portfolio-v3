'use client';

import React, {createContext, useContext, useEffect, useState} from 'react';
import en from '../../locales/en.json';
import tr from '../../locales/tr.json';
import de from '../../locales/de.json';

type Language = 'en' | 'tr' | 'de';
type Translations = typeof en;

const translations: Record<Language, Translations> = { en, tr, de };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Start with browser language immediately; localStorage takes priority
  const [language, setLanguageState] = useState<Language>(() => {
    // During SSR navigator is unavailable — return 'en' as placeholder
    if (typeof window === 'undefined') return 'en';
    const saved = localStorage.getItem('language') as Language;
    if (saved && translations[saved]) return saved;
    const browserLang = navigator.language.split('-')[0] as Language;
    return translations[browserLang] ? browserLang : 'en';
  });

  useEffect(() => {
    // Re-run on client to pick up browser language (handles SSR mismatch)
    const saved = localStorage.getItem('language') as Language;
    if (saved && translations[saved]) {
      setLanguageState(saved);
    } else {
      const browserLang = navigator.language.split('-')[0] as Language;
      if (translations[browserLang]) setLanguageState(browserLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Helper to get nested values from JSON
  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation key not found: ${path}`);
        return path; // Fallback to key
      }
      current = current[key];
    }
    
    return current as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
