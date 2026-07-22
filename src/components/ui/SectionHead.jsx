import { motion } from 'framer-motion';
import { RevealLines, Reveal } from './Reveal';
import { EASE, VIEWPORT } from '../../lib/motion';

// Editorial section header: mono index + tag, display title, optional sub.
// align: 'left' | 'center'
export default function SectionHead({ index, tag, title, accent, sub, align = 'left', invert = false }) {
  const centered = align === 'center';
  const muted = invert ? 'text-invert-muted' : 'text-muted';
  const lineColor = invert ? 'bg-invert-line' : 'bg-line-strong';

  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 sm:mb-16 lg:mb-20`}>
      <Reveal className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        <span className={`mono-label text-accent`}>{index}</span>
        <motion.span
          className={`h-px w-10 origin-left ${lineColor}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        />
        <span className={`mono-label ${muted}`}>{tag}</span>
      </Reveal>

      <RevealLines
        as="h2"
        lines={[title, accent].filter(Boolean)}
        delay={0.1}
        className="font-display font-bold uppercase leading-[1.06] tracking-tight mt-5 text-[clamp(1.9rem,5.2vw,3.9rem)]"
        lineClassName=""
      />

      {sub && (
        <Reveal delay={0.3} className={`mt-5 max-w-xl ${centered ? 'mx-auto' : ''}`}>
          <p className={`text-sm sm:text-base leading-relaxed ${muted}`}>{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
