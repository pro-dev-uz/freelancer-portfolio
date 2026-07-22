import { useState } from 'react';
import { Send, MessageCircle, Clock, Shield, CheckCircle, Copy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { telegramUsername, telegramBotUrl } from '../data/translations';
import { RevealLines, Reveal } from './ui/Reveal';
import Magnetic from './ui/Magnetic';
import Marquee from './ui/Marquee';

// Grand finale — full ink inversion. The site flips to its negative.
export default function Contact() {
  const [copiedTg, setCopiedTg] = useState(false);
  const { t } = useLanguage();

  const copyTelegram = () => {
    navigator.clipboard.writeText(`@${telegramUsername}`);
    setCopiedTg(true);
    setTimeout(() => setCopiedTg(false), 2000);
  };

  const whyItems = [
    { icon: Clock, title: t('contact.why1_title'), desc: t('contact.why1_desc') },
    { icon: Shield, title: t('contact.why2_title'), desc: t('contact.why2_desc') },
    { icon: MessageCircle, title: t('contact.why3_title'), desc: t('contact.why3_desc') },
    { icon: CheckCircle, title: t('contact.why4_title'), desc: t('contact.why4_desc') },
  ];

  return (
    <section id="contact" className="ink-panel relative overflow-hidden pt-24 sm:pt-28 lg:pt-36">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* header */}
        <div className="text-center">
          <Reveal className="mb-6 flex items-center justify-center gap-3">
            <span className="mono-label text-accent">07</span>
            <span className="h-px w-10 bg-invert-line" />
            <span className="mono-label text-invert-muted">{t('contact.tag')}</span>
          </Reveal>

          <RevealLines
            as="h2"
            lines={[t('contact.title1'), t('contact.title2')]}
            className="font-display font-bold uppercase leading-[1.02] tracking-tight text-[clamp(2.2rem,7.5vw,5.5rem)]"
          />

          <Reveal delay={0.25}>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-invert-muted sm:text-base">
              {t('contact.subtitle')}
            </p>
          </Reveal>

          {/* main CTA */}
          <Reveal delay={0.35} className="mt-10">
            <Magnetic strength={0.25}>
              <a
                href={`https://t.me/${telegramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                className="group inline-flex items-center gap-4 rounded-full bg-accent px-10 py-5 transition-transform duration-300 hover:scale-[1.04] sm:px-12 sm:py-6"
              >
                <Send className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-12" />
                <span className="font-display text-sm font-bold uppercase tracking-wide text-white sm:text-base">
                  {t('contact.main_cta')}
                </span>
                <span className="text-white transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>
            </Magnetic>
          </Reveal>

          {/* copy username */}
          <Reveal delay={0.45} className="mt-8">
            <button
              onClick={copyTelegram}
              className="group inline-flex items-center gap-3 rounded-full border border-invert-line px-5 py-2.5 transition-colors duration-300 hover:border-accent"
              data-cursor
            >
              {copiedTg ? (
                <>
                  <CheckCircle className="h-3.5 w-3.5 text-accent" />
                  <span className="mono-label text-accent">{t('contact.copied')}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-invert-muted group-hover:text-accent" />
                  <span className="mono-label text-invert-muted group-hover:text-accent">
                    @{telegramUsername}
                  </span>
                </>
              )}
            </button>
          </Reveal>
        </div>

        {/* contact channels */}
        <div className="mx-auto mt-16 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-invert-line sm:grid-cols-2">
          {[
            {
              icon: MessageCircle,
              title: 'Telegram',
              desc: t('contact.tg_desc'),
              value: `@${telegramUsername}`,
              href: `https://t.me/${telegramUsername}`,
              label: t('contact.tg_action'),
            },
            {
              icon: Send,
              title: 'Telegram Bot',
              desc: t('contact.bot_desc'),
              value: t('contact.bot_value'),
              href: telegramBotUrl,
              label: t('contact.bot_action'),
            },
          ].map((m, i) => (
            <Reveal key={m.title} delay={0.1 + i * 0.1}>
              <a
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-7 transition-colors duration-500 hover:bg-accent ${
                  i === 0 ? 'sm:border-r sm:border-invert-line' : ''
                } max-sm:border-b max-sm:border-invert-line`}
                data-cursor
              >
                <div className="flex items-center justify-between">
                  <m.icon className="h-6 w-6 text-accent transition-colors duration-500 group-hover:text-white" />
                  <span className="mono-label text-invert-muted transition-colors duration-500 group-hover:text-white/70">
                    {m.label} →
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-bold uppercase text-invert-ink transition-colors duration-500 group-hover:text-white">
                  {m.title}
                </h3>
                <p className="mt-1 text-xs text-invert-muted transition-colors duration-500 group-hover:text-white/70">
                  {m.desc}
                </p>
                <p className="mono-label mt-3 text-accent transition-colors duration-500 group-hover:text-white">
                  {m.value}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        {/* why me — 4-col hairline grid */}
        <div className="mt-16">
          <Reveal className="mb-8 text-center">
            <span className="mono-label text-invert-muted">— {t('contact.why_title')} —</span>
          </Reveal>
          <div className="grid gap-8 pb-20 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10">
            {whyItems.map((item, i) => (
              <Reveal key={item.title} delay={0.1 + i * 0.08} className="text-center sm:text-left">
                <item.icon className="mx-auto h-5 w-5 text-accent sm:mx-0" />
                <h4 className="mt-4 text-sm font-bold text-invert-ink">{item.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-invert-muted">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* bottom marquee — rolling call to action */}
      <a
        href={`https://t.me/${telegramUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-t border-invert-line py-5 transition-colors duration-500 hover:bg-accent group"
        data-cursor
      >
        <Marquee duration={26}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="whitespace-nowrap px-6 font-display text-xl font-bold uppercase tracking-tight text-invert-ink transition-colors duration-500 group-hover:text-white sm:text-2xl">
                {t('contact.main_cta')}
              </span>
              <span className="text-accent transition-colors duration-500 group-hover:text-white">✦</span>
              <span className="mono-label whitespace-nowrap px-6 text-invert-muted transition-colors duration-500 group-hover:text-white/70">
                @{telegramUsername}
              </span>
              <span className="text-accent transition-colors duration-500 group-hover:text-white">✦</span>
            </span>
          ))}
        </Marquee>
      </a>
    </section>
  );
}
