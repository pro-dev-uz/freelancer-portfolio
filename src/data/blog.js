import { Bot, Globe, GitCompareArrows } from 'lucide-react';

// ─── Blog posts ──────────────────────────────────────────────────
// Each post: shared meta (slug, date, icon, color, tags) + per-lang
// { title, excerpt, read, body } where body is a list of {h, p:[...]}.
// Written to target real Uzbek Google searches (pricing, comparisons).

const posts = [
  {
    slug: 'telegram-bot-yaratish-narxi',
    date: '2026-10-21',
    icon: Bot,
    color: 'from-blue-500 to-cyan-400',
    tags: ['Telegram Bot', 'Narx', 'Biznes'],
    uz: {
      title: 'Telegram bot yaratish qancha turadi? (2026 narxlar)',
      excerpt: "Telegram bot narxiga nima ta'sir qiladi, oddiy va murakkab botlar farqi, O'zbekistondagi real narxlar va qanday tejash mumkinligi.",
      read: '5 daqiqa',
      body: [
        { h: 'Narx nimaga bog‘liq?', p: [
          "Telegram bot narxi birinchi navbatda uning murakkabligiga bog'liq. Oddiy ma'lumot beruvchi bot bilan to'lov tizimi, admin panel va ma'lumotlar bazasi ulangan bot narxi o'rtasida katta farq bor.",
          "Narxga ta'sir qiluvchi asosiy omillar: funksiyalar soni, to'lov integratsiyasi (Click, Payme, Telegram Stars), admin paneli, ma'lumotlar bazasi hajmi va keyingi texnik qo'llab-quvvatlash.",
        ]},
        { h: 'Oddiy vs murakkab bot', p: [
          "Oddiy bot (avto-javob, menyu, ariza qabul qilish) — eng arzon variant, odatda bir necha kunda tayyor bo'ladi. Bunday botlar kichik bizneslar uchun mijoz bilan bog'lanishni avtomatlashtiradi.",
          "Murakkab bot — onlayn do'kon, CRM, to'lov qabul qilish, haydovchi/kuryer tizimi, Mini App. Bunday loyihalar ko'proq vaqt va resurs talab qiladi, lekin biznesingizni to'liq avtomatlashtiradi.",
        ]},
        { h: 'O‘zbekistonda real narxlar', p: [
          "Oddiy botlar $50 dan boshlanadi, murakkab va to'liq avtomatlashtirilgan tizimlar esa loyiha hajmiga qarab kelishiladi. Aniq narxni faqat loyiha talablarini ko'rib chiqgandan keyin aytish mumkin.",
          "Shuning uchun biz har doim bepul maslahat beramiz — g'oyangizni aytib bering, biz aniq narx va muddatni taklif qilamiz.",
        ]},
        { h: 'Qanday tejash mumkin?', p: [
          "Eng katta tejash — kerakli funksiyalarni aniq belgilash. Ko'pincha mijoz hamma narsani birdan xohlaydi, lekin amalda 20% funksiya 80% qiymatni beradi. Botni bosqichma-bosqich qurish arzonroq va xavfsizroq.",
          "Ikkinchi maslahat — tayyor yechimlardan foydalanish. Ko'p vazifalar uchun g'ildirakni qaytadan ixtiro qilish shart emas.",
        ]},
      ],
    },
    ru: {
      title: 'Сколько стоит создать Telegram бота? (цены 2026)',
      excerpt: 'Что влияет на цену Telegram бота, разница между простыми и сложными ботами, реальные цены в Узбекистане и как сэкономить.',
      read: '5 минут',
      body: [
        { h: 'От чего зависит цена?', p: [
          'Цена Telegram бота прежде всего зависит от его сложности. Между простым информационным ботом и ботом с платёжной системой, админ-панелью и базой данных — большая разница в цене.',
          'Основные факторы: количество функций, интеграция оплаты (Click, Payme, Telegram Stars), админ-панель, объём базы данных и дальнейшая техподдержка.',
        ]},
        { h: 'Простой vs сложный бот', p: [
          'Простой бот (авто-ответы, меню, приём заявок) — самый доступный вариант, обычно готов за несколько дней. Такие боты автоматизируют связь с клиентами для малого бизнеса.',
          'Сложный бот — интернет-магазин, CRM, приём оплаты, система водитель/курьер, Mini App. Такие проекты требуют больше времени, но полностью автоматизируют бизнес.',
        ]},
        { h: 'Реальные цены в Узбекистане', p: [
          'Простые боты — от $50, сложные и полностью автоматизированные системы — по договорённости в зависимости от объёма. Точную цену можно назвать только после изучения требований.',
          'Поэтому мы всегда даём бесплатную консультацию — расскажите идею, и мы предложим точную цену и сроки.',
        ]},
        { h: 'Как сэкономить?', p: [
          'Главная экономия — чётко определить нужные функции. Часто клиент хочет всё сразу, но на практике 20% функций дают 80% ценности. Поэтапная разработка дешевле и безопаснее.',
          'Второй совет — использовать готовые решения. Для многих задач не нужно изобретать велосипед.',
        ]},
      ],
    },
    en: {
      title: 'How much does a Telegram bot cost? (2026 prices)',
      excerpt: 'What affects Telegram bot pricing, the difference between simple and complex bots, real prices in Uzbekistan, and how to save.',
      read: '5 min',
      body: [
        { h: 'What affects the price?', p: [
          'A Telegram bot’s price mainly depends on its complexity. There’s a big difference between a simple info bot and one with payments, an admin panel, and a database.',
          'Key factors: number of features, payment integration (Click, Payme, Telegram Stars), admin panel, database size, and ongoing support.',
        ]},
        { h: 'Simple vs complex bot', p: [
          'A simple bot (auto-replies, menu, order intake) is the most affordable option, usually ready in a few days. These automate customer contact for small businesses.',
          'A complex bot — online store, CRM, payments, driver/courier system, Mini App. These projects take more time but fully automate your business.',
        ]},
        { h: 'Real prices in Uzbekistan', p: [
          'Simple bots start from $50; complex, fully automated systems are negotiable depending on scope. An exact price can only be given after reviewing the requirements.',
          'That’s why we always offer a free consultation — tell us your idea and we’ll propose an exact price and timeline.',
        ]},
        { h: 'How to save?', p: [
          'The biggest saving is defining the needed features precisely. Clients often want everything at once, but in practice 20% of features deliver 80% of the value. Building in stages is cheaper and safer.',
          'Second tip — use ready-made solutions. For many tasks there’s no need to reinvent the wheel.',
        ]},
      ],
    },
  },

  {
    slug: 'web-sayt-yasash-narx-muddat',
    date: '2026-10-20',
    icon: Globe,
    color: 'from-violet-500 to-purple-400',
    tags: ['Web Sayt', 'Narx', 'SEO'],
    uz: {
      title: 'Web sayt yasash: narx, muddat va bosqichlar',
      excerpt: "Landing, korporativ sayt yoki onlayn do'kon — qaysi biri sizga kerak, qancha vaqt ketadi va nega arzon shablon saytlardan qochish kerak.",
      read: '6 daqiqa',
      body: [
        { h: 'Qanday sayt kerak?', p: [
          "Birinchi savol — maqsad nima. Bir sahifali landing — bitta mahsulot yoki xizmatni sotish uchun. Korporativ sayt — kompaniya haqida to'liq ma'lumot, xizmatlar, bog'lanish. Onlayn do'kon — mahsulot katalogi, savat va to'lov.",
          "Noto'g'ri tur tanlash — pulni behuda sarflash. Shuning uchun biz avval biznesingizni tushunib, keyin tur tavsiya qilamiz.",
        ]},
        { h: 'Muddat qancha?', p: [
          "Oddiy landing — 2-4 kun. Ko'p sahifali korporativ sayt — 1-2 hafta. To'liq onlayn do'kon admin panel bilan — 2-4 hafta. Muddat dizayn murakkabligi va funksiyalarga bog'liq.",
          "Tezlik sifatdan ustun qo'yilmasligi kerak — shoshilib qilingan sayt keyinroq ko'proq xarajat keltiradi.",
        ]},
        { h: 'Shablon saytlardan nega qochish kerak?', p: [
          "Arzon shablon saytlar (masalan tayyor konstruktorlar) tez ko'rinadi, lekin sekin yuklanadi, SEO zaif, va raqobatchilaringizdan ajralib turmaydi. Google ham bunday saytlarni past baholaydi.",
          "Maxsus yozilgan sayt — tez, SEO-ga tayyor, mobil qurilmalarda mukammal va brendingizga mos. Uzoq muddatda bu investitsiya o'zini oqlaydi.",
        ]},
        { h: 'SEO — saytingiz topilishi uchun', p: [
          "Chiroyli sayt yetarli emas — uni Google'da topish kerak. To'g'ri sarlavhalar, meta-teglar, tez yuklash va mobil moslik — bularning barchasi saytni qidiruvda yuqoriga ko'taradi.",
          "Biz har bir saytni SEO asoslari bilan quramiz, shunda mijozlar sizni o'zlari topadi.",
        ]},
      ],
    },
    ru: {
      title: 'Создание сайта: цена, сроки и этапы',
      excerpt: 'Лендинг, корпоративный сайт или интернет-магазин — что вам нужно, сколько времени займёт и почему стоит избегать дешёвых шаблонов.',
      read: '6 минут',
      body: [
        { h: 'Какой сайт нужен?', p: [
          'Первый вопрос — цель. Одностраничный лендинг — для продажи одного продукта или услуги. Корпоративный сайт — полная информация о компании, услуги, контакты. Интернет-магазин — каталог, корзина и оплата.',
          'Неправильный выбор типа — пустая трата денег. Поэтому мы сначала понимаем ваш бизнес, а потом рекомендуем тип.',
        ]},
        { h: 'Сколько времени?', p: [
          'Простой лендинг — 2-4 дня. Многостраничный корпоративный сайт — 1-2 недели. Полноценный интернет-магазин с админкой — 2-4 недели. Срок зависит от сложности дизайна и функций.',
          'Скорость не должна быть в ущерб качеству — спешно сделанный сайт потом обходится дороже.',
        ]},
        { h: 'Почему избегать шаблонов?', p: [
          'Дешёвые шаблонные сайты (готовые конструкторы) выглядят быстро, но медленно грузятся, слабы в SEO и не выделяются среди конкурентов. Google тоже оценивает их ниже.',
          'Сайт, написанный под вас — быстрый, готовый к SEO, идеальный на мобильных и под ваш бренд. В долгосрочной перспективе это окупается.',
        ]},
        { h: 'SEO — чтобы вас находили', p: [
          'Красивого сайта мало — его нужно находить в Google. Правильные заголовки, мета-теги, быстрая загрузка и мобильность поднимают сайт в поиске.',
          'Мы строим каждый сайт с основами SEO, чтобы клиенты находили вас сами.',
        ]},
      ],
    },
    en: {
      title: 'Building a website: price, timeline and stages',
      excerpt: 'Landing, corporate site or online store — which one you need, how long it takes, and why to avoid cheap template sites.',
      read: '6 min',
      body: [
        { h: 'Which site do you need?', p: [
          'The first question is the goal. A one-page landing — to sell a single product or service. A corporate site — full company info, services, contact. An online store — catalog, cart and payment.',
          'Choosing the wrong type wastes money. So we understand your business first, then recommend the type.',
        ]},
        { h: 'How long does it take?', p: [
          'A simple landing — 2-4 days. A multi-page corporate site — 1-2 weeks. A full online store with an admin panel — 2-4 weeks. The timeline depends on design complexity and features.',
          'Speed should not come at the cost of quality — a rushed site costs more later.',
        ]},
        { h: 'Why avoid template sites?', p: [
          'Cheap template sites (ready-made builders) look quick but load slowly, are weak at SEO, and don’t stand out from competitors. Google also ranks them lower.',
          'A custom-built site is fast, SEO-ready, perfect on mobile and matched to your brand. Long term, it pays off.',
        ]},
        { h: 'SEO — so you get found', p: [
          'A beautiful site isn’t enough — it needs to be found on Google. Proper titles, meta tags, fast loading and mobile-friendliness push a site up in search.',
          'We build every site with SEO fundamentals so customers find you themselves.',
        ]},
      ],
    },
  },

  {
    slug: 'telegram-bot-yoki-web-sayt',
    date: '2026-10-19',
    icon: GitCompareArrows,
    color: 'from-emerald-500 to-teal-400',
    tags: ['Biznes', 'Maslahat', 'Strategiya'],
    uz: {
      title: 'Biznesga Telegram bot kerakmi yoki web sayt?',
      excerpt: "Ikkalasining farqi, qaysi biri qaysi biznesga mos va nega ko'pincha ikkalasi birga eng yaxshi natija beradi.",
      read: '4 daqiqa',
      body: [
        { h: 'Asosiy farq', p: [
          "Web sayt — bu sizning doimiy manzilingiz internetda. Google'da topiladi, brendingizni ko'rsatadi, ishonch uyg'otadi. Telegram bot — bu tezkor aloqa va avtomatlashtirish vositasi, foydalanuvchi allaqachon Telegram'da bo'lganda ishlaydi.",
        ]},
        { h: 'Qaysi biri qaysi biznesga?', p: [
          "Agar sizni Google'dan izlashsa (xizmatlar, klinika, kurslar, restoran) — avvalo web sayt kerak. Agar biznesingiz tez buyurtma va takroriy mijozlarga asoslansa (yetkazib berish, onlayn do'kon, xizmat buyurtmasi) — Telegram bot kuchliroq.",
          "Ko'p holatda javob — ikkalasi ham, lekin to'g'ri tartibda boshlash muhim.",
        ]},
        { h: 'Nega ikkalasi birga?', p: [
          "Eng kuchli kombinatsiya: web sayt mijozni jalb qiladi va ishonch beradi, bot esa buyurtmani qabul qilib, jarayonni avtomatlashtiradi. Sayt + bot birga ishlaganda mijoz yo'qolmaydi.",
          "Masalan, onlayn do'kon sayti mahsulotni ko'rsatadi, bot esa buyurtma va to'lovni boshqaradi.",
        ]},
        { h: 'Qaysidan boshlash kerak?', p: [
          "Byudjet cheklangan bo'lsa, biznesingizga eng ko'p qiymat beradiganidan boshlang. Bepul maslahatda biz aynan sizning holatingizga mos strategiyani aytamiz — ortiqcha xarajatsiz.",
        ]},
      ],
    },
    ru: {
      title: 'Бизнесу нужен Telegram бот или сайт?',
      excerpt: 'Разница между ними, что какому бизнесу подходит, и почему чаще всего вместе они дают лучший результат.',
      read: '4 минуты',
      body: [
        { h: 'Главное отличие', p: [
          'Сайт — это ваш постоянный адрес в интернете. Его находят в Google, он показывает бренд, вызывает доверие. Telegram бот — инструмент быстрой связи и автоматизации, работает когда пользователь уже в Telegram.',
        ]},
        { h: 'Что какому бизнесу?', p: [
          'Если вас ищут в Google (услуги, клиника, курсы, ресторан) — сначала нужен сайт. Если бизнес основан на быстрых заказах и повторных клиентах (доставка, магазин, заказ услуг) — Telegram бот сильнее.',
          'Чаще всего ответ — оба, но важно начать в правильном порядке.',
        ]},
        { h: 'Почему вместе?', p: [
          'Сильнейшая комбинация: сайт привлекает клиента и даёт доверие, бот принимает заказ и автоматизирует процесс. Когда сайт и бот работают вместе, клиент не теряется.',
          'Например, сайт магазина показывает товар, а бот управляет заказом и оплатой.',
        ]},
        { h: 'С чего начать?', p: [
          'Если бюджет ограничен, начните с того, что даёт больше ценности вашему бизнесу. На бесплатной консультации мы подскажем стратегию именно под ваш случай — без лишних затрат.',
        ]},
      ],
    },
    en: {
      title: 'Does your business need a Telegram bot or a website?',
      excerpt: 'The difference between them, which suits which business, and why together they often deliver the best result.',
      read: '4 min',
      body: [
        { h: 'The key difference', p: [
          'A website is your permanent address online. It’s found on Google, shows your brand, builds trust. A Telegram bot is a tool for fast contact and automation, working when the user is already in Telegram.',
        ]},
        { h: 'Which suits which business?', p: [
          'If people search for you on Google (services, clinic, courses, restaurant) — you need a website first. If your business runs on fast orders and repeat customers (delivery, store, service orders) — a Telegram bot is stronger.',
          'Most often the answer is both, but starting in the right order matters.',
        ]},
        { h: 'Why both together?', p: [
          'The strongest combo: the website attracts the customer and builds trust, the bot takes the order and automates the process. When site and bot work together, the customer isn’t lost.',
          'For example, a store website shows the product, while the bot handles the order and payment.',
        ]},
        { h: 'Where to start?', p: [
          'If the budget is limited, start with what delivers the most value to your business. In a free consultation we’ll suggest a strategy for your exact case — without extra cost.',
        ]},
      ],
    },
  },
];

export const getPosts = (lang) =>
  posts.map((p) => ({ slug: p.slug, date: p.date, icon: p.icon, color: p.color, tags: p.tags, ...p[lang] }));

export const getPost = (slug, lang) => {
  const p = posts.find((x) => x.slug === slug);
  if (!p) return null;
  return { slug: p.slug, date: p.date, icon: p.icon, color: p.color, tags: p.tags, ...p[lang] };
};

export const allSlugs = posts.map((p) => p.slug);
