'use client';

import { useTranslations } from 'next-intl';
import { Compass, HardHat, ChevronDown } from 'lucide-react';

interface CategorySplitterProps {
  onSelectCategory: (category: 'adventure' | 'professional') => void;
}

export default function CategorySplitter({ onSelectCategory }: CategorySplitterProps) {
  const t = useTranslations('CategorySplitter');

  const handleChoice = (category: 'adventure' | 'professional') => {
    onSelectCategory(category);
    
    setTimeout(() => {
      const target = document.getElementById('pilar-contenido');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section 
      id="pilares" 
      className="relative w-full min-h-screen bg-[#070B0E] flex flex-col justify-between px-4 sm:px-8 lg:px-12 py-12 lg:py-16 overflow-hidden"
    >
      
      {/* Título Superior */}
      <div className="pt-8 sm:pt-12 pb-6 text-center max-w-3xl mx-auto z-10 space-y-3 shrink-0">
        <span className="text-red-500 font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 inline-block">
          {t('badge')}
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
          {t('heading')}
        </h2>
      </div>

      {/* Tarjetas de Selección */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl w-full mx-auto my-6 min-h-[440px] lg:min-h-[500px] z-10">
        
        {/* TARJETA AVENTURA */}
        <div 
          role="button"
          tabIndex={0}
          onClick={() => handleChoice('adventure')}
          onKeyDown={(e) => e.key === 'Enter' && handleChoice('adventure')}
          className="relative cursor-pointer rounded-3xl overflow-hidden border border-white/10 hover:border-red-500 transition-all duration-500 group flex flex-col justify-end p-6 sm:p-10 outline-none focus:border-red-500 shadow-2xl"
        >
          {/* Imagen Local */}
          <div 
            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-50 group-hover:opacity-70"
            style={{ backgroundImage: `url('/images/adventure-bg.jpg')` }}
          />

          {/* Capa de Degradado Oscuro Intenso para Contraste */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 via-40% to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

          {/* Contenido de la Tarjeta */}
          <div className="relative z-20 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold bg-red-600 text-white uppercase tracking-wider shadow-md">
                {t('adventure.tag')}
              </span>
              <Compass className="w-9 h-9 text-red-500 group-hover:rotate-45 transition-transform duration-300 drop-shadow-md" />
            </div>

            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-none drop-shadow-lg">
              {t('adventure.title')}
            </h3>

            <p className="text-red-400 font-extrabold text-base sm:text-lg lg:text-xl drop-shadow-md">
              {t('adventure.subtitle')}
            </p>

            <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-lg hidden sm:block font-normal drop-shadow">
              {t('adventure.desc')}
            </p>
          </div>
        </div>

        {/* TARJETA PROFESIONAL */}
        <div 
          role="button"
          tabIndex={0}
          onClick={() => handleChoice('professional')}
          onKeyDown={(e) => e.key === 'Enter' && handleChoice('professional')}
          className="relative cursor-pointer rounded-3xl overflow-hidden border border-white/10 hover:border-red-500 transition-all duration-500 group flex flex-col justify-end p-6 sm:p-10 outline-none focus:border-red-500 shadow-2xl"
        >
          {/* Imagen Local */}
          <div 
            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-50 group-hover:opacity-70"
            style={{ backgroundImage: `url('/images/professional-bg.jpg')` }}
          />

          {/* Capa de Degradado Oscuro Intenso para Contraste */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 via-40% to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

          {/* Contenido de la Tarjeta */}
          <div className="relative z-20 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold bg-white/15 text-white uppercase tracking-wider backdrop-blur-md border border-white/20 shadow-md">
                {t('professional.tag')}
              </span>
              <HardHat className="w-9 h-9 text-red-500 group-hover:-translate-y-1 transition-transform duration-300 drop-shadow-md" />
            </div>

            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-none drop-shadow-lg">
              {t('professional.title')}
            </h3>

            <p className="text-red-400 font-extrabold text-base sm:text-lg lg:text-xl drop-shadow-md">
              {t('professional.subtitle')}
            </p>

            <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-lg hidden sm:block font-normal drop-shadow">
              {t('professional.desc')}
            </p>
          </div>
        </div>

      </div>

      {/* Indicador de Ayuda inferior */}
      <div className="text-center pt-4 z-10 shrink-0">
        <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest flex items-center justify-center gap-1.5 font-semibold animate-bounce">
          {t('selectInstruction')} <ChevronDown className="w-4 h-4 text-red-500" />
        </span>
      </div>
    </section>
  );
}