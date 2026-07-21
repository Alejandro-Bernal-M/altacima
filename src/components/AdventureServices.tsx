'use client';

import { motion, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Compass, Waves, Mountain, Wind, ArrowRight } from 'lucide-react';

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
      `${t('whatsappPrefix')} ${activityName}`
    )}`;

  const activities = [
    {
      id: 'waterfalls',
      icon: <Waves className="w-6 h-6 text-orange-500" />,
      title: t('activities.waterfalls.title'),
      desc: t('activities.waterfalls.desc'),
      tag: t('activities.waterfalls.tag'),
      image: '/images/waterfall.webp', // Asegúrate de colocar las imágenes correspondientes
    },
    {
      id: 'caving',
      icon: <Compass className="w-6 h-6 text-orange-500" />,
      title: t('activities.caving.title'),
      desc: t('activities.caving.desc'),
      tag: t('activities.caving.tag'),
      image: '/images/caving.webp',
    },
    {
      id: 'paragliding',
      icon: <Wind className="w-6 h-6 text-orange-500" />,
      title: t('activities.paragliding.title'),
      desc: t('activities.paragliding.desc'),
      tag: t('activities.paragliding.tag'),
      image: '/images/paragliding.webp',
    },
    {
      id: 'trekking',
      icon: <Mountain className="w-6 h-6 text-orange-500" />,
      title: t('activities.trekking.title'),
      desc: t('activities.trekking.desc'),
      tag: t('activities.trekking.tag'),
      image: '/images/trekking.webp',
    },
  ];

  return (
    <section id="tourism" className="relative w-full py-24 bg-[#0D131A] text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              {t('badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 tracking-tight">
              {t('heading')}
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-base leading-relaxed">
            {t('subheading')}
          </p>
        </div>

        {/* Grid de Actividades */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {activities.map((act) => (
            <motion.div
              key={act.id}
              variants={cardVariants}
              className="group relative rounded-3xl overflow-hidden bg-[#131B24] border border-white/10 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between min-h-[380px]"
            >
              {/* Imagen de Fondo si existe con overlay */}
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0A0F14] via-[#0A0F14]/70 to-transparent z-10" />
              
              {/* Contenido Superior */}
              <div className="relative z-20 p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                    {act.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                    {act.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {act.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                  {act.desc}
                </p>
              </div>

              {/* Contenido Inferior - Action */}
              <div className="relative z-20 px-8 pb-8 pt-4">
                <a
                  href={whatsappUrl(act.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-orange-400 hover:text-orange-300 transition-all group-hover:translate-x-1"
                >
                  {t('ctaCard')}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}