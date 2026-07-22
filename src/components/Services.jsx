import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getServices } from '../data/translations';
import SectionHead from './ui/SectionHead';
import { Reveal } from './ui/Reveal';
import { EASE } from '../lib/motion';

// Editorial accordion index — rows expand on click, first row open.
export default function Services() {
  const { lang, t } = useLanguage();
  const services = getServices(lang);
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="relative py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          index="02"
          tag={t('services.tag')}
          title={t('services.title1')}
          accent={t('services.title2')}
          sub={t('services.subtitle')}
        />

        <div className="hairline-b">
          {services.map((service, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={service.title} delay={i * 0.05}>
                <div
                  className="group cursor-pointer hairline-t"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  data-cursor
                >
                  {/* row */}
                  <div className="flex items-center gap-4 px-2 py-6 sm:gap-8 sm:py-8">
                    <span
                      className={`mono-label transition-colors duration-300 ${
                        isOpen ? 'text-accent' : 'text-muted'
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <service.icon
                      className={`h-5 w-5 shrink-0 transition-all duration-500 sm:h-6 sm:w-6 ${
                        isOpen ? 'text-accent' : 'text-muted group-hover:text-accent'
                      }`}
                    />
                    <h3 className="flex-1 font-display text-base font-bold uppercase tracking-tight text-ink transition-transform duration-500 group-hover:translate-x-2 sm:text-xl lg:text-2xl">
                      {service.title}
                    </h3>
                    <p className="hidden max-w-xs truncate text-xs text-muted xl:block">
                      {service.description}
                    </p>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 sm:h-10 sm:w-10 ${
                        isOpen
                          ? 'border-accent bg-accent text-white'
                          : 'border-line text-muted group-hover:border-accent group-hover:text-accent'
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </div>

                  {/* expanded panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 px-2 pb-8 sm:grid-cols-2 sm:gap-10 sm:pl-[4.5rem] lg:pl-24">
                          <p className="text-sm leading-relaxed text-muted sm:text-base">
                            {service.description}
                          </p>
                          <div>
                            <div className="flex flex-wrap gap-2">
                              {service.features.map((f) => (
                                <span
                                  key={f}
                                  className="mono-label hairline rounded-full px-3 py-1.5 text-ink-soft"
                                >
                                  {f}
                                </span>
                              ))}
                            </div>
                            <a
                              href="#contact"
                              onClick={(e) => e.stopPropagation()}
                              className="u-draw mono-label mt-6 inline-flex items-center gap-2 text-accent"
                            >
                              {t('services.detail')} →
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* extra services CTA */}
        <Reveal delay={0.2} className="mt-14 text-center">
          <p className="font-display text-lg font-bold uppercase text-ink sm:text-xl">
            {t('services.extra_title')}
          </p>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted">{t('services.extra_desc')}</p>
          <a
            href="#contact"
            data-cursor
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="mono-label text-white">{t('services.extra_cta')}</span>
            <span className="text-white transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
