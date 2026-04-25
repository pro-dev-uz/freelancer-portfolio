import { Code2, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { getNavLinks } from '../data/translations';

export default function Footer() {
  const { lang, t } = useLanguage();
  const navLinks = getNavLinks(lang);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white gradient-keep-white" />
            </div>
            <span className="text-lg font-bold text-gradient">DevPro</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-400 text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light hover:bg-primary/20 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} DevPro. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
