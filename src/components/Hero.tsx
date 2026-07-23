'use client';

import Image from 'next/image';
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
    <section className="relative w-full min-h-screen flex items-center justify-start pt-28 sm:pt-36 pb-16 overflow-hidden bg-[#0D131A]">
      
      {/* Imagen de Fondo Optimizada + Overlays de Lectura */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt={t('imageAlt')}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Overlay Oscuro Base */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        {/* Gradiente adicional desde la izquierda para hacer resaltar aún más el texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D131A] via-[#0D131A]/70 to-transparent z-10" />
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
          className="font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.1] tracking-tight mb-6 drop-shadow-md"
        >
          {t('titlePrefix')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
            {t('titleHighlight')}
          </span>{' '}
          {t('titleSuffix')}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed drop-shadow"
        >
          {t('description')}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 items-start sm:items-center"
        >
          {/* Botón Principal (WhatsApp) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-base md:text-lg px-8 py-4 rounded-full shadow-lg shadow-red-900/40 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider"
          >
            <FaWhatsapp className="text-2xl" />
            {t('primaryCta')}
          </a>

          {/* Botón Secundario */}
          <a
            href="#contact"
            className="flex items-center gap-2 text-base md:text-lg font-semibold text-gray-200 hover:text-white px-6 py-3.5 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 uppercase tracking-wider"
          >
            {t('secondaryCta')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}