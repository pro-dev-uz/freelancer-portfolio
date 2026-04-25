import { motion } from 'framer-motion';
import { ArrowDown, Send, Sparkles, Code2, Bot, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getStats, getHeroTypingWords } from '../data/translations';
import TypeWriter from './TypeWriter';

export default function Hero() {
  const { lang, t } = useLanguage();
  const stats = getStats(lang);
  const heroTypingWords = getHeroTypingWords(lang);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] max-w-[500px] aspect-square bg-primary/5 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/3 w-[60vw] max-w-[400px] aspect-square bg-accent/5 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Floating Elements — desktop only */}
      <motion.div
        className="absolute top-32 left-[10%] hidden lg:block"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
          <Bot className="w-7 h-7 text-blue-400" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-48 right-[12%] hidden lg:block"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
          <Code2 className="w-7 h-7 text-purple-400" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-[15%] hidden lg:block"
        animate={{ y: [-15, 5, -15], rotate: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
          <Zap className="w-6 h-6 text-cyan-400" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-xs sm:text-sm font-medium mb-6 sm:mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>{t('hero.badge')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 sm:mb-6"
        >
          <span className="text-white block">{t('hero.title1')}</span>
          <span className="text-gradient">{t('hero.title2')}</span>{' '}
          <span className="text-white block sm:inline">{t('hero.title3')}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-8 sm:h-10 mb-4 sm:mb-6 flex items-center justify-center px-2"
        >
          <TypeWriter
            words={heroTypingWords}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-accent-light"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-2"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-primary to-accent text-sm sm:text-base font-semibold rounded-2xl shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center justify-center gap-2 gradient-keep-white"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
            {t('hero.cta1')}
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-slate-700 hover:border-primary/40 text-slate-300 hover:text-white text-sm sm:text-base font-semibold rounded-2xl transition-all flex items-center justify-center gap-2"
          >
            {t('hero.cta2')}
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 card-hover"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-gradient mb-0.5 sm:mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs lg:text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary-light rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
