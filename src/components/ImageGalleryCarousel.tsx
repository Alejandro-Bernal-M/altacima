'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export default function ImageGalleryCarousel() {
  const t = useTranslations('ImageGalleryCarousel');

  // Galería de fotos con categorías de los pilares de Alta Cima
  const slides = [
    {
      id: 1,
      image: '/images/slides/waterfall.jpg', // Reemplazar por tus imágenes reales
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full py-20 bg-[#070B0E] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">
              <Camera className="w-4 h-4" />
              <span>{t('badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t('heading')}
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            {t('subheading')}
          </p>
        </div>

        {/* Contenedor del Carrusel */}
        <div className="relative rounded-3xl overflow-hidden bg-[#131B24] border border-white/10 h-[400px] sm:h-[500px] md:h-[600px] shadow-2xl">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* Imagen de fondo (puedes usar <Image /> de Next.js) */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slides[currentIndex].image})`,
                }}
              />
              {/* Superposición de gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F14] via-[#0A0F14]/30 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Información sobrepuesta en la foto */}
          <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-wider mb-2 inline-block shadow-md">
                {slides[currentIndex].category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {slides[currentIndex].title}
              </h3>
            </div>

            {/* Botones de Navegación */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-black/60 hover:bg-orange-500 border border-white/10 text-white transition-all cursor-pointer backdrop-blur-md"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-black/60 hover:bg-orange-500 border border-white/10 text-white transition-all cursor-pointer backdrop-blur-md"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Indicadores / Puntos */}
          <div className="absolute top-6 right-6 z-10 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex ? 'w-8 bg-orange-500' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}