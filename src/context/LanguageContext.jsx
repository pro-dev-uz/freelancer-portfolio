import { createContext, useContext, useState, useCallback } from 'react';
import { strings } from '../data/translations';

const LanguageContext = createContext();

const LANGS = ['uz', 'ru', 'en'];
const LANG_LABELS = { uz: "O'z", ru: 'Ру', en: 'En' };

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('lang') || 'en';
    }
    return 'en';
  });

  const changeLang = useCallback((newLang) => {
    if (LANGS.includes(newLang)) {
      setLang(newLang);
      localStorage.setItem('lang', newLang);
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
