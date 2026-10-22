import { useParams, Link, Navigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { getPost, getPosts } from '../data/blog';
import { telegramUsername } from '../data/translations';
import { Reveal } from '../components/ui/Reveal';
import BlogCover from '../components/ui/BlogCover';

const UI = {
  uz: { back: 'Blogga qaytish', more: 'Boshqa maqolalar', ctaTitle: 'Loyiha boshlaymizmi?', ctaSub: "G'oyangiz bormi? Bepul maslahat va narx taklifi oling.", ctaBtn: 'Hoziroq yozing', read: "o'qish" },
  ru: { back: 'Назад в блог', more: 'Другие статьи', ctaTitle: 'Начнём проект?', ctaSub: 'Есть идея? Получите бесплатную консультацию и предложение цены.', ctaBtn: 'Напишите сейчас', read: 'читать' },
  en: { back: 'Back to blog', more: 'More articles', ctaTitle: "Let's start a project?", ctaSub: 'Have an idea? Get a free consultation and price quote.', ctaBtn: 'Write now', read: 'read' },
};

export default function BlogPost() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const ui = UI[lang] || UI.uz;
  const post = getPost(slug, lang);

  if (!post) return <Navigate to="/blog" replace />;

  const others = getPosts(lang).filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="relative pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32">
      <SEOHead title={`${post.title} | DevPro`} description={post.excerpt} path={`/blog/${post.slug}`} />
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        {/* back */}
        <Reveal>
          <Link to="/blog" data-cursor className="mono-label inline-flex items-center gap-2 text-muted hover:text-accent">
            ← {ui.back}
          </Link>
        </Reveal>

        {/* hero cover */}
        <Reveal delay={0.05} className="mt-6">
          <div className="relative h-44 overflow-hidden rounded-2xl sm:h-56">
            <BlogCover grad={post.grad} seed={post.slug.length} className="absolute inset-0 h-full w-full" />
            <post.icon className="absolute right-5 top-5 h-9 w-9 text-white/90" />
          </div>
        </Reveal>

        {/* header */}
        <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="mono-label hairline rounded-full px-2.5 py-1 text-muted">
              {tag}
            </span>
          ))}
          <span className="mono-label text-muted">{post.date} · {post.read} {ui.read}</span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="font-display mt-5 text-[clamp(1.8rem,5vw,3rem)] font-bold leading-[1.1] tracking-tight text-ink">
            {post.title}
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{post.excerpt}</p>
        </Reveal>

        <div className="my-10 h-px w-full bg-line" />

        {/* body */}
        <div className="space-y-10">
          {post.body.map((block, i) => (
            <Reveal key={i} delay={0.05}>
              <h2 className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">{block.h}</h2>
              <div className="mt-4 space-y-4">
                {block.p.map((para, j) => (
                  <p key={j} className="text-sm leading-relaxed text-muted sm:text-base">{para}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.1} className="mt-14">
          <div className="rounded-3xl hairline bg-card p-7 text-center sm:p-10">
            <h3 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">{ui.ctaTitle}</h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted">{ui.ctaSub}</p>
            <a
              href={`https://t.me/${telegramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="mono-label text-white">{ui.ctaBtn}</span>
              <span className="text-white">↗</span>
            </a>
          </div>
        </Reveal>

        {/* more posts */}
        <div className="mt-16">
          <p className="mono-label mb-6 text-muted">— {ui.more} —</p>
          <div className="grid gap-5 sm:grid-cols-2">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                data-cursor
                className="group flex items-start gap-4 rounded-2xl hairline bg-card p-5 transition-transform duration-500 hover:-translate-y-1"
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${p.color}`}>
                  <p.icon className="h-5 w-5 text-white" />
                </span>
                <span>
                  <span className="font-display block text-sm font-bold leading-snug text-ink">{p.title}</span>
                  <span className="mono-label mt-1.5 block text-accent">{p.read} {ui.read} →</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
