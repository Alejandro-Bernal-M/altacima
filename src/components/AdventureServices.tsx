'use client';

import { motion, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Mountain, Compass, Hammer, ArrowRight } from 'lucide-react';

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

export default function AdventureServices() {
  const t = useTranslations('AdventureServices');

  const whatsappUrl = (activityName: string) =>
    `https://wa.me/573146594963?text=${encodeURIComponent(
      `${t('whatsappPrefix')}: ${activityName}`
    )}`;

  const activities = [
    {
      id: 'daytrip',
      icon: <Mountain className="w-6 h-6 text-red-500" />,
      title: t('activities.daytrip.title'),
      desc: t('activities.daytrip.desc'),
      tag: t('activities.daytrip.tag'),
    },
    {
      id: 'expeditions',
      icon: <Compass className="w-6 h-6 text-red-500" />,
      title: t('activities.expeditions.title'),
      desc: t('activities.expeditions.desc'),
      tag: t('activities.expeditions.tag'),
    },
    {
      id: 'construction',
      icon: <Hammer className="w-6 h-6 text-red-500" />,
      title: t('activities.construction.title'),
      desc: t('activities.construction.desc'),
      tag: t('activities.construction.tag'),
    },
  ];

  return (
    <section id="turismo-aventura" className="relative w-full py-24 bg-[#0D131A] text-white overflow-hidden">
      
      {/* Luz difusa de fondo */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Encabezado de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-red-500 font-extrabold uppercase tracking-widest text-xs sm:text-sm px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 inline-block mb-3">
              {t('badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {t('heading')}
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-base leading-relaxed">
            {t('subheading')}
          </p>
        </div>

        {/* Grid de 3 Tarjetas Principales sin imagen */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {activities.map((act) => (
            <motion.div
              key={act.id}
              variants={cardVariants}
              className="group relative rounded-3xl p-8 bg-[#131B24] border border-white/10 hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:shadow-red-900/10 hover:-translate-y-1"
            >
              {/* Contenido Superior */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#0D131A] border border-white/5 group-hover:border-red-500/30 group-hover:bg-red-950/20 transition-all">
                    {act.icon}
                  </div>
                  <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-red-600/10 text-red-400 border border-red-500/20 uppercase tracking-wider">
                    {act.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-red-500 transition-colors tracking-tight">
                  {act.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {act.desc}
                </p>
              </div>

              {/* Contenido Inferior - Botón/CTA */}
              <div className="pt-4 border-t border-white/5">
                <a
                  href={whatsappUrl(act.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm font-bold text-white hover:text-red-500 transition-all duration-300 group-hover:translate-x-1 uppercase tracking-wider"
                >
                  <span>{t('ctaCard')}</span>
                  <div className="p-2 rounded-full bg-red-600/10 border border-red-500/20 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}