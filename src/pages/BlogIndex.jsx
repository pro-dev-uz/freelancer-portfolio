import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { getPosts } from '../data/blog';
import { RevealLines, Reveal } from '../components/ui/Reveal';

const UI = {
  uz: { tag: 'Blog', title: 'Foydali', accent: 'Maqolalar', sub: "Biznesingiz uchun web, bot va dizayn bo'yicha amaliy maslahatlar.", read: "o'qish", t1: "DevPro Blog — Web, Bot va Biznes bo'yicha maslahatlar", d1: "Telegram bot va web sayt narxlari, muddatlar, biznes uchun amaliy maslahatlar — DevPro jamoasidan." },
  ru: { tag: 'Блог', title: 'Полезные', accent: 'Статьи', sub: 'Практические советы по вебу, ботам и дизайну для вашего бизнеса.', read: 'читать', t1: 'Блог DevPro — советы по вебу, ботам и бизнесу', d1: 'Цены на Telegram ботов и сайты, сроки, практические советы для бизнеса — от команды DevPro.' },
  en: { tag: 'Blog', title: 'Useful', accent: 'Articles', sub: 'Practical advice on web, bots and design for your business.', read: 'read', t1: 'DevPro Blog — Web, Bot and Business tips', d1: 'Telegram bot and website prices, timelines, practical business advice — from the DevPro team.' },
};

export default function BlogIndex() {
  const { lang } = useLanguage();
  const ui = UI[lang] || UI.uz;
  const posts = getPosts(lang);

  return (
    <section className="relative pt-32 pb-24 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32">
      <SEOHead title={ui.t1} description={ui.d1} path="/blog" />
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* header */}
        <div className="mb-14 sm:mb-20">
          <Reveal className="flex items-center gap-3">
            <span className="mono-label text-accent">★</span>
            <span className="h-px w-10 origin-left bg-line-strong" />
            <span className="mono-label text-muted">{ui.tag}</span>
          </Reveal>
          <RevealLines
            as="h1"
            lines={[ui.title, ui.accent]}
            delay={0.1}
            className="font-display font-bold uppercase leading-[1.06] tracking-tight mt-5 text-[clamp(2.2rem,6vw,4.5rem)]"
          />
          <Reveal delay={0.3} className="mt-5 max-w-xl">
            <p className="text-sm sm:text-base leading-relaxed text-muted">{ui.sub}</p>
          </Reveal>
        </div>

        {/* post grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link
                to={`/blog/${post.slug}`}
                data-cursor
                className="group flex h-full flex-col overflow-hidden rounded-2xl hairline bg-card transition-transform duration-500 hover:-translate-y-1"
              >
                <div className={`relative h-28 bg-gradient-to-br ${post.color}`}>
                  <post.icon className="absolute right-4 top-4 h-7 w-7 text-white/85 transition-transform duration-500 group-hover:scale-110" />
                  <span className="mono-label absolute bottom-3 left-4 text-white/85">{post.date}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="mono-label hairline rounded-full px-2.5 py-1 text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-display text-base font-bold leading-snug tracking-tight text-ink">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="mono-label mt-4 inline-flex items-center gap-1.5 text-accent">
                    {post.read} · {ui.read} →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
