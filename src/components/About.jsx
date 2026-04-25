import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Award, Coffee, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { skills } from '../data/translations';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const features = [
    { icon: Rocket, title: t('about.feat1_title'), desc: t('about.feat1_desc') },
    { icon: Award, title: t('about.feat2_title'), desc: t('about.feat2_desc') },
    { icon: Coffee, title: t('about.feat3_title'), desc: t('about.feat3_desc') },
    { icon: CheckCircle2, title: t('about.feat4_title'), desc: t('about.feat4_desc') },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary-light text-xs sm:text-sm font-semibold tracking-wider uppercase">
            {t('about.tag')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
            {t('about.title1')} <span className="text-gradient">{t('about.title2')}</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 mb-6 sm:mb-8">
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                {t('about.p1')}{' '}
                <span className="text-primary-light font-semibold">{t('about.p1_tg')}</span>,{' '}
                <span className="text-primary-light font-semibold">{t('about.p1_web')}</span>{' '}
                {t('about.p1_end').startsWith('.') ? '' : 'va '}
                <span className="text-primary-light font-semibold">{t('about.p1_and')}</span>
                {' '}{t('about.p1_end')}
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                {t('about.p2')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-dark-light/50 border border-white/5 hover:border-primary/20 transition-colors"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-light" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-white font-semibold text-xs sm:text-sm">{item.title}</h4>
                    <p className="text-slate-400 text-[11px] sm:text-xs mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary-light" />
                </div>
                {t('about.skills_title')}
              </h3>

              <div className="space-y-4 sm:space-y-5">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.08 }}
                  >
                    <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                      <span className="text-xs sm:text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-[10px] sm:text-xs font-semibold text-primary-light">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-dark-lighter/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + i * 0.08, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
