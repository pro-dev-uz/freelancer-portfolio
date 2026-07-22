import { useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getProjects } from '../data/translations';
import SectionHead from './ui/SectionHead';
import { Reveal } from './ui/Reveal';
import { EASE } from '../lib/motion';

// Editorial project index — rows with a floating preview card that
// follows the cursor on desktop; self-contained cards on mobile.
export default function Projects() {
  const { lang, t } = useLanguage();
  const projects = getProjects(lang);
  const [hovered, setHovered] = useState(null);
  const containerRef = useRef(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 160, damping: 22, mass: 0.5 });
  const sy = useSpring(py, { stiffness: 160, damping: 22, mass: 0.5 });

  const onMove = (e) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (!r) return;
    px.set(e.clientX - r.left);
    py.set(e.clientY - r.top);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <SectionHead
          index="04"
          tag={t('projects.tag')}
          title={t('projects.title1')}
          accent={t('projects.title2')}
          sub={t('projects.subtitle')}
        />

        {/* ── Desktop: index rows + floating preview ── */}
        <div
          ref={containerRef}
          onMouseMove={onMove}
          onMouseLeave={() => setHovered(null)}
          className="relative hidden lg:block hairline-b"
        >
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.04}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(i)}
                className="group relative flex items-center gap-8 px-2 py-7 hairline-t"
                data-cursor
              >
                <span className="mono-label w-8 text-muted transition-colors duration-300 group-hover:text-accent">
                  0{i + 1}
                </span>
                <h3 className="flex-1 font-display text-xl font-bold uppercase tracking-tight text-ink transition-transform duration-500 group-hover:translate-x-3 xl:text-2xl">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="mono-label hairline rounded-full px-3 py-1 text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent">
                  ↗
                </span>
              </a>
            </Reveal>
          ))}

          {/* floating preview card */}
          <AnimatePresence>
            {hovered !== null && (() => {
              const HoverIcon = projects[hovered].icon;
              return (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.85, rotate: 3 }}
                transition={{ duration: 0.35, ease: EASE }}
                style={{ x: sx, y: sy }}
                className="pointer-events-none absolute left-0 top-0 z-20 -translate-x-1/2 -translate-y-[110%] w-[340px]"
              >
                <div className="overflow-hidden rounded-2xl bg-card shadow-2xl shadow-black/20 hairline">
                  <div className={`h-36 bg-gradient-to-br ${projects[hovered].color} relative`}>
                    <HoverIcon className="absolute right-4 top-4 h-8 w-8 text-white/80" />
                    <span className="mono-label absolute bottom-3 left-4 text-white/80">
                      {projects[hovered].tags[0]}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs leading-relaxed text-muted line-clamp-3">
                      {projects[hovered].description}
                    </p>
                  </div>
                </div>
              </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>

        {/* ── Mobile: minimal cards ── */}
        <div className="space-y-5 lg:hidden">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <div className="overflow-hidden rounded-2xl hairline bg-card">
                <div className={`relative h-24 bg-gradient-to-br ${project.color}`}>
                  <project.icon className="absolute right-4 top-4 h-7 w-7 text-white/85" />
                  <span className="mono-label absolute bottom-3 left-4 text-white/85">0{i + 1}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-sm font-bold uppercase tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="mono-label hairline rounded-full px-2.5 py-1 text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between hairline-t pt-4">
                    <a href="#contact" className="mono-label text-accent">
                      {t('projects.order_similar')} →
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mono-label inline-flex items-center gap-1.5 text-ink"
                    >
                      {t('projects.view')} <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* desktop: order-similar hint */}
        <Reveal delay={0.2} className="mt-10 hidden text-center lg:block">
          <a href="#contact" className="u-draw mono-label inline-flex items-center gap-2 text-muted hover:text-accent">
            {t('projects.order_similar')} →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
