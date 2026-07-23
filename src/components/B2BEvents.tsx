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
    <section id="eventos-b2b" className="relative w-full py-24 bg-[#0A0F14] text-white overflow-hidden">
      
      {/* Luz ambiental sutil */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Banner Superior Corporativo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-red-500 font-extrabold uppercase tracking-widest text-xs sm:text-sm px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 inline-block mb-3">
              {t('badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mt-2">
              {t('heading')}
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mt-4 leading-relaxed">
              {t('subheading')}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-8 rounded-3xl bg-[#131B24] border border-red-600/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3.5 rounded-2xl bg-red-950/40 text-red-500 border border-red-500/20">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{t('statCard.title')}</h4>
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-wider">{t('statCard.subtitle')}</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                {t('statCard.desc')}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-3.5 px-6 rounded-full transition-all duration-300 shadow-lg shadow-red-900/30 text-sm uppercase tracking-wider transform hover:scale-[1.02]"
              >
                <span>{t('ctaButton')}</span>
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
            className="group p-8 rounded-3xl bg-[#131B24] border border-white/10 hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="p-3.5 w-fit rounded-2xl bg-[#0D131A] border border-white/5 group-hover:border-red-500/30 group-hover:bg-red-950/20 transition-all mb-6 text-red-500">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 group-hover:text-red-500 transition-colors tracking-tight">
                {t('cards.rigging.title')}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {t('cards.rigging.desc')}
              </p>
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-white/5">
              {features.slice(0, 2).map((feat, i) => (
                <li key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Teambuilding & +80 Juegos */}
          <motion.div
            variants={itemVariants}
            className="group p-8 rounded-3xl bg-[#131B24] border border-white/10 hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="p-3.5 w-fit rounded-2xl bg-[#0D131A] border border-white/5 group-hover:border-red-500/30 group-hover:bg-red-950/20 transition-all mb-6 text-red-500">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 group-hover:text-red-500 transition-colors tracking-tight">
                {t('cards.teambuilding.title')}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {t('cards.teambuilding.desc')}
              </p>
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-white/5">
              {features.slice(2, 4).map((feat, i) => (
                <li key={i} className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3: Logística a Medida */}
          <motion.div
            variants={itemVariants}
            className="group p-8 rounded-3xl bg-[#131B24] border border-white/10 hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="p-3.5 w-fit rounded-2xl bg-[#0D131A] border border-white/5 group-hover:border-red-500/30 group-hover:bg-red-950/20 transition-all mb-6 text-red-500">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 group-hover:text-red-500 transition-colors tracking-tight">
                {t('cards.custom.title')}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {t('cards.custom.desc')}
              </p>
            </div>
            <div className="pt-4 border-t border-white/5">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider bg-red-600/10 px-3 py-1.5 rounded-full border border-red-500/20 inline-block">
                {t('cards.custom.highlight')}
              </span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}