import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Search, Rocket, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getProcessSteps } from '../data/translations';

const stepIcons = [MessageCircle, Search, Rocket, CheckCircle2];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { lang, t } = useLanguage();
  const processSteps = getProcessSteps(lang);

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary-light text-xs sm:text-sm font-semibold tracking-wider uppercase">{t('process.tag')}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
            {t('process.title1')} <span className="text-gradient">{t('process.title2')}</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-center card-hover"
              >
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
                )}

                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary-light" />
                </div>

                <div className="text-xs font-bold text-primary-light mb-2 tracking-wider">{step.step} {t('process.step_suffix')}</div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3">{step.description}</p>

                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent-light text-xs font-medium">
                  {step.duration}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
