'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 1.02,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  }),
};

export default function ImageGalleryCarousel() {
  const t = useTranslations('ImageGalleryCarousel');

  const slides = [
    {
      id: 1,
      image: '/images/slides/waterfall.jpg',
      title: t('slides.waterfall.title'),
      category: t('slides.waterfall.category'),
    },
    {
      id: 2,
      image: '/images/slides/climbing.jpg',
      title: t('slides.climbing.title'),
      category: t('slides.climbing.category'),
    },
    {
      id: 3,
      image: '/images/slides/ropes.jpg',
      title: t('slides.industrial.title'),
      category: t('slides.industrial.category'),
    },
    {
      id: 4,
      image: '/images/slides/teambuilding.jpg',
      title: t('slides.teambuilding.title'),
      category: t('slides.teambuilding.category'),
    },
  ];

  const [[page, direction], setPage] = useState([0, 0]);

  const currentIndex = ((page % slides.length) + slides.length) % slides.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const jumpToSlide = (index: number) => {
    const newDir = index > currentIndex ? 1 : -1;
    setPage([index, newDir]);
  };

  return (
    <section className="relative w-full py-20 bg-[#070B0E] text-white overflow-hidden">
      
      {/* Luz ambiental sutil de fondo */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-red-500 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-2">
              <Camera className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {t('heading')}
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed">
            {t('subheading')}
          </p>
        </div>

        {/* Contenedor Principal del Carrusel */}
        <div className="relative rounded-3xl overflow-hidden bg-[#131B24] border border-white/10 h-[420px] sm:h-[520px] md:h-[620px] shadow-2xl group">
          
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              {/* Imagen Optimizada Next.js */}
              <Image
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority={currentIndex === 0}
                className="object-cover object-center"
              />

              {/* Overlays Gradientes para Asegurar Legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F14] via-[#0A0F14]/40 to-black/20 z-10" />
            </motion.div>
          </AnimatePresence>

          {/* Información sobrepuesta en la imagen */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="px-4 py-1.5 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-widest mb-3 inline-block shadow-lg shadow-red-900/40 border border-red-500/30">
                {slides[currentIndex].category}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                {slides[currentIndex].title}
              </h3>
            </div>

            {/* Controles de Navegación (Flechas) */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => paginate(-1)}
                className="p-3.5 rounded-full bg-black/60 hover:bg-red-600 border border-white/20 hover:border-red-500 text-white transition-all duration-300 cursor-pointer backdrop-blur-md shadow-lg transform active:scale-95"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-3.5 rounded-full bg-black/60 hover:bg-red-600 border border-white/20 hover:border-red-500 text-white transition-all duration-300 cursor-pointer backdrop-blur-md shadow-lg transform active:scale-95"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Indicadores Superiores (Puntos/Barras de Estado) */}
          <div className="absolute top-6 right-6 z-20 flex gap-2 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => jumpToSlide(idx)}
                aria-label={`Ir a diapositiva ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-8 bg-red-600 shadow-md shadow-red-600/50'
                    : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}