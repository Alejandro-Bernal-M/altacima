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

  const whatsappGear = `https://wa.me/573146594963?text=${encodeURIComponent(
    t('whatsappGearMessage')
  )}`;

  return (
    <section id="industrial" className="relative w-full py-24 bg-[#0D131A] text-white overflow-hidden">
      
      {/* Luz ambiental difusa */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* ENCABEZADO Y SERVICIOS INDUSTRIALES */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-extrabold uppercase tracking-widest text-xs sm:text-sm px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 inline-block mb-3">
            {t('badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mt-2">
            {t('heading')}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-4 leading-relaxed">
            {t('subheading')}
          </p>
        </div>

        {/* Grid de Servicios Industriales */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Card 1: Trabajos en Altura e Instalaciones */}
          <motion.div
            variants={cardVariants}
            className="group p-8 rounded-3xl bg-[#131B24] border border-white/10 hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="p-3.5 w-fit rounded-2xl bg-[#0D131A] border border-white/5 group-hover:border-red-500/30 group-hover:bg-red-950/20 transition-all mb-6 text-red-500">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 group-hover:text-red-500 transition-colors tracking-tight">
                {t('services.access.title')}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t('services.access.desc')}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Venta, Inspección y Mantenimiento de Equipos */}
          <motion.div
            variants={cardVariants}
            className="group p-8 rounded-3xl bg-[#131B24] border border-white/10 hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="p-3.5 w-fit rounded-2xl bg-[#0D131A] border border-white/5 group-hover:border-red-500/30 group-hover:bg-red-950/20 transition-all mb-6 text-red-500">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 group-hover:text-red-500 transition-colors tracking-tight">
                {t('services.maintenance.title')}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t('services.maintenance.desc')}
              </p>
            </div>
          </motion.div>

          {/* Card 3: Muros Fijos, Rigging y Seguridad */}
          <motion.div
            variants={cardVariants}
            className="group p-8 rounded-3xl bg-[#131B24] border border-white/10 hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="p-3.5 w-fit rounded-2xl bg-[#0D131A] border border-white/5 group-hover:border-red-500/30 group-hover:bg-red-950/20 transition-all mb-6 text-red-500">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 group-hover:text-red-500 transition-colors tracking-tight">
                {t('services.consulting.title')}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t('services.consulting.desc')}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* MÓDULO DESTACADO: ROPA & EQUIPO ESPECIALIZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-[#131B24] border border-red-600/30 p-8 sm:p-12 overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-xl bg-red-950/40 text-red-500 border border-red-500/20">
                  <Shirt className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                  {t('gearBadge')}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight">
                {t('gearTitle')}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {t('gearDesc')}
              </p>

              <div className="flex flex-wrap gap-3 text-xs font-semibold text-gray-300 mb-6">
                <span className="flex items-center gap-2 bg-[#0D131A] px-4 py-2 rounded-full border border-white/10">
                  <Check className="w-4 h-4 text-red-500 shrink-0" /> {t('gearItems.pants')}
                </span>
                <span className="flex items-center gap-2 bg-[#0D131A] px-4 py-2 rounded-full border border-white/10">
                  <Check className="w-4 h-4 text-red-500 shrink-0" /> {t('gearItems.hoodies')}
                </span>
                <span className="flex items-center gap-2 bg-[#0D131A] px-4 py-2 rounded-full border border-white/10">
                  <Check className="w-4 h-4 text-red-500 shrink-0" /> {t('gearItems.durability')}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center">
              <a
                href={whatsappGear}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-red-900/30 transition-all duration-300 text-sm uppercase tracking-wider transform hover:scale-[1.02] group"
              >
                <span>{t('gearCta')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}