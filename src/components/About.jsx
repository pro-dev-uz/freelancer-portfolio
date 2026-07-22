import { motion } from 'framer-motion';
import { CheckCircle2, Award, Coffee, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { skills } from '../data/translations';
import SectionHead from './ui/SectionHead';
import { Reveal } from './ui/Reveal';
import { EASE, VIEWPORT } from '../lib/motion';

export default function About() {
  const { t } = useLanguage();

  const features = [
    { icon: Rocket, title: t('about.feat1_title'), desc: t('about.feat1_desc') },
    { icon: Award, title: t('about.feat2_title'), desc: t('about.feat2_desc') },
    { icon: Coffee, title: t('about.feat3_title'), desc: t('about.feat3_desc') },
    { icon: CheckCircle2, title: t('about.feat4_title'), desc: t('about.feat4_desc') },
  ];

  const specs = [
    ['LOCATION', 'UZBEKISTAN'],
    ['EXPERIENCE', '3+ YRS'],
    ['FOCUS', 'BOT / WEB / ANDROID'],
    ['RESPONSE', '< 1 HOUR'],
  ];

  return (
    <section id="about" className="relative py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — sticky heading + spec sheet */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHead
                index="01"
                tag={t('about.tag')}
                title={t('about.title1')}
                accent={t('about.title2')}
              />

              {/* datasheet */}
              <Reveal delay={0.2} className="hairline rounded-2xl">
                <div className="p-6">
                  <p className="mono-label mb-4 text-accent">DEVPRO — SPEC SHEET</p>
                  {specs.map(([k, v], i) => (
                    <div
                      key={k}
                      className={`flex items-center justify-between py-3 ${
                        i > 0 ? 'hairline-t' : ''
                      }`}
                    >
                      <span className="mono-label text-muted">{k}</span>
                      <span className="mono-label text-ink">{v}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right — narrative, features, skills */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg leading-relaxed text-ink-soft sm:text-xl lg:text-2xl">
                {t('about.p1')}{' '}
                <span className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4">
                  {t('about.p1_tg')}
                </span>
                ,{' '}
                <span className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4">
                  {t('about.p1_web')}
                </span>{' '}
                {t('about.p1_end').startsWith('.') ? '' : 'va '}
                <span className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4">
                  {t('about.p1_and')}
                </span>{' '}
                {t('about.p1_end')}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {t('about.p2')}
              </p>
            </Reveal>

            {/* features — hairline grid, no cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2">
              {features.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={0.1 + i * 0.08}
                  className={`group flex items-start gap-4 p-6 hairline-t ${
                    i % 2 === 1 ? 'sm:border-l sm:border-line' : ''
                  }`}
                >
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-muted transition-colors duration-300 group-hover:text-accent" />
                  <div>
                    <h4 className="text-sm font-bold text-ink">{item.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* skills — mono list with drawing lines */}
            <div className="mt-14">
              <Reveal className="mb-6 flex items-center gap-3">
                <span className="mono-label text-accent">{'>'}</span>
                <span className="mono-label text-ink">{t('about.skills_title')}</span>
              </Reveal>

              <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-baseline justify-between">
                      <span className="font-mono text-xs font-medium text-ink-soft sm:text-sm">
                        {skill.name}
                      </span>
                      <span className="mono-label text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-px w-full bg-line">
                      <motion.div
                        className="h-px origin-left bg-accent"
                        style={{ width: `${skill.level}%` }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={VIEWPORT}
                        transition={{ duration: 1.1, ease: EASE, delay: 0.15 + i * 0.06 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
