'use client';

import { motion, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Wrench, Shield, HardHat, Shirt, ArrowRight, Check } from 'lucide-react';

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

export default function IndustrialRope() {
  const t = useTranslations('IndustrialRope');

  const whatsappIndustrial = `https://wa.me/573146594963?text=${encodeURIComponent(
    t('whatsappIndustrialMessage')
  )}`;

  const whatsappGear = `https://wa.me/573146594963?text=${encodeURIComponent(
    t('whatsappGearMessage')
  )}`;

  return (
    <section id="industrial" className="relative w-full py-24 bg-[#0D131A] text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* ENCABEZADO Y SERVICIOS INDUSTRIALES */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
            {t('badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 tracking-tight">
            {t('heading')}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 leading-relaxed">
            {t('subheading')}
          </p>
        </div>

        {/* Grid de Servicios Industriales */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Card 1: Trabajos en Altura */}
          <motion.div
            variants={cardVariants}
            className="p-8 rounded-3xl bg-[#131B24] border border-white/5 hover:border-orange-500/30 transition-all duration-300"
          >
            <div className="p-3 w-fit rounded-2xl bg-black/40 border border-white/10 mb-6 text-orange-500">
              <HardHat className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {t('services.access.title')}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('services.access.desc')}
            </p>
          </motion.div>

          {/* Card 2: Mantenimiento e Inspección */}
          <motion.div
            variants={cardVariants}
            className="p-8 rounded-3xl bg-[#131B24] border border-white/5 hover:border-orange-500/30 transition-all duration-300"
          >
            <div className="p-3 w-fit rounded-2xl bg-black/40 border border-white/10 mb-6 text-orange-500">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {t('services.maintenance.title')}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('services.maintenance.desc')}
            </p>
          </motion.div>

          {/* Card 3: Rigging y Asesoría */}
          <motion.div
            variants={cardVariants}
            className="p-8 rounded-3xl bg-[#131B24] border border-white/5 hover:border-orange-500/30 transition-all duration-300"
          >
            <div className="p-3 w-fit rounded-2xl bg-black/40 border border-white/10 mb-6 text-orange-500">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {t('services.consulting.title')}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('services.consulting.desc')}
            </p>
          </motion.div>
        </motion.div>

        {/* MÓDULO DESTACADO: ROPA & EQUIPO ESPECIALIZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-r from-[#131B24] via-[#1A2430] to-[#131B24] border border-orange-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                  <Shirt className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                  {t('gearBadge')}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {t('gearTitle')}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {t('gearDesc')}
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-300 mb-6">
                <span className="flex items-center gap-1.5 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10">
                  <Check className="w-4 h-4 text-orange-500" /> {t('gearItems.pants')}
                </span>
                <span className="flex items-center gap-1.5 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10">
                  <Check className="w-4 h-4 text-orange-500" /> {t('gearItems.hoodies')}
                </span>
                <span className="flex items-center gap-1.5 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10">
                  <Check className="w-4 h-4 text-orange-500" /> {t('gearItems.durability')}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center">
              <a
                href={whatsappGear}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all text-sm group"
              >
                {t('gearCta')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}