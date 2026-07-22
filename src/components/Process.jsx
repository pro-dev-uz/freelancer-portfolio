import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { getProcessSteps } from '../data/translations';
import SectionHead from './ui/SectionHead';
import { Reveal } from './ui/Reveal';

// 4 steps joined by a scroll-scrubbed progress line.
export default function Process() {
  const { lang, t } = useLanguage();
  const steps = getProcessSteps(lang);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.6'],
  });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="process" className="relative py-24 sm:py-28 lg:py-36 bg-bg-soft">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          index="03"
          tag={t('process.tag')}
          title={t('process.title1')}
          accent={t('process.title2')}
          sub={t('process.subtitle')}
        />

        <div ref={ref} className="relative">
          {/* desktop connector track */}
          <div className="absolute left-0 right-0 top-[26px] hidden h-px bg-line lg:block">
            <motion.div className="h-px origin-left bg-accent" style={{ scaleX: line }} />
          </div>
          {/* mobile connector track */}
          <div className="absolute bottom-4 left-[13px] top-2 w-px bg-line lg:hidden">
            <motion.div className="w-px origin-top bg-accent h-full" style={{ scaleY: line }} />
          </div>

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1} className="relative pl-12 lg:pl-0">
                {/* node */}
                <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-accent bg-bg lg:relative lg:left-auto lg:top-auto lg:mb-8 lg:h-[52px] lg:w-[52px]">
                  <span className="mono-label text-accent">{step.step}</span>
                </div>

                <span className="font-display pointer-events-none absolute -top-4 right-0 hidden text-[5rem] font-bold leading-none text-outline-faint lg:block">
                  {step.step}
                </span>

                <h3 className="font-display text-base font-bold uppercase tracking-tight text-ink sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{step.description}</p>
                <span className="mono-label mt-4 inline-block rounded-full bg-accent-soft px-3 py-1.5 text-accent">
                  {step.duration}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
