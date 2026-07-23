import { createContext, useContext, useState, useCallback } from 'react';
import { strings } from '../data/translations';

const LanguageContext = createContext();

const LANGS = ['uz', 'ru', 'en'];
const LANG_LABELS = { uz: "O'z", ru: 'Ру', en: 'En' };

// URL ?lang= param wins (SEO: Google crawls /?lang=ru and must see Russian),
// then the visitor's saved choice, then Uzbek.
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      if (LANGS.includes(urlLang)) return urlLang;
      return localStorage.getItem('lang') || 'uz';
    }
    return 'uz';
  });

  const changeLang = useCallback((newLang) => {
    if (LANGS.includes(newLang)) {
      setLang(newLang);
      localStorage.setItem('lang', newLang);
      // keep the URL in sync so shared links open in the same language
      const url = new URL(window.location.href);
      if (newLang === 'uz') url.searchParams.delete('lang');
      else url.searchParams.set('lang', newLang);
      window.history.replaceState({}, '', url);
    }
  }, []);

  const t = useCallback(
    (key) => strings[lang]?.[key] || strings.uz[key] || key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t, LANGS, LANG_LABELS }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
