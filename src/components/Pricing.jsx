import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getPricing } from '../data/translations';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { lang, t } = useLanguage();
  const pricing = getPricing(lang);

  return (
    <section id="pricing" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[500px] aspect-square bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary-light text-xs sm:text-sm font-semibold tracking-wider uppercase">{t('pricing.tag')}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
            {t('pricing.title1')} <span className="text-gradient">{t('pricing.title2')}</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 card-hover ${
                plan.popular ? 'border-primary/30 ring-1 ring-primary/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent text-xs font-bold rounded-full flex items-center gap-1 gradient-keep-white">
                  <Sparkles className="w-3 h-3" /> {t('pricing.popular')}
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-3xl sm:text-4xl font-black ${plan.popular ? 'text-gradient' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-slate-400 text-sm">{plan.period}</span>}
                </div>
                <p className="text-slate-400 text-xs sm:text-sm mt-2">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-slate-300 text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`block w-full py-3 text-center font-semibold text-sm rounded-xl transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/25 gradient-keep-white'
                    : 'bg-white/5 text-white border border-white/10 hover:border-primary/30'
                }`}
              >
                {t('pricing.cta')}
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-slate-500 text-xs sm:text-sm mt-6 sm:mt-8"
        >
          {t('pricing.note')}
        </motion.p>
      </div>
    </section>
  );
}
