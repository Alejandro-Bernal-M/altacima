'use client';

import { motion, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ShieldCheck, Award, Users, Mountain } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function LegacyAuthority() {
  const t = useTranslations('LegacyAuthority');

  const stats = [
    {
      icon: <Mountain className="w-7 h-7 text-red-500" />,
      number: t('stats.years.number'),
      title: t('stats.years.title'),
      desc: t('stats.years.desc'),
    },
    {
      icon: <Users className="w-7 h-7 text-red-500" />,
      number: t('stats.games.number'),
      title: t('stats.games.title'),
      desc: t('stats.games.desc'),
    },
    {
      icon: <Award className="w-7 h-7 text-red-500" />,
      number: t('stats.competitions.number'),
      title: t('stats.competitions.title'),
      desc: t('stats.competitions.desc'),
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-red-500" />,
      number: t('stats.safety.number'),
      title: t('stats.safety.title'),
      desc: t('stats.safety.desc'),
    },
  ];

  return (
    <section id="trayectoria" className="relative w-full py-24 bg-[#0A0F14] text-white overflow-hidden">
      
      {/* Sutil resplandor de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-extrabold uppercase tracking-widest text-xs sm:text-sm px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 inline-block mb-3">
            {t('badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-2 mb-6 tracking-tight leading-tight">
            {t('heading')}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            {t('subheading')}
          </p>
        </div>

        {/* Grid de Estadísticas / Tarjetas de Autoridad */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative p-8 rounded-2xl bg-[#131B24]/90 border border-white/10 hover:border-red-600/50 transition-all duration-300 shadow-xl hover:shadow-red-900/20 group hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 p-3.5 rounded-xl bg-[#0D131A] inline-flex items-center justify-center border border-white/5 group-hover:border-red-600/30 group-hover:bg-red-950/20 transition-all">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-black text-white mb-1 tracking-tight">
                  {stat.number}
                </h3>
                <h4 className="text-base font-bold text-red-500 mb-3 uppercase tracking-wider">
                  {stat.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Banner de Respaldo Técnico (Petzl / ITRA / Arborismo) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#131B24] via-[#1A2430] to-[#131B24] border border-red-600/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
        >
          <div className="text-left max-w-3xl z-10">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              {t('banner.title')}
            </h4>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {t('banner.description')}
            </p>
          </div>

          
        </motion.div>

      </div>
    </section>
  );
}