'use client';

import { motion, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Building2, ShieldAlert, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function B2BEvents() {
  const t = useTranslations('B2BEvents');

  const whatsappUrl = `https://wa.me/573146594963?text=${encodeURIComponent(
    t('whatsappMessage')
  )}`;

  const features = [
    t('features.item1'),
    t('features.item2'),
    t('features.item3'),
    t('features.item4'),
  ];

  return (
    <section id="events" className="relative w-full py-24 bg-[#0A0F14] text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Banner Superior Corporativo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              {t('badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 tracking-tight">
              {t('heading')}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mt-4 leading-relaxed">
              {t('subheading')}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-8 rounded-3xl bg-[#131B24] border border-orange-500/20 shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{t('statCard.title')}</h4>
                  <p className="text-sm text-gray-400">{t('statCard.subtitle')}</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                {t('statCard.desc')}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-6 rounded-full transition-all duration-300 shadow-lg text-sm"
              >
                {t('ctaButton')}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Grid de Servicios / Juegos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Card 1: Montajes Móviles */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-3xl bg-[#131B24] border border-white/5 hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 w-fit rounded-2xl bg-black/40 border border-white/10 mb-6 text-orange-500">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {t('cards.rigging.title')}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {t('cards.rigging.desc')}
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-white/5">
              {features.slice(0, 2).map((feat, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Teambuilding & +80 Juegos */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-3xl bg-[#131B24] border border-white/5 hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 w-fit rounded-2xl bg-black/40 border border-white/10 mb-6 text-orange-500">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {t('cards.teambuilding.title')}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {t('cards.teambuilding.desc')}
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-white/5">
              {features.slice(2, 4).map((feat, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3: Logística a Medida */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-3xl bg-[#131B24] border border-white/5 hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 w-fit rounded-2xl bg-black/40 border border-white/10 mb-6 text-orange-500">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {t('cards.custom.title')}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {t('cards.custom.desc')}
              </p>
            </div>
            <div className="pt-4 border-t border-white/5">
              <span className="text-xs font-bold text-orange-400">
                {t('cards.custom.highlight')}
              </span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}