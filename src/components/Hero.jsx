import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { getStats, getHeroTypingWords } from '../data/translations';
import { EASE } from '../lib/motion';
import DotField from './ui/DotField';
import Magnetic from './ui/Magnetic';
import CountUp from './ui/CountUp';

// Slot-machine word rotator — words swap through a clip mask.
function WordSlot({ words }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-flex h-[1.5em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="inline-block whitespace-nowrap text-accent"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const { lang, t } = useLanguage();
  const stats = getStats(lang);
  const words = getHeroTypingWords(lang);

  const line = (delay) => ({
    initial: { y: '112%' },
    animate: { y: '0%' },
    transition: { duration: 1, ease: EASE, delay },
  });

  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <DotField className="opacity-70" />

      {/* corner coordinates — editorial detail */}
      <div className="pointer-events-none absolute right-5 top-24 hidden text-right lg:block">
        <p className="mono-label text-muted">41.31°N 69.24°E</p>
        <p className="mono-label mt-1 text-muted">TASHKENT / UZ</p>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-5 pt-28 sm:px-8 sm:pt-32 lg:px-12">
        {/* availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="mb-8 flex items-center gap-3 sm:mb-10"
        >
          <span className="pulse-dot" />
          <span className="mono-label text-ink-soft">{t('hero.badge')}</span>
          <span className="mono-label text-muted">/ EST. 2022</span>
        </motion.div>

        {/* headline — three masked lines */}
        <h1 className="font-display font-bold uppercase leading-[0.98] tracking-tight text-[clamp(2.4rem,9.5vw,7.2rem)]">
          <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
            <motion.span className="block" {...line(0.35)}>
              {t('hero.title1')}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
            <motion.span className="block text-outline" {...line(0.47)}>
              {t('hero.title2')}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
            <motion.span className="block text-accent" {...line(0.59)}>
              {t('hero.title3')}
            </motion.span>
          </span>
        </h1>

        {/* rotator + subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
          className="mt-8 flex max-w-2xl flex-col gap-5 sm:mt-10"
        >
          <p className="font-mono text-sm font-medium sm:text-base">
            <span className="text-muted">{'// '}</span>
            <WordSlot words={words} />
          </p>
          <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1 }}
          className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-6"
        >
          <Magnetic>
            <a
              href="#contact"
              data-cursor
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 transition-colors duration-500 hover:bg-accent sm:w-auto"
            >
              <span className="mono-label text-bg group-hover:text-white">{t('hero.cta1')}</span>
              <span className="text-bg transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                →
              </span>
            </a>
          </Magnetic>
          <a
            href="#services"
            className="u-draw mono-label inline-flex items-center gap-2 self-center text-ink-soft hover:text-ink sm:self-auto"
          >
            {t('hero.cta2')} <span className="text-accent">↓</span>
          </a>
        </motion.div>
      </div>

      {/* stats strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="relative z-10 mt-16 hairline-t"
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-1 py-6 sm:py-8 ${
                i % 2 === 1 ? 'border-l border-line pl-6' : ''
              } ${i >= 2 ? 'max-lg:border-t max-lg:border-line' : ''} ${
                i > 0 ? 'lg:border-l lg:border-line lg:pl-8' : ''
              }`}
            >
              <CountUp
                value={stat.value}
                className="font-mono text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl"
              />
              <span className="mono-label text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
