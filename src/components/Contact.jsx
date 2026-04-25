import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, MessageCircle, Clock, Shield, CheckCircle, Copy, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { telegramUsername, telegramBotUrl } from '../data/translations';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [copiedTg, setCopiedTg] = useState(false);
  const { t } = useLanguage();

  const copyTelegram = () => {
    navigator.clipboard.writeText(`@${telegramUsername}`);
    setCopiedTg(true);
    setTimeout(() => setCopiedTg(false), 2000);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Telegram',
      desc: t('contact.tg_desc'),
      value: `@${telegramUsername}`,
      action: () => window.open(`https://t.me/${telegramUsername}`, '_blank'),
      actionLabel: t('contact.tg_action'),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Send,
      title: 'Telegram Bot',
      desc: t('contact.bot_desc'),
      value: t('contact.bot_value'),
      action: () => window.open(telegramBotUrl, '_blank'),
      actionLabel: t('contact.bot_action'),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
    },
  ];

  const whyItems = [
    { icon: Clock, title: t('contact.why1_title'), desc: t('contact.why1_desc') },
    { icon: Shield, title: t('contact.why2_title'), desc: t('contact.why2_desc') },
    { icon: MessageCircle, title: t('contact.why3_title'), desc: t('contact.why3_desc') },
    { icon: CheckCircle, title: t('contact.why4_title'), desc: t('contact.why4_desc') },
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[500px] aspect-square bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-light text-sm font-semibold tracking-wider uppercase">
            {t('contact.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            {t('contact.title1')} <span className="text-gradient">{t('contact.title2')}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            {contactMethods.map((method, i) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${method.bgColor} flex items-center justify-center shrink-0`}>
                    <method.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{method.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{method.desc}</p>
                    <p className="text-primary-light text-sm font-medium mt-2">{method.value}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={method.action}
                  className={`mt-4 w-full py-3 bg-gradient-to-r ${method.color} font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg gradient-keep-white`}
                >
                  <ExternalLink className="w-4 h-4" />
                  {method.actionLabel}
                </motion.button>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              onClick={copyTelegram}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full glass rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center justify-between hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Copy className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300 text-xs sm:text-sm">{t('contact.copy_tg')}</span>
              </div>
              {copiedTg ? (
                <span className="text-green-400 text-sm flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> {t('contact.copied')}
                </span>
              ) : (
                <span className="text-primary-light text-sm">@{telegramUsername}</span>
              )}
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">{t('contact.why_title')}</h3>

            <div className="space-y-5">
              {whyItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-light" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={`https://t.me/${telegramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 sm:mt-8 w-full py-3.5 sm:py-4 bg-gradient-to-r from-primary to-accent font-bold rounded-xl sm:rounded-2xl shadow-xl shadow-primary/25 flex items-center justify-center gap-2 text-base sm:text-lg gradient-keep-white"
            >
              <Send className="w-5 h-5" />
              {t('contact.main_cta')}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
