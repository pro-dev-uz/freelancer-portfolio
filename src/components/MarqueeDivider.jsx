import Marquee from './ui/Marquee';
import { useLanguage } from '../context/LanguageContext';
import { getHeroTypingWords } from '../data/translations';

// Kinetic divider — two counter-scrolling rows of outlined service names.
export default function MarqueeDivider() {
  const { lang } = useLanguage();
  const words = [...getHeroTypingWords(lang), 'AI Integratsiya', 'CRM', 'Mini App'];

  const Row = ({ outline }) => (
    <>
      {words.map((w, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`whitespace-nowrap px-6 font-display text-2xl font-bold uppercase tracking-tight sm:text-4xl ${
              outline ? 'text-outline-faint' : 'text-ink'
            }`}
          >
            {w}
          </span>
          <span className="text-accent">✦</span>
        </span>
      ))}
    </>
  );

  return (
    <div className="hairline-t hairline-b relative overflow-hidden py-6 sm:py-8">
      <Marquee duration={36}>
        <Row outline={false} />
      </Marquee>
      <div className="h-4 sm:h-5" />
      <Marquee duration={30} reverse>
        <Row outline />
      </Marquee>
    </div>
  );
}
