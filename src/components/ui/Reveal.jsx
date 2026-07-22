import { motion } from 'framer-motion';
import { EASE, VIEWPORT } from '../../lib/motion';

// Masked text reveal — each child line slides up from an overflow mask.
// Usage: <RevealLines lines={['One', 'Two']} className="..." lineClassName="..." />
export function RevealLines({ lines, as = 'div', className = '', lineClassName = '', delay = 0, ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      {...rest}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
          <motion.span
            className={`block will-change-transform ${lineClassName}`}
            variants={{
              hidden: { y: '112%' },
              visible: {
                y: '0%',
                transition: { duration: 0.9, ease: EASE, delay: delay + i * 0.1 },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

// Block fade-rise on scroll into view.
export function Reveal({ children, delay = 0, y = 26, className = '', ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
