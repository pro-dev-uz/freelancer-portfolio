import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getProjects } from '../data/translations';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { lang, t } = useLanguage();
  const projects = getProjects(lang);

  return (
    <section id="projects" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[60vw] max-w-[500px] aspect-square bg-accent/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-light text-sm font-semibold tracking-wider uppercase">
            {t('projects.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            {t('projects.title1')} <span className="text-gradient">{t('projects.title2')}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
          {projects.map((project, i) => {
            const isBottom = i >= 3;
            const isFirstBottom = i === 3;
            const colClass = isBottom
              ? `lg:col-span-2${isFirstBottom ? ' lg:col-start-2' : ''}`
              : 'lg:col-span-2';
            return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group glass rounded-2xl sm:rounded-3xl overflow-hidden card-hover ${colClass}`}
            >
              <div className={`h-32 sm:h-40 bg-gradient-to-br ${project.color} p-4 sm:p-6 flex items-end relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 right-4 w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500">
                  <project.icon className="w-10 h-10 text-white gradient-keep-white" />
                </div>
                <h3 className="relative text-lg font-bold text-white z-10 gradient-keep-white">{project.title}</h3>
              </div>

              <div className="p-4 sm:p-6">
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary-light rounded-lg border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary-light text-sm font-medium hover:gap-3 transition-all"
                  >
                    {t('projects.order_similar')}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-xs font-medium transition-colors border border-white/10 hover:border-white/30 rounded-lg px-3 py-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {t('projects.view')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
