import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { getNavLinks } from '../data/translations';
import { EASE } from '../lib/motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();
  const { lang, changeLang, t, LANGS, LANG_LABELS } = useLanguage();

  const navLinks = getNavLinks(lang);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  // Lock body scroll while overlay menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const cycleLang = () => {
    const next = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length];
    changeLang(next);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          scrolled ? 'bg-bg/85 backdrop-blur-xl hairline-b' : 'bg-transparent'
        }`}
      >
        {/* scroll progress hairline */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-accent"
          style={{ scaleX: progress }}
        />

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <a href="#home" className="group flex items-center gap-2.5" data-cursor>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink transition-colors duration-300 group-hover:bg-accent sm:h-10 sm:w-10">
                <Code2 className="h-5 w-5 text-bg transition-colors duration-300 group-hover:text-white" />
              </span>
              <span className="flex items-baseline gap-1">
                <span className="font-display text-base font-bold tracking-tight sm:text-lg">
                  DevPro
                </span>
                <span className="mono-label text-accent">®</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link, i) => {
                const active = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`u-draw mono-label transition-colors duration-300 ${
                      active ? 'text-accent' : 'text-muted hover:text-ink'
                    }`}
                  >
                    <span className="mr-1.5 text-accent/60">0{i + 1}</span>
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={cycleLang}
                className="mono-label hairline rounded-full px-3 py-2 text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                aria-label="Change language"
              >
                {LANG_LABELS[lang]}
              </button>

              <button
                onClick={toggleTheme}
                className="hairline flex h-8 w-8 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:border-accent hover:text-accent sm:h-9 sm:w-9"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex"
                  >
                    {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </motion.span>
                </AnimatePresence>
              </button>

              <a
                href="#contact"
                className="group hidden items-center gap-2 overflow-hidden rounded-full bg-ink px-5 py-2.5 lg:inline-flex"
                data-cursor
              >
                <span className="mono-label text-bg transition-colors duration-300 group-hover:text-white">
                  {t('nav.cta')}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-500 group-hover:scale-[14]" />
                <span className="mono-label absolute opacity-0">{t('nav.cta')}</span>
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsOpen(true)}
                className="flex h-8 w-8 items-center justify-center text-ink lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-[70] flex flex-col bg-bg lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5 sm:h-20 sm:px-8 hairline-b">
              <span className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink">
                  <Code2 className="h-5 w-5 text-bg" />
                </span>
                <span className="font-display text-base font-bold">
                  DevPro<span className="text-accent">®</span>
                </span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center text-ink"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.07 }}
                  className="hairline-b group flex items-center justify-between py-5"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="mono-label text-accent">0{i + 1}</span>
                    <span className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
                      {link.label}
                    </span>
                  </span>
                  <span className="text-muted transition-transform duration-300 group-hover:translate-x-1">→</span>
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.15 + navLinks.length * 0.07 }}
                className="mt-8 flex items-center justify-center gap-3 rounded-full bg-accent py-4"
              >
                <span className="mono-label text-white">{t('nav.cta')}</span>
                <span className="text-white">↗</span>
              </motion.a>
            </div>

            <div className="flex items-center justify-between px-6 py-6 hairline-t">
              <div className="flex gap-4">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => changeLang(l)}
                    className={`mono-label ${lang === l ? 'text-accent' : 'text-muted'}`}
                  >
                    {LANG_LABELS[l]}
                  </button>
                ))}
              </div>
              <span className="mono-label text-muted">41.31°N 69.24°E</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
