import {
  Bot, Globe, Smartphone, Star, Crown, ShoppingCart,
  MessageCircle, Send, BarChart3,
} from 'lucide-react';

// ─── Simple UI strings ───────────────────────────────────────────
export const strings = {
  uz: {
    // Navbar
    'nav.home': 'Bosh sahifa',
    'nav.about': 'Men haqimda',
    'nav.services': 'Xizmatlar',
    'nav.pricing': 'Narxlar',
    'nav.projects': 'Loyihalar',
    'nav.contact': 'Aloqa',
    'nav.cta': "Bog'lanish",

    // Hero
    'hero.badge': 'Freelance Developer',
    'hero.title1': "G'oyangizni",
    'hero.title2': 'Haqiqatga',
    'hero.title3': 'Aylantiraman',
    'hero.subtitle': 'Sizning biznesingizni keyingi bosqichga olib chiqaman — tez, sifatli va professional',
    'hero.cta1': 'Loyiha Buyurtma Qilish',
    'hero.cta2': 'Xizmatlarimiz',

    // About
    'about.tag': 'Men haqimda',
    'about.title1': 'Kim',
    'about.title2': 'Men?',
    'about.subtitle': 'Professional dasturchi va freelancer — zamonaviy texnologiyalar bilan sifatli yechimlar yarataman',
    'about.p1': "Men professional dasturchi sifatida 3 yildan ortiq tajribaga egaman. Asosan",
    'about.p1_tg': 'Telegram botlar',
    'about.p1_web': 'web ilovalar',
    'about.p1_and': 'Android ilovalar',
    'about.p1_end': "yaratish bo'yicha ixtisoslashganman.",
    'about.p2': "Har bir loyihaga individual yondashuv — sizning biznesingiz uchun eng yaxshi yechimni taklif qilaman. Sifat, tezkorlik va ishonchlilik — mening asosiy tamoyillarim.",
    'about.feat1_title': 'Tez Yetkazish',
    'about.feat1_desc': "Qisqa muddatlarda sifatli natija",
    'about.feat2_title': 'Sifat Kafolati',
    'about.feat2_desc': "Bepul tuzatish va qo'llab-quvvatlash",
    'about.feat3_title': '24/7 Aloqa',
    'about.feat3_desc': "Har doim bog'lanish mumkin",
    'about.feat4_title': 'Clean Code',
    'about.feat4_desc': 'Toza va kengaytiriladigan kod',
    'about.skills_title': "Texnik Ko'nikmalar",

    // Services
    'services.tag': 'Xizmatlar',
    'services.title1': 'Nima',
    'services.title2': 'Qila Olaman?',
    'services.subtitle': 'Sizning biznesingiz uchun zamonaviy va professional yechimlar',
    'services.detail': 'Batafsil',
    'services.extra_title': 'Boshqa xizmatlar ham kerakmi?',
    'services.extra_desc': "SEO optimizatsiya, UI/UX dizayn, API integratsiya, server sozlash va boshqa xizmatlar ham mavjud",
    'services.extra_cta': "Bog'lanish",

    // Pricing
    'pricing.tag': 'Narxlar',
    'pricing.title1': 'Hamyonbop',
    'pricing.title2': 'Narxlar',
    'pricing.subtitle': "Sifatli ish — arzon narxda. Barcha narxlar kelishiladi",
    'pricing.cta': 'Buyurtma Berish',
    'pricing.popular': 'Mashhur',
    'pricing.note': "* Barcha narxlar boshlang'ich. Aniq narx loyiha murakkabligiga bog'liq. Bepul maslahat oling!",

    // Process
    'process.tag': 'Ish jarayoni',
    'process.title1': 'Qanday',
    'process.title2': 'Ishlayman?',
    'process.subtitle': "Buyurtmadan topshirishgacha — tez va shaffof jarayon",
    'process.step_suffix': 'BOSQICH',

    // Projects
    'projects.tag': 'Portfolio',
    'projects.title1': "So'ngi",
    'projects.title2': 'Loyihalar',
    'projects.subtitle': 'Muvaffaqiyatli tugatilgan loyihalardan namunalar',
    'projects.order_similar': "Shunga o'xshash buyurtma",
    'projects.view': "Ko'rish",

    // Testimonials
    'testimonials.tag': 'Sharhlar',
    'testimonials.title1': 'Mijozlar',
    'testimonials.title2': 'Fikri',
    'testimonials.subtitle': 'Oldingi mijozlarimizning haqiqiy sharhlari',

    // FAQ
    'faq.tag': 'FAQ',
    'faq.title1': "Ko'p",
    'faq.title2': 'Beriladigan Savollar',

    // Contact
    'contact.tag': 'Aloqa',
    'contact.title1': 'Loyiha',
    'contact.title2': 'Boshlaylikmi?',
    'contact.subtitle': "G'oyangiz bormi? Menga yozing — bepul maslahat va narx taklifi olasiz",
    'contact.tg_desc': 'Eng tez aloqa usuli',
    'contact.bot_desc': 'Avtomatik buyurtma berish',
    'contact.bot_value': 'Buyurtma boti',
    'contact.tg_action': 'Yozish',
    'contact.bot_action': 'Boshlash',
    'contact.copy_tg': 'Telegram username nusxalash',
    'contact.copied': 'Nusxalandi',
    'contact.why_title': 'Nima uchun men?',
    'contact.why1_title': 'Tez Natija',
    'contact.why1_desc': "Buyurtmangiz tez va sifatli bajariladi. Oddiy loyihalar 1-3 kun, murakkablari 1-2 hafta.",
    'contact.why2_title': 'Xavfsizlik',
    'contact.why2_desc': "Barcha loyihalar xavfsizlik standartlariga mos ravishda yaratiladi. Ma'lumotlaringiz himoyada.",
    'contact.why3_title': 'Doimiy Aloqa',
    'contact.why3_desc': "Loyiha jarayonida doimo xabar berib turaman. Savollaringizga tezda javob olasiz.",
    'contact.why4_title': 'Bepul Tuzatish',
    'contact.why4_desc': "Loyiha topshirilgandan keyin 30 kun davomida bepul tuzatish va qo'llab-quvvatlash.",
    'contact.main_cta': 'Hoziroq Yozing!',

    // Footer
    'footer.rights': 'Barcha huquqlar himoyalangan.',
  },

  ru: {
    'nav.home': 'Главная',
    'nav.about': 'Обо мне',
    'nav.services': 'Услуги',
    'nav.pricing': 'Цены',
    'nav.projects': 'Проекты',
    'nav.contact': 'Контакты',
    'nav.cta': 'Связаться',

    'hero.badge': 'Freelance Developer',
    'hero.title1': 'Вашу идею',
    'hero.title2': 'воплощу в',
    'hero.title3': 'реальность',
    'hero.subtitle': 'Выведу ваш бизнес на новый уровень — быстро, качественно и профессионально',
    'hero.cta1': 'Заказать проект',
    'hero.cta2': 'Наши услуги',

    'about.tag': 'Обо мне',
    'about.title1': 'Кто',
    'about.title2': 'Я?',
    'about.subtitle': 'Профессиональный разработчик и фрилансер — создаю качественные решения с современными технологиями',
    'about.p1': 'Я профессиональный разработчик с опытом более 3 лет. Специализируюсь на создании',
    'about.p1_tg': 'Telegram ботов',
    'about.p1_web': 'веб-приложений',
    'about.p1_and': 'Android приложений',
    'about.p1_end': '.',
    'about.p2': 'Индивидуальный подход к каждому проекту — предложу лучшее решение для вашего бизнеса. Качество, скорость и надёжность — мои главные принципы.',
    'about.feat1_title': 'Быстрая доставка',
    'about.feat1_desc': 'Качественный результат в кратчайшие сроки',
    'about.feat2_title': 'Гарантия качества',
    'about.feat2_desc': 'Бесплатные правки и поддержка',
    'about.feat3_title': '24/7 Связь',
    'about.feat3_desc': 'Всегда на связи',
    'about.feat4_title': 'Clean Code',
    'about.feat4_desc': 'Чистый и масштабируемый код',
    'about.skills_title': 'Технические навыки',

    'services.tag': 'Услуги',
    'services.title1': 'Что я',
    'services.title2': 'умею?',
    'services.subtitle': 'Современные и профессиональные решения для вашего бизнеса',
    'services.detail': 'Подробнее',
    'services.extra_title': 'Нужны другие услуги?',
    'services.extra_desc': 'SEO оптимизация, UI/UX дизайн, API интеграция, настройка серверов и другие услуги',
    'services.extra_cta': 'Связаться',

    'pricing.tag': 'Цены',
    'pricing.title1': 'Доступные',
    'pricing.title2': 'Цены',
    'pricing.subtitle': 'Качественная работа — по доступной цене. Все цены договорные',
    'pricing.cta': 'Заказать',
    'pricing.popular': 'Популярный',
    'pricing.note': '* Все цены начальные. Точная цена зависит от сложности проекта. Получите бесплатную консультацию!',

    'process.tag': 'Процесс работы',
    'process.title1': 'Как я',
    'process.title2': 'работаю?',
    'process.subtitle': 'От заказа до сдачи — быстрый и прозрачный процесс',
    'process.step_suffix': 'ЭТАП',

    'projects.tag': 'Портфолио',
    'projects.title1': 'Последние',
    'projects.title2': 'Проекты',
    'projects.subtitle': 'Примеры успешно завершённых проектов',
    'projects.order_similar': 'Заказать похожий',
    'projects.view': 'Посмотреть',

    'testimonials.tag': 'Отзывы',
    'testimonials.title1': 'Мнение',
    'testimonials.title2': 'клиентов',
    'testimonials.subtitle': 'Реальные отзывы наших предыдущих клиентов',

    'faq.tag': 'FAQ',
    'faq.title1': 'Часто',
    'faq.title2': 'задаваемые вопросы',

    'contact.tag': 'Контакты',
    'contact.title1': 'Начнём',
    'contact.title2': 'проект?',
    'contact.subtitle': 'Есть идея? Напишите мне — получите бесплатную консультацию и предложение цены',
    'contact.tg_desc': 'Самый быстрый способ связи',
    'contact.bot_desc': 'Автоматический заказ',
    'contact.bot_value': 'Бот для заказов',
    'contact.tg_action': 'Написать',
    'contact.bot_action': 'Начать',
    'contact.copy_tg': 'Скопировать username',
    'contact.copied': 'Скопировано',
    'contact.why_title': 'Почему я?',
    'contact.why1_title': 'Быстрый результат',
    'contact.why1_desc': 'Ваш заказ будет выполнен быстро и качественно. Простые проекты 1-3 дня, сложные 1-2 недели.',
    'contact.why2_title': 'Безопасность',
    'contact.why2_desc': 'Все проекты создаются в соответствии со стандартами безопасности. Ваши данные защищены.',
    'contact.why3_title': 'Постоянная связь',
    'contact.why3_desc': 'Всегда информирую о ходе проекта. Быстро отвечаю на ваши вопросы.',
    'contact.why4_title': 'Бесплатные правки',
    'contact.why4_desc': '30 дней бесплатных правок и поддержки после сдачи проекта.',
    'contact.main_cta': 'Напишите сейчас!',

    'footer.rights': 'Все права защищены.',
  },

  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cta': 'Get in Touch',

    'hero.badge': 'Freelance Developer',
    'hero.title1': 'Turning Your',
    'hero.title2': 'Ideas Into',
    'hero.title3': 'Reality',
    'hero.subtitle': "I'll take your business to the next level — fast, professional and reliable",
    'hero.cta1': 'Order a Project',
    'hero.cta2': 'Our Services',

    'about.tag': 'About Me',
    'about.title1': 'Who',
    'about.title2': 'Am I?',
    'about.subtitle': 'Professional developer and freelancer — creating quality solutions with modern technologies',
    'about.p1': "I'm a professional developer with over 3 years of experience. I specialize in creating",
    'about.p1_tg': 'Telegram bots',
    'about.p1_web': 'web applications',
    'about.p1_and': 'Android apps',
    'about.p1_end': '.',
    'about.p2': 'Individual approach to every project — I offer the best solution for your business. Quality, speed, and reliability — my core principles.',
    'about.feat1_title': 'Fast Delivery',
    'about.feat1_desc': 'Quality results in the shortest time',
    'about.feat2_title': 'Quality Guarantee',
    'about.feat2_desc': 'Free fixes and support',
    'about.feat3_title': '24/7 Contact',
    'about.feat3_desc': 'Always available',
    'about.feat4_title': 'Clean Code',
    'about.feat4_desc': 'Clean and scalable code',
    'about.skills_title': 'Technical Skills',

    'services.tag': 'Services',
    'services.title1': 'What Can',
    'services.title2': 'I Do?',
    'services.subtitle': 'Modern and professional solutions for your business',
    'services.detail': 'Learn More',
    'services.extra_title': 'Need other services?',
    'services.extra_desc': 'SEO optimization, UI/UX design, API integration, server setup and more',
    'services.extra_cta': 'Get in Touch',

    'pricing.tag': 'Pricing',
    'pricing.title1': 'Affordable',
    'pricing.title2': 'Prices',
    'pricing.subtitle': 'Quality work at affordable prices. All prices are negotiable',
    'pricing.cta': 'Order Now',
    'pricing.popular': 'Popular',
    'pricing.note': '* All prices are starting prices. Exact price depends on project complexity. Get a free consultation!',

    'process.tag': 'Work Process',
    'process.title1': 'How Do',
    'process.title2': 'I Work?',
    'process.subtitle': 'From order to delivery — fast and transparent process',
    'process.step_suffix': 'STEP',

    'projects.tag': 'Portfolio',
    'projects.title1': 'Recent',
    'projects.title2': 'Projects',
    'projects.subtitle': 'Examples of successfully completed projects',
    'projects.order_similar': 'Order similar',
    'projects.view': 'View',

    'testimonials.tag': 'Reviews',
    'testimonials.title1': 'Client',
    'testimonials.title2': 'Feedback',
    'testimonials.subtitle': 'Real reviews from our previous clients',

    'faq.tag': 'FAQ',
    'faq.title1': 'Frequently',
    'faq.title2': 'Asked Questions',

    'contact.tag': 'Contact',
    'contact.title1': "Let's Start",
    'contact.title2': 'a Project?',
    'contact.subtitle': 'Have an idea? Write to me — get a free consultation and price quote',
    'contact.tg_desc': 'Fastest way to reach me',
    'contact.bot_desc': 'Automated ordering',
    'contact.bot_value': 'Order bot',
    'contact.tg_action': 'Message',
    'contact.bot_action': 'Start',
    'contact.copy_tg': 'Copy Telegram username',
    'contact.copied': 'Copied',
    'contact.why_title': 'Why choose me?',
    'contact.why1_title': 'Fast Results',
    'contact.why1_desc': 'Your order completed quickly and with quality. Simple projects 1-3 days, complex ones 1-2 weeks.',
    'contact.why2_title': 'Security',
    'contact.why2_desc': 'All projects built with security standards. Your data is protected.',
    'contact.why3_title': 'Constant Communication',
    'contact.why3_desc': 'I keep you updated on project progress. Quick answers to your questions.',
    'contact.why4_title': 'Free Fixes',
    'contact.why4_desc': '30 days of free fixes and support after project delivery.',
    'contact.main_cta': 'Write Now!',

    'footer.rights': 'All rights reserved.',
  },
};

// ─── Navigation links ────────────────────────────────────────────
export const getNavLinks = (lang) => [
  { href: '#home', label: strings[lang]['nav.home'] },
  { href: '#about', label: strings[lang]['nav.about'] },
  { href: '#services', label: strings[lang]['nav.services'] },
  { href: '#projects', label: strings[lang]['nav.projects'] },
  { href: '#contact', label: strings[lang]['nav.contact'] },
];

// ─── Hero typing words ──────────────────────────────────────────
export const getHeroTypingWords = (lang) => ({
  uz: ['Telegram Botlar', 'Web Saytlar', 'Android Ilovalar', 'E-Commerce Tizimlar'],
  ru: ['Telegram Боты', 'Веб-Сайты', 'Android Приложения', 'E-Commerce Системы'],
  en: ['Telegram Bots', 'Websites', 'Android Apps', 'E-Commerce Systems'],
})[lang];

// ─── Stats ───────────────────────────────────────────────────────
export const getStats = (lang) => ({
  uz: [
    { value: '50+', label: 'Tugallangan loyihalar' },
    { value: '30+', label: 'Mamnun mijozlar' },
    { value: '3+', label: 'Yillik tajriba' },
    { value: '24/7', label: "Qo'llab-quvvatlash" },
  ],
  ru: [
    { value: '50+', label: 'Завершённых проектов' },
    { value: '30+', label: 'Довольных клиентов' },
    { value: '3+', label: 'Года опыта' },
    { value: '24/7', label: 'Поддержка' },
  ],
  en: [
    { value: '50+', label: 'Completed projects' },
    { value: '30+', label: 'Happy clients' },
    { value: '3+', label: 'Years experience' },
    { value: '24/7', label: 'Support' },
  ],
})[lang];

// ─── Skills (technical names are universal) ──────────────────────
export const skills = [
  { name: 'Python', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 88 },
  { name: 'Node.js', level: 85 },
  { name: 'Telegram API', level: 95 },
  { name: 'PostgreSQL', level: 82 },
  { name: 'React Native', level: 80 },
  { name: 'Tailwind CSS', level: 90 },
];

// ─── Services ────────────────────────────────────────────────────
const servicesConfig = [
  { icon: Bot, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10' },
  { icon: Globe, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10' },
  { icon: Smartphone, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500/10' },
  { icon: Star, color: 'from-yellow-500 to-orange-500', bgColor: 'bg-yellow-500/10' },
  { icon: Crown, color: 'from-indigo-500 to-violet-500', bgColor: 'bg-indigo-500/10' },
  { icon: ShoppingCart, color: 'from-rose-500 to-red-500', bgColor: 'bg-rose-500/10' },
];

const servicesText = {
  uz: [
    { title: 'Telegram Bot', description: "Har qanday murakkablikdagi Telegram botlar yaratish — avtomatlashtirish, CRM, to'lov tizimlari, inline botlar", features: ['Inline botlar', "To'lov integratsiya", 'Admin panel', 'Auto-javob tizimi'] },
    { title: 'Web Saytlar', description: 'Zamonaviy, tezkor va mobil-friendly veb saytlar — landing page, portfolio, e-commerce', features: ['React / Next.js', 'Responsive dizayn', 'SEO optimizatsiya', 'Admin panel'] },
    { title: 'Android Ilovalar', description: "Android uchun native va cross-platform mobil ilovalar — xabarlar, do'konlar, xizmatlar", features: ['React Native', 'Push bildirishnomalar', 'Offline rejim', 'Play Store nashr'] },
    { title: 'Telegram Stars', description: "Telegram Stars integratsiyasi — kontentni monetizatsiya qilish va to'lov qabul qilish", features: ["Stars to'lov", 'Premium kontent', 'Obuna tizimi', 'Statistika'] },
    { title: 'Telegram Premium', description: 'Telegram Premium xizmatlari — premium funksiyalar va maxsus imkoniyatlar', features: ['Premium hadya', 'Maxsus stiker', 'Kengaytirilgan limitlar', 'Premium bot'] },
    { title: 'E-Commerce', description: "Telegram va Web uchun onlayn do'kon tizimlari — to'liq avtomatlashtirilgan", features: ['Mahsulot katalog', "To'lov gateway", 'Buyurtma tracking', 'Analitika'] },
  ],
  ru: [
    { title: 'Telegram Бот', description: 'Создание Telegram ботов любой сложности — автоматизация, CRM, платёжные системы, inline боты', features: ['Inline боты', 'Интеграция оплаты', 'Админ панель', 'Авто-ответы'] },
    { title: 'Веб-Сайты', description: 'Современные, быстрые и мобильные сайты — лендинги, портфолио, интернет-магазины', features: ['React / Next.js', 'Адаптивный дизайн', 'SEO оптимизация', 'Админ панель'] },
    { title: 'Android Приложения', description: 'Native и кроссплатформенные мобильные приложения для Android', features: ['React Native', 'Push уведомления', 'Офлайн режим', 'Публикация в Play Store'] },
    { title: 'Telegram Stars', description: 'Интеграция Telegram Stars — монетизация контента и приём платежей', features: ['Оплата Stars', 'Премиум контент', 'Система подписки', 'Статистика'] },
    { title: 'Telegram Premium', description: 'Услуги Telegram Premium — премиум функции и особые возможности', features: ['Премиум подарок', 'Особые стикеры', 'Расширенные лимиты', 'Премиум бот'] },
    { title: 'E-Commerce', description: 'Интернет-магазины для Telegram и Web — полностью автоматизированные', features: ['Каталог товаров', 'Платёжный шлюз', 'Отслеживание заказов', 'Аналитика'] },
  ],
  en: [
    { title: 'Telegram Bot', description: 'Creating Telegram bots of any complexity — automation, CRM, payment systems, inline bots', features: ['Inline bots', 'Payment integration', 'Admin panel', 'Auto-reply system'] },
    { title: 'Websites', description: 'Modern, fast, and mobile-friendly websites — landing pages, portfolios, e-commerce', features: ['React / Next.js', 'Responsive design', 'SEO optimization', 'Admin panel'] },
    { title: 'Android Apps', description: 'Native and cross-platform mobile apps for Android — messaging, stores, services', features: ['React Native', 'Push notifications', 'Offline mode', 'Play Store publish'] },
    { title: 'Telegram Stars', description: 'Telegram Stars integration — content monetization and payment acceptance', features: ['Stars payment', 'Premium content', 'Subscription system', 'Statistics'] },
    { title: 'Telegram Premium', description: 'Telegram Premium services — premium features and special capabilities', features: ['Premium gift', 'Custom stickers', 'Extended limits', 'Premium bot'] },
    { title: 'E-Commerce', description: 'Online store systems for Telegram and Web — fully automated', features: ['Product catalog', 'Payment gateway', 'Order tracking', 'Analytics'] },
  ],
};

export const getServices = (lang) =>
  servicesConfig.map((cfg, i) => ({ ...cfg, ...servicesText[lang][i] }));

// ─── Pricing ─────────────────────────────────────────────────────
const pricingConfig = [
  { color: 'from-blue-500 to-cyan-500', popular: false },
  { color: 'from-primary to-accent', popular: true },
  { color: 'from-purple-500 to-pink-500', popular: false },
];

const pricingText = {
  uz: [
    { name: 'Starter', price: '$50', period: 'dan', description: 'Oddiy botlar va landing sahifalar', features: ['Oddiy Telegram bot', 'Landing page (1 sahifa)', 'Responsive dizayn', 'Asosiy funksiyalar', "7 kun qo'llab-quvvatlash"] },
    { name: 'Professional', price: '$150', period: 'dan', description: "Murakkab botlar va to'liq veb saytlar", features: ['Murakkab Telegram bot', "Ko'p sahifali veb sayt", 'Admin panel', "To'lov integratsiya", 'Database integratsiya', "30 kun qo'llab-quvvatlash"] },
    { name: 'Enterprise', price: 'Kelishiladi', period: '', description: 'Katta loyihalar va maxsus yechimlar', features: ['Har qanday murakkablik', 'Android ilova + Bot + Web', "To'liq avtomatlashtirish", 'Maxsus dizayn', 'API integratsiyalar', "60 kun qo'llab-quvvatlash"] },
  ],
  ru: [
    { name: 'Starter', price: '$50', period: 'от', description: 'Простые боты и лендинги', features: ['Простой Telegram бот', 'Лендинг (1 страница)', 'Адаптивный дизайн', 'Базовый функционал', '7 дней поддержки'] },
    { name: 'Professional', price: '$150', period: 'от', description: 'Сложные боты и полноценные сайты', features: ['Сложный Telegram бот', 'Многостраничный сайт', 'Админ панель', 'Интеграция оплаты', 'Интеграция базы данных', '30 дней поддержки'] },
    { name: 'Enterprise', price: 'Договорная', period: '', description: 'Крупные проекты и кастомные решения', features: ['Любая сложность', 'Android + Бот + Web', 'Полная автоматизация', 'Кастомный дизайн', 'API интеграции', '60 дней поддержки'] },
  ],
  en: [
    { name: 'Starter', price: '$50', period: 'from', description: 'Simple bots and landing pages', features: ['Simple Telegram bot', 'Landing page (1 page)', 'Responsive design', 'Basic features', '7 days support'] },
    { name: 'Professional', price: '$150', period: 'from', description: 'Complex bots and full websites', features: ['Complex Telegram bot', 'Multi-page website', 'Admin panel', 'Payment integration', 'Database integration', '30 days support'] },
    { name: 'Enterprise', price: 'Negotiable', period: '', description: 'Large projects and custom solutions', features: ['Any complexity', 'Android + Bot + Web', 'Full automation', 'Custom design', 'API integrations', '60 days support'] },
  ],
};

export const getPricing = (lang) =>
  pricingConfig.map((cfg, i) => ({ ...cfg, ...pricingText[lang][i] }));

// ─── Process Steps ───────────────────────────────────────────────
const processText = {
  uz: [
    { step: '01', title: 'Murojaat', description: "Telegram orqali yozing — g'oyangizni aytib bering. Bepul maslahat olasiz.", duration: '1 soat' },
    { step: '02', title: 'Tahlil & Reja', description: "Loyihani tahlil qilib, aniq muddat va bajariladigan ishlar ro'yxatini taklif qilaman.", duration: '1 kun' },
    { step: '03', title: 'Ishga Tushish', description: "Kelishilgandan so'ng darhol ishni boshlayman. Progress haqida xabar berib turaman.", duration: '1-10 kun' },
    { step: '04', title: 'Topshirish', description: 'Tayyor loyihani test qilib topshiraman. 30 kun bepul tuzatish kafolati.', duration: 'Tayyor!' },
  ],
  ru: [
    { step: '01', title: 'Обращение', description: 'Напишите в Telegram — расскажите вашу идею. Получите бесплатную консультацию.', duration: '1 час' },
    { step: '02', title: 'Анализ и план', description: 'Проанализирую проект и предложу точный план работ и сроки.', duration: '1 день' },
    { step: '03', title: 'Разработка', description: 'После согласования сразу начну работу. Буду информировать о прогрессе.', duration: '1-10 дней' },
    { step: '04', title: 'Сдача', description: 'Протестирую и сдам готовый проект. 30 дней бесплатной гарантии.', duration: 'Готово!' },
  ],
  en: [
    { step: '01', title: 'Reach Out', description: 'Write on Telegram — tell me your idea. Get a free consultation.', duration: '1 hour' },
    { step: '02', title: 'Analysis & Plan', description: "I'll analyze the project and offer an exact work plan and timeline.", duration: '1 day' },
    { step: '03', title: 'Development', description: "After agreement, I start immediately. I'll keep you updated on progress.", duration: '1-10 days' },
    { step: '04', title: 'Delivery', description: "I'll test and deliver the finished project. 30 days free warranty.", duration: 'Done!' },
  ],
};

export const getProcessSteps = (lang) => processText[lang];

// ─── Testimonials ────────────────────────────────────────────────
const testimonialsText = {
  uz: [
    { name: 'Aziz R.', role: "Online do'kon egasi", text: "E-commerce bot yasatdim, juda tez va sifatli chiqdi. Mijozlarim botdan buyurtma berishni juda yoqtirishdi. Tavsiya qilaman!", rating: 5 },
    { name: 'Nodira K.', role: 'Marketing mutaxassisi', text: "Kompaniyamiz uchun landing page yasatdi. Dizayni juda chiroyli, mobilda ham mukammal ishlaydi. Natija kutganimdan ham yaxshi chiqdi!", rating: 5 },
    { name: 'Sardor M.', role: 'Startup asoschisi', text: "CRM tizimi buyurtma qildim, 5 kunda tayyor bo'ldi. Ish jarayoni juda professional, doimo xabar berib turdi.", rating: 5 },
    { name: 'Dilshod T.', role: 'Taxi xizmati rahbari', text: "Taxi boti yasatdim, haydovchilar va yo'lovchilar uchun ajoyib tizim chiqdi. 3 oydan beri muammosiz ishlayapti.", rating: 5 },
  ],
  ru: [
    { name: 'Азиз Р.', role: 'Владелец интернет-магазина', text: 'Заказал E-commerce бота — быстро и качественно. Клиентам очень нравится заказывать через бота. Рекомендую!', rating: 5 },
    { name: 'Нодира К.', role: 'Маркетинг специалист', text: 'Сделал лендинг для нашей компании. Красивый дизайн, отлично работает на мобильных. Результат превзошёл ожидания!', rating: 5 },
    { name: 'Сардор М.', role: 'Основатель стартапа', text: 'Заказал CRM систему, была готова за 5 дней. Очень профессиональный подход, всегда держал в курсе.', rating: 5 },
    { name: 'Дильшод Т.', role: 'Руководитель такси-сервиса', text: 'Заказал бота для такси — отличная система для водителей и пассажиров. Уже 3 месяца работает без сбоев.', rating: 5 },
  ],
  en: [
    { name: 'Aziz R.', role: 'Online store owner', text: 'Had an e-commerce bot built — fast and quality work. My customers love ordering through the bot. Highly recommend!', rating: 5 },
    { name: 'Nodira K.', role: 'Marketing specialist', text: 'Built a landing page for our company. Beautiful design, works perfectly on mobile. The result exceeded my expectations!', rating: 5 },
    { name: 'Sardor M.', role: 'Startup founder', text: 'Ordered a CRM system, was ready in 5 days. Very professional process, always kept me updated.', rating: 5 },
    { name: 'Dilshod T.', role: 'Taxi service manager', text: 'Had a taxi bot built — amazing system for drivers and passengers. Running without issues for 3 months.', rating: 5 },
  ],
};

export const getTestimonials = (lang) => testimonialsText[lang];

// ─── FAQs ────────────────────────────────────────────────────────
const faqsText = {
  uz: [
    { question: "Buyurtma qancha vaqtda tayyor bo'ladi?", answer: "Oddiy loyihalar (bot, landing page) 1-2 kunda, murakkab loyihalar (web ilova, Android) 5-10 kunda tayyor bo'ladi. Aniq muddatni loyihani ko'rgandan keyin aytaman." },
    { question: 'Narxlar qanday belgilanadi?', answer: "Narx loyiha murakkabligiga qarab kelishiladi. Bepul maslahat olib, aniq narx bilib olishingiz mumkin — Telegram orqali yozing." },
    { question: "To'lov qanday amalga oshiriladi?", answer: "To'lov 50/50 tizimida — 50% oldindan, 50% loyiha tayyor bo'lgach. Kichik loyihalar uchun to'liq oldindan to'lov ham mumkin." },
    { question: "Loyiha topshirilgandan keyin qo'llab-quvvatlash bormi?", answer: "Ha! Har bir loyiha topshirilgandan keyin 30 kun bepul tuzatish va qo'llab-quvvatlash kafolati beriladi. Keyin ham xizmat davom etadi." },
    { question: "Source kodni olsam bo'ladimi?", answer: "Albatta! Loyiha to'liq topshirilganda barcha source kodlar, database va hujjatlar sizga beriladi. Siz to'liq egalik qilasiz." },
    { question: "Agar natija yoqmasa nima bo'ladi?", answer: "Har bir bosqichda natijani ko'rsataman va tasdiqlaysiz. Agar biror narsa yoqmasa, bepul qayta ishlayman. Mijoz mamnunligi — birinchi o'rinda." },
  ],
  ru: [
    { question: 'Сколько времени занимает выполнение заказа?', answer: 'Простые проекты (бот, лендинг) — 1-2 дня, сложные (веб-приложение, Android) — 5-10 дней. Точные сроки скажу после оценки проекта.' },
    { question: 'Как формируются цены?', answer: 'Цена определяется индивидуально в зависимости от сложности проекта. Напишите в Telegram — получите бесплатную консультацию и точную стоимость.' },
    { question: 'Как происходит оплата?', answer: 'Оплата по системе 50/50 — 50% предоплата, 50% после готовности проекта. Для маленьких проектов возможна полная предоплата.' },
    { question: 'Есть ли поддержка после сдачи проекта?', answer: 'Да! 30 дней бесплатных правок и поддержки после сдачи каждого проекта. Затем поддержка продолжается по доступной цене.' },
    { question: 'Могу ли я получить исходный код?', answer: 'Конечно! При полной сдаче проекта вы получаете весь исходный код, базу данных и документацию. Вы являетесь полным владельцем.' },
    { question: 'Что если результат не понравится?', answer: 'На каждом этапе показываю результат для утверждения. Если что-то не нравится — бесплатно переделаю. Удовлетворённость клиента — на первом месте.' },
  ],
  en: [
    { question: 'How long does an order take to complete?', answer: 'Simple projects (bot, landing page) take 1-2 days, complex projects (web app, Android) take 5-10 days. I\'ll give exact timeline after evaluating the project.' },
    { question: 'How are prices determined?', answer: 'Pricing is determined individually based on project complexity. Write on Telegram — get a free consultation and exact quote.' },
    { question: 'How does payment work?', answer: 'Payment is 50/50 — 50% upfront, 50% after project completion. Full upfront payment is also possible for small projects.' },
    { question: 'Is there support after project delivery?', answer: 'Yes! 30 days of free fixes and support after delivery of each project. After that, support continues at affordable rates.' },
    { question: 'Can I get the source code?', answer: 'Absolutely! Upon full project delivery, you receive all source code, database, and documentation. You have full ownership.' },
    { question: "What if I don't like the result?", answer: "I show results at each stage for approval. If something doesn't meet your expectations — I'll redo it for free. Client satisfaction comes first." },
  ],
};

export const getFaqs = (lang) => faqsText[lang];

// ─── Projects ────────────────────────────────────────────────────
const projectsConfig = [
  { icon: Globe,         color: 'from-blue-500 to-cyan-400',     link: 'https://arif.uz' },
  { icon: Bot,           color: 'from-violet-500 to-purple-400', link: 'https://t.me/arif_uzbot' },
  { icon: Star,          color: 'from-pink-500 to-rose-400',     link: 'https://tennou.uz' },
  { icon: ShoppingCart,  color: 'from-green-500 to-emerald-400', link: 'https://t.me/olibketuz_bot' },
  { icon: MessageCircle, color: 'from-yellow-500 to-orange-400', link: 'https://t.me/kino_yangi_bot' },
];

const projectsText = {
  uz: [
    { title: 'Arif.uz — Solar Web Sayt', description: "Quyosh panellari kompaniyasi uchun zamonaviy web sayt — mahsulot katalogi, narxlar, bog'lanish formasi va SEO optimizatsiya", tags: ['Next.js', 'Tailwind', 'Prisma'] },
    { title: '@arif_uzbot — Telegram Bot', description: "Arif.uz kompaniyasi uchun Telegram bot — mahsulotlar katalogi, narx so'rash, menejer bilan bog'lanish va buyurtma berish", tags: ['Telegram Bot', 'Python', 'aiogram'] },
    { title: 'Tennou.uz — Konsalting Sayt', description: "Chet elda o'qishga yordam beruvchi Tennou Consulting kompaniyasi uchun web sayt — universitetlar, dasturlar va ariza jarayoni", tags: ['React', 'Tailwind', 'Vite'] },
    { title: '@olibketuz_bot — Taxi Boti', description: "Viloyatlar bo'yicha haydovchilar uchun taxi buyurtma boti — yo'nalishlar, narxlar va buyurtmalarni boshqarish tizimi", tags: ['Telegram Bot', 'Python', 'SQLite'] },
    { title: '@kino_yangi_bot — Kino Boti', description: "Yangi kinolarni izlash va ko'rish boti — katta baza, kategoriyalar bo'yicha qidirish, tavsiya tizimi", tags: ['Telegram Bot', 'Python', 'API'] },
  ],
  ru: [
    { title: 'Arif.uz — Solar Сайт', description: 'Современный веб-сайт для компании солнечных панелей — каталог продуктов, цены, форма обратной связи и SEO', tags: ['Next.js', 'Tailwind', 'Prisma'] },
    { title: '@arif_uzbot — Telegram Бот', description: 'Telegram-бот для компании Arif.uz — каталог продуктов, запрос цен, связь с менеджером и оформление заказа', tags: ['Telegram Bot', 'Python', 'aiogram'] },
    { title: 'Tennou.uz — Консалтинг Сайт', description: 'Сайт для компании Tennou Consulting — помощь в поступлении за рубеж, университеты, программы и процесс подачи заявки', tags: ['React', 'Tailwind', 'Vite'] },
    { title: '@olibketuz_bot — Такси Бот', description: 'Бот заказа такси для водителей по регионам — маршруты, цены и система управления заказами', tags: ['Telegram Bot', 'Python', 'SQLite'] },
    { title: '@kino_yangi_bot — Кино Бот', description: 'Бот для поиска и просмотра новых фильмов — большая база, поиск по категориям, система рекомендаций', tags: ['Telegram Bot', 'Python', 'API'] },
  ],
  en: [
    { title: 'Arif.uz — Solar Website', description: 'Modern website for a solar panel company — product catalog, pricing, contact form and SEO optimization', tags: ['Next.js', 'Tailwind', 'Prisma'] },
    { title: '@arif_uzbot — Telegram Bot', description: 'Telegram bot for Arif.uz — product catalog, price inquiry, manager contact and order placement', tags: ['Telegram Bot', 'Python', 'aiogram'] },
    { title: 'Tennou.uz — Consulting Site', description: 'Website for Tennou Consulting — helping students study abroad, universities, programs and application process', tags: ['React', 'Tailwind', 'Vite'] },
    { title: '@olibketuz_bot — Taxi Bot', description: 'Taxi ordering bot for drivers by regions — routes, pricing and order management system', tags: ['Telegram Bot', 'Python', 'SQLite'] },
    { title: '@kino_yangi_bot — Movie Bot', description: 'Bot for finding and watching new movies — large database, category search, recommendation system', tags: ['Telegram Bot', 'Python', 'API'] },
  ],
};

export const getProjects = (lang) =>
  projectsConfig.map((cfg, i) => ({ ...cfg, ...projectsText[lang][i] }));

// ─── Shared constants ────────────────────────────────────────────
export const telegramUsername = 'DevPro_admin';
export const telegramBotUrl = 'https://t.me/devproo_bot';
