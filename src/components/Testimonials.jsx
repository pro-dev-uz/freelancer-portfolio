import { useLanguage } from '../context/LanguageContext';
import { getTestimonials } from '../data/translations';
import SectionHead from './ui/SectionHead';
import Marquee from './ui/Marquee';

function QuoteCard({ item }) {
  return (
    <figure className="mx-3 flex w-[300px] shrink-0 flex-col justify-between rounded-2xl bg-card p-6 hairline sm:w-[360px]">
      <div>
        <div className="flex items-center justify-between">
          <span className="font-display text-3xl font-bold leading-none text-accent">”</span>
          <span className="mono-label text-accent">{'★'.repeat(item.rating)}</span>
        </div>
        <blockquote className="mt-3 text-sm leading-relaxed text-ink-soft">{item.text}</blockquote>
      </div>
      <figcaption className="mt-5 flex items-center gap-3 hairline-t pt-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft font-mono text-xs font-semibold text-accent">
          {item.name.charAt(0)}
        </span>
        <span>
          <span className="block text-xs font-bold text-ink">{item.name}</span>
          <span className="mono-label text-muted">{item.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

// Kinetic testimonial wall — two counter-scrolling marquee rows.
export default function Testimonials() {
  const { lang, t } = useLanguage();
  const testimonials = getTestimonials(lang);

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-28 lg:py-36 bg-bg-soft">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          index="05"
          tag={t('testimonials.tag')}
          title={t('testimonials.title1')}
          accent={t('testimonials.title2')}
          sub={t('testimonials.subtitle')}
          align="center"
        />
      </div>

      <Marquee duration={42} className="mb-6">
        {testimonials.map((item) => (
          <QuoteCard key={item.name} item={item} />
        ))}
      </Marquee>
      <Marquee duration={48} reverse className="hidden sm:block">
        {[...testimonials].reverse().map((item) => (
          <QuoteCard key={item.name} item={item} />
        ))}
      </Marquee>
    </section>
  );
}
