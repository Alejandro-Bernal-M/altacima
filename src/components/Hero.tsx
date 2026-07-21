'use client';

import { motion, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FaWhatsapp } from 'react-icons/fa';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Hero() {
  const t = useTranslations('Hero');

  // Enlace directo a WhatsApp con mensaje traducido
  const whatsappUrl = `https://wa.me/573146594963?text=${encodeURIComponent(
    t('whatsappMessage')
  )}`;

  return (
    <section className="relative w-full h-screen flex items-center justify-start overflow-hidden bg-[#0D131A]">
      {/* Imagen de fondo / Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt={t('imageAlt')}
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Contenido Principal Animado */}
      <motion.div
        className="relative z-20 container mx-auto px-6 md:px-12 text-white max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight tracking-tight mb-6"
        >
          {t('titlePrefix')}{' '}
          <span className="text-orange-500">{t('titleHighlight')}</span>{' '}
          {t('titleSuffix')}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
        >
          {t('description')}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 items-start sm:items-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base md:text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaWhatsapp className="text-2xl" />
            {t('primaryCta')}
          </a>

          <a
            href="#lead-form"
            className="text-base md:text-lg font-semibold text-white/90 hover:text-white border-b-2 border-transparent hover:border-orange-500 transition-all duration-300 pb-1"
          >
            {t('secondaryCta')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}