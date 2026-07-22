import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getFaqs } from '../data/translations';
import SectionHead from './ui/SectionHead';
import { Reveal } from './ui/Reveal';
import { EASE } from '../lib/motion';

export default function FAQ() {
  const { lang, t } = useLanguage();
  const faqs = getFaqs(lang);
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHead
          index="06"
          tag={t('faq.tag')}
          title={t('faq.title1')}
          accent={t('faq.title2')}
          align="center"
        />

        <div className="hairline-b">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div className="hairline-t">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center gap-4 py-5 text-left sm:gap-6 sm:py-6"
                    data-cursor
                  >
                    <span className={`mono-label transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-muted'}`}>
                      0{i + 1}
                    </span>
                    <span className="flex-1 text-sm font-bold text-ink sm:text-base">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        isOpen ? 'border-accent text-accent' : 'border-line text-muted'
                      }`}
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="border-l-2 border-accent pb-6 pl-10 pr-4 text-sm leading-relaxed text-muted sm:pl-12">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
