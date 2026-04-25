import {
  Bot,
  Globe,
  Smartphone,
  Star,
  Shield,
  Zap,
  Code2,
  MessageCircle,
  Send,
  Crown,
  Users,
  ShoppingCart,
  BarChart3,
  Palette,
  Server,
  Headphones,
} from 'lucide-react';

export const services = [
  {
    icon: Bot,
    title: 'Telegram Bot',
    description: 'Har qanday murakkablikdagi Telegram botlar yaratish — avtomatlashtirish, CRM, to\'lov tizimlari, inline botlar',
    features: ['Inline botlar', 'To\'lov integratsiya', 'Admin panel', 'Auto-javob tizimi'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Globe,
    title: 'Web Saytlar',
    description: 'Zamonaviy, tezkor va mobil-friendly veb saytlar — landing page, portfolio, e-commerce',
    features: ['React / Next.js', 'Responsive dizayn', 'SEO optimizatsiya', 'Admin panel'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Smartphone,
    title: 'Android Ilovalar',
    description: 'Android uchun native va cross-platform mobil ilovalar — xabarlar, do\'konlar, xizmatlar',
    features: ['React Native', 'Push bildirishnomalar', 'Offline rejim', 'Play Store nashr'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Star,
    title: 'Telegram Stars',
    description: 'Telegram Stars integratsiyasi — kontentni monetizatsiya qilish va to\'lov qabul qilish',
    features: ['Stars to\'lov', 'Premium kontent', 'Obuna tizimi', 'Statistika'],
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/10',
  },
  {
    icon: Crown,
    title: 'Telegram Premium',
    description: 'Telegram Premium xizmatlari — premium funksiyalar va maxsus imkoniyatlar',
    features: ['Premium hadya', 'Maxsus stiker', 'Kengaytirilgan limitlar', 'Premium bot'],
    color: 'from-indigo-500 to-violet-500',
    bgColor: 'bg-indigo-500/10',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Telegram va Web uchun onlayn do\'kon tizimlari — to\'liq avtomatlashtirilgan',
    features: ['Mahsulot katalog', 'To\'lov gateway', 'Buyurtma tracking', 'Analitika'],
    color: 'from-rose-500 to-red-500',
    bgColor: 'bg-rose-500/10',
  },
];

export const pricing = [
  {
    name: 'Starter',
    price: '$50',
    period: 'dan',
    description: 'Oddiy botlar va landing sahifalar',
    features: [
      'Oddiy Telegram bot',
      'Landing page (1 sahifa)',
      'Responsive dizayn',
      'Asosiy funksiyalar',
      '7 kun qo\'llab-quvvatlash',
    ],
    color: 'from-blue-500 to-cyan-500',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$150',
    period: 'dan',
    description: 'Murakkab botlar va to\'liq veb saytlar',
    features: [
      'Murakkab Telegram bot',
      'Ko\'p sahifali veb sayt',
      'Admin panel',
      'To\'lov integratsiya',
      'Database integratsiya',
      '30 kun qo\'llab-quvvatlash',
    ],
    color: 'from-primary to-accent',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Kelishiladi',
    period: '',
    description: 'Katta loyihalar va maxsus yechimlar',
    features: [
      'Har qanday murakkablik',
      'Android ilova + Bot + Web',
      'To\'liq avtomatlashtirish',
      'Maxsus dizayn',
      'API integratsiyalar',
      '60 kun qo\'llab-quvvatlash',
    ],
    color: 'from-purple-500 to-pink-500',
    popular: false,
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Murojaat',
    description: 'Telegram orqali yozing — g\'oyangizni aytib bering. Bepul maslahat olasiz.',
    duration: '1 soat',
  },
  {
    step: '02',
    title: 'Tahlil & Narx',
    description: 'Loyihani tahlil qilib, aniq narx va muddat taklif qilaman.',
    duration: '1 kun',
  },
  {
    step: '03',
    title: 'Ishga Tushish',
    description: 'Kelishilgandan so\'ng darhol ishni boshlayman. Progress haqida xabar berib turaman.',
    duration: '1-10 kun',
  },
  {
    step: '04',
    title: 'Topshirish',
    description: 'Tayyor loyihani test qilib topshiraman. 30 kun bepul tuzatish kafolati.',
    duration: 'Tayyor!',
  },
];

export const testimonials = [
  {
    name: 'Aziz R.',
    role: 'Online do\'kon egasi',
    text: 'E-commerce bot yasatdim, juda tez va sifatli chiqdi. Mijozlarim botdan buyurtma berishni juda yoqtirishdi. Tavsiya qilaman!',
    rating: 5,
  },
  {
    name: 'Nodira K.',
    role: 'Marketing mutaxassisi',
    text: 'Kompaniyamiz uchun landing page yasatdi. Dizayni juda chiroyli, mobilda ham mukammal ishlaydi. Narxi ham hamyonbop.',
    rating: 5,
  },
  {
    name: 'Sardor M.',
    role: 'Startup asoschisi',
    text: 'CRM tizimi buyurtma qildim, 5 kunda tayyor bo\'ldi. Ish jarayoni juda professional, doimo xabar berib turdi.',
    rating: 5,
  },
  {
    name: 'Dilshod T.',
    role: 'Taxi xizmati rahbari',
    text: 'Taxi boti yasatdim, haydovchilar va yo\'lovchilar uchun ajoyib tizim chiqdi. 3 oydan beri muammosiz ishlayapti.',
    rating: 5,
  },
];

export const faqs = [
  {
    question: 'Buyurtma qancha vaqtda tayyor bo\'ladi?',
    answer: 'Oddiy loyihalar (bot, landing page) 1-2 kunda, murakkab loyihalar (web ilova, Android) 5-10 kunda tayyor bo\'ladi. Aniq muddatni loyihani ko\'rgandan keyin aytaman.',
  },
  {
    question: 'Narxlar qanday belgilanadi?',
    answer: 'Telegram bot — $50 dan boshlanadi, Web sayt — $80 dan, Android ilova — $200 dan. Aniq narx loyiha murakkabligiga bog\'liq. Bepul maslahat olib, aniq narx bilib olishingiz mumkin.',
  },
  {
    question: 'To\'lov qanday amalga oshiriladi?',
    answer: 'To\'lov 50/50 tizimida — 50% oldindan, 50% loyiha tayyor bo\'lgach. Kichik loyihalar uchun to\'liq oldindan to\'lov ham mumkin.',
  },
  {
    question: 'Loyiha topshirilgandan keyin qo\'llab-quvvatlash bormi?',
    answer: 'Ha! Har bir loyiha topshirilgandan keyin 30 kun bepul tuzatish va qo\'llab-quvvatlash kafolati beriladi. Keyin ham arzon narxda xizmat davom etadi.',
  },
  {
    question: 'Source kodni olsam bo\'ladimi?',
    answer: 'Albatta! Loyiha to\'liq topshirilganda barcha source kodlar, database va hujjatlar sizga beriladi. Siz to\'liq egalik qilasiz.',
  },
  {
    question: 'Agar natija yoqmasa nima bo\'ladi?',
    answer: 'Har bir bosqichda natijani ko\'rsataman va tasdiqlaysiz. Agar biror narsa yoqmasa, bepul qayta ishlayman. Mijoz mamnunligi — birinchi o\'rinda.',
  },
];

export const projects = [
  {
    title: 'E-Commerce Telegram Bot',
    description: 'To\'liq avtomatlashtirilgan onlayn do\'kon boti — katalog, savat, to\'lov va yetkazib berish kuzatuvi',
    tags: ['Telegram Bot', 'Python', 'PostgreSQL'],
    icon: ShoppingCart,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Business Landing Page',
    description: 'Zamonaviy kompaniya uchun responsive landing page — animatsiyalar va SEO optimizatsiya',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    icon: Globe,
    color: 'from-purple-500 to-pink-400',
  },
  {
    title: 'Taxi Buyurtma Boti',
    description: 'Taxi xizmatini boshqarish uchun bot — haydovchi va yo\'lovchi paneli, GPS tracking',
    tags: ['Telegram Bot', 'Node.js', 'MongoDB'],
    icon: Send,
    color: 'from-green-500 to-emerald-400',
  },
  {
    title: 'Kino Izlash Boti',
    description: 'Kino izlash va yuklab olish boti — kategoriyalar, reyting, tavfsiya tizimi',
    tags: ['Telegram Bot', 'Python', 'API'],
    icon: Star,
    color: 'from-yellow-500 to-orange-400',
  },
  {
    title: 'CRM Web Ilova',
    description: 'Mijozlar bilan ishlash tizimi — analitika dashboard, hisobot va avtomatlashtirish',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    icon: BarChart3,
    color: 'from-indigo-500 to-violet-400',
  },
  {
    title: 'Android Xabar Ilovasi',
    description: 'Real-time xabar almashish ilovasi — guruhlar, media yuborish, push bildirishnomalar',
    tags: ['React Native', 'Firebase', 'WebSocket'],
    icon: MessageCircle,
    color: 'from-rose-500 to-red-400',
  },
];

export const stats = [
  { value: '50+', label: 'Tugallangan loyihalar' },
  { value: '30+', label: 'Mamnun mijozlar' },
  { value: '3+', label: 'Yillik tajriba' },
  { value: '24/7', label: 'Qo\'llab-quvvatlash' },
];

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

export const navLinks = [
  { href: '#home', label: 'Bosh sahifa' },
  { href: '#about', label: 'Men haqimda' },
  { href: '#services', label: 'Xizmatlar' },
  { href: '#pricing', label: 'Narxlar' },
  { href: '#projects', label: 'Loyihalar' },
  { href: '#contact', label: 'Aloqa' },
];

export const telegramUsername = 'your_telegram';
export const telegramBotUrl = 'https://t.me/your_bot';

export const heroTypingWords = [
  'Telegram Botlar',
  'Web Saytlar',
  'Android Ilovalar',
  'E-Commerce Tizimlar',
];
