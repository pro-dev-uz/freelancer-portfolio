import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SEO_DATA = {
  uz: {
    title: "DevPro — Telegram Bot, Web Sayt, Android Ilova Yaratish | Toshkent",
    description: "Professional dasturlash jamoasi — Telegram botlar, web saytlar, Android ilovalar yaratamiz. Toshkent, O'zbekiston. Tez, sifatli va kafolatli. Bepul maslahat!",
    lang: 'uz',
  },
  ru: {
    title: "DevPro — Разработка Telegram Бота, Сайта, Android Приложения | Ташкент",
    description: "Профессиональная команда разработчиков — создание Telegram ботов, сайтов, Android приложений. Ташкент, Узбекистан. Быстро, качественно, с гарантией.",
    lang: 'ru',
  },
  en: {
    title: "DevPro — Telegram Bot, Website, Android App Development | Tashkent",
    description: "Professional development team — Telegram bots, websites, Android apps. Tashkent, Uzbekistan. Fast, quality, guaranteed. Free consultation!",
    lang: 'en',
  },
};

export default function SEOHead() {
  const { lang } = useLanguage();
  const seo = SEO_DATA[lang] || SEO_DATA.uz;

  useEffect(() => {
    // Title
    document.title = seo.title;

    // html lang attribute
    document.documentElement.lang = seo.lang;

    // Canonical follows the language URL (uz = base, ru/en = ?lang=)
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        'href',
        seo.lang === 'uz' ? 'https://pro-dev.uz/' : `https://pro-dev.uz/?lang=${seo.lang}`
      );
    }

    // og:locale per language
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute(
        'content',
        { uz: 'uz_UZ', ru: 'ru_RU', en: 'en_US' }[seo.lang] || 'uz_UZ'
      );
    }

    // Meta description
    let desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', seo.description);

    // OG title & description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    // Twitter
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', seo.title);
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', seo.description);

  }, [lang, seo]);

  return null;
}
