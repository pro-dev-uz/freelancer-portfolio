import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getFaqs } from '../data/translations';

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="glass rounded-xl sm:rounded-2xl overflow-hidden"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-sm sm:text-base font-semibold text-white pr-2">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-primary-light" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState(0);
  const { lang, t } = useLanguage();
  const faqs = getFaqs(lang);

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary-light text-xs sm:text-sm font-semibold tracking-wider uppercase">{t('faq.tag')}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2 sm:mt-3 mb-3 sm:mb-4">
            {t('faq.title1')} <span className="text-gradient">{t('faq.title2')}</span>
          </h2>
        </motion.div>

        {isInView && (
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
