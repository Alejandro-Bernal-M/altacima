'use client';

import { motion, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ShieldCheck, Award, Users, Mountain } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function LegacyAuthority() {
  const t = useTranslations('LegacyAuthority');

  const stats = [
    {
      icon: <Mountain className="w-8 h-8 text-orange-500" />,
      number: t('stats.years.number'),
      title: t('stats.years.title'),
      desc: t('stats.years.desc'),
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      number: t('stats.games.number'),
      title: t('stats.games.title'),
      desc: t('stats.games.desc'),
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      number: t('stats.competitions.number'),
      title: t('stats.competitions.title'),
      desc: t('stats.competitions.desc'),
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
      number: t('stats.safety.number'),
      title: t('stats.safety.title'),
      desc: t('stats.safety.desc'),
    },
  ];

  return (
    <section id="legacy" className="relative w-full py-24 bg-[#0A0F14] text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            {t('badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 mb-6 tracking-tight">
            {t('heading')}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            {t('subheading')}
          </p>
        </div>

        {/* Grid de Estadísticas / Tarjetas de Autoridad */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative p-8 rounded-2xl bg-[#131B24] border border-white/5 hover:border-orange-500/30 transition-all duration-300 shadow-xl group hover:-translate-y-2"
            >
              <div className="mb-6 p-4 rounded-xl bg-[#0D131A] inline-block border border-white/5 group-hover:border-orange-500/20 transition-colors">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-white mb-2 tracking-tight">
                {stat.number}
              </h3>
              <h4 className="text-lg font-bold text-orange-400 mb-2">
                {stat.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Banner de Respaldo Técnico (Petzl / ITRA) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#131B24] via-[#1A2430] to-[#131B24] border border-orange-500/20 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="text-left max-w-2xl">
            <h4 className="text-xl font-bold text-white mb-2">
              {t('banner.title')}
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t('banner.description')}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-wider text-orange-400 uppercase">
              Petzl Rope Trip
            </span>
            <span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-wider text-orange-400 uppercase">
              ITRA Certified
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}