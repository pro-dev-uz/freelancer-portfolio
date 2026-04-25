import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getServices } from '../data/translations';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { lang, t } = useLanguage();
  const services = getServices(lang);

  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[600px] aspect-square bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-light text-sm font-semibold tracking-wider uppercase">
            {t('services.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            {t('services.title1')} <span className="text-gradient">{t('services.title2')}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 card-hover cursor-default"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${service.bgColor} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r ${service.color} bg-clip-text`} style={{ color: 'inherit' }} />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gradient transition-all">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-2.5 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary-light text-sm font-medium group/link hover:gap-3 transition-all"
              >
                {t('services.detail')}
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 glass rounded-3xl p-6 sm:p-8 text-center"
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            {t('services.extra_title')}
          </h3>
          <p className="text-slate-400 text-sm mb-4 max-w-xl mx-auto">
            {t('services.extra_desc')}
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-sm font-semibold rounded-xl shadow-lg shadow-primary/20 gradient-keep-white"
          >
            {t('services.extra_cta')}
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
