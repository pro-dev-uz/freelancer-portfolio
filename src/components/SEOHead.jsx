import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SEO_DATA = {
  uz: {
    title: "DevPro — Telegram Bot, Web Sayt, Android Ilova Yaratish | Toshkent",
    description: "Professional dasturlash jamoasi va video studiya — Telegram botlar, web saytlar, Android ilovalar, video olish va montaj. Toshkent, O'zbekiston. Tez, sifatli va kafolatli. Bepul maslahat!",
    lang: 'uz',
  },
  ru: {
    title: "DevPro — Разработка Telegram Бота, Сайта, Android Приложения | Ташкент",
    description: "Профессиональная команда разработчиков и видеостудия — Telegram боты, сайты, Android приложения, видеосъёмка и монтаж. Ташкент, Узбекистан. Быстро, качественно, с гарантией.",
    lang: 'ru',
  },
  en: {
    title: "DevPro — Telegram Bot, Website, Android App Development | Tashkent",
    description: "Professional development team & video studio — Telegram bots, websites, Android apps, video production and editing. Tashkent, Uzbekistan. Fast, quality, guaranteed!",
    lang: 'en',
  },
};

// Optional props let blog pages override title/description and the canonical
// path (e.g. "/blog/slug"). Without props it uses the homepage defaults.
export default function SEOHead({ title, description, path = '/' }) {
  const { lang } = useLanguage();
  const seoLang = SEO_DATA[lang] ? lang : 'uz';
  const base = SEO_DATA[seoLang];
  const finalTitle = title || base.title;
  const finalDesc = description || base.description;

  useEffect(() => {
    document.title = finalTitle;
    document.documentElement.lang = seoLang;

    const canonicalUrl =
      'https://pro-dev.uz' + path + (seoLang === 'uz' ? '' : `${path.includes('?') ? '&' : '?'}lang=${seoLang}`);
    const setAttr = (sel, attr, val) => {
      const el = document.querySelector(sel);
      if (el) el.setAttribute(attr, val);
    };

    setAttr('link[rel="canonical"]', 'href', canonicalUrl);
    setAttr('meta[property="og:locale"]', 'content', { uz: 'uz_UZ', ru: 'ru_RU', en: 'en_US' }[seoLang]);
    setAttr('meta[name="description"]', 'content', finalDesc);
    setAttr('meta[property="og:title"]', 'content', finalTitle);
    setAttr('meta[property="og:description"]', 'content', finalDesc);
    setAttr('meta[name="twitter:title"]', 'content', finalTitle);
    setAttr('meta[name="twitter:description"]', 'content', finalDesc);
  }, [seoLang, finalTitle, finalDesc, path]);

  return null;
}
