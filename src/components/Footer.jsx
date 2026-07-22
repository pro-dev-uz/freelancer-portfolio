import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getNavLinks } from '../data/translations';
import Magnetic from './ui/Magnetic';

// Footer continues the ink panel — giant cropped ghost wordmark below.
export default function Footer() {
  const { lang, t } = useLanguage();
  const navLinks = getNavLinks(lang);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="ink-panel relative overflow-hidden border-t border-invert-line">
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <span className="font-display text-base font-bold text-invert-ink">
            DevPro<span className="text-accent">®</span>
          </span>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="u-draw mono-label text-invert-muted hover:text-invert-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Magnetic>
            <button
              onClick={scrollToTop}
              data-cursor
              className="flex h-10 w-10 items-center justify-center rounded-full border border-invert-line text-invert-muted transition-colors duration-300 hover:border-accent hover:text-accent"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </Magnetic>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-invert-line pt-6 sm:flex-row">
          <p className="mono-label text-invert-muted">
            © {new Date().getFullYear()} DEVPRO — {t('footer.rights')}
          </p>
          <p className="mono-label text-invert-muted">41.31°N 69.24°E / UZ</p>
        </div>
      </div>

      {/* ghost wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none text-center font-display font-bold uppercase leading-[0.72] tracking-tight text-outline-invert opacity-[0.14]"
        style={{ fontSize: 'clamp(4rem, 17vw, 15rem)', marginBottom: '-0.18em' }}
      >
        DevPro
      </div>
    </footer>
  );
}
