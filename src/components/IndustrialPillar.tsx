'use client';

import { useTranslations } from 'next-intl';
import { 
  ArrowRight, 
  ShieldCheck, 
  HardHat, 
  Wrench, 
  Shirt, 
  Building2, 
  Award,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

interface IndustrialPillarProps {
  onSwitchToAdventure: () => void;
  onResetSelection?: () => void;
}

export default function IndustrialPillar({ 
  onSwitchToAdventure, 
  onResetSelection 
}: IndustrialPillarProps) {
  const t = useTranslations('IndustrialRope');
  const tLegacy = useTranslations('LegacyAuthority');

  return (
    <section id="pilar-contenido" className="w-full bg-[#0D131A] py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 animate-fade-in">
      
      {/* BARRA SUPERIOR DE NAVEGACIÓN Y REFERENCIA */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-wrap items-center justify-between gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
            {t('navigation.currentLocation')} <strong className="text-white">{t('navigation.categoryName')}</strong>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {onResetSelection && (
            <button
              onClick={onResetSelection}
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors py-1.5 px-3 rounded-lg hover:bg-white/5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('navigation.changeSelection')}</span>
            </button>
          )}

          <button
            onClick={onSwitchToAdventure}
            className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 px-4 py-2 rounded-full text-xs font-bold text-white transition-all group cursor-pointer"
          >
            <span>{t('navigation.switchPrompt')} <strong className="text-red-400 group-hover:text-red-300">{t('navigation.switchTarget')}</strong></span>
            <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* CABECERA PRINCIPAL */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-red-500 font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 inline-block">
            {t('badge')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            {t('heading')}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            {t('subheading')}
          </p>
        </div>

        {/* 1. CUADRO GRANDE (PRINCIPAL): MONTAJES DE INGENIERÍA Y ANCLAJES */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#131B26] to-[#0D131A] border-2 border-red-600/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Header del cuadro principal */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-600 text-white uppercase tracking-wider inline-block">
                {t('engineering.badge')}
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                {t('engineering.title')}
              </h3>
            </div>
            
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-5 py-2.5 rounded-2xl w-fit">
              <ShieldCheck className="w-5 h-5 text-red-500" />
              <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">
                {t('engineering.certBadge')}
              </span>
            </div>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-4xl">
            {t('engineering.desc')}
          </p>

          {/* Los 3 pilares de los montajes de ingeniería */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Líneas de Vida */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-5 hover:border-red-500/50 transition-all duration-300 space-y-3 group">
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl w-fit group-hover:bg-red-500 group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6 text-red-500 group-hover:text-white" />
              </div>
              <h4 className="font-black text-base text-white uppercase">
                {t('engineering.featured1.title')}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t('engineering.featured1.desc')}
              </p>
            </div>

            {/* Anclajes y Rigging */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-5 hover:border-red-500/50 transition-all duration-300 space-y-3 group">
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl w-fit group-hover:bg-red-500 group-hover:text-white transition-colors">
                <Building2 className="w-6 h-6 text-red-500 group-hover:text-white" />
              </div>
              <h4 className="font-black text-base text-white uppercase">
                {t('engineering.featured2.title')}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t('engineering.featured2.desc')}
              </p>
            </div>

            {/* Sistemas de Rescate */}
            <div className="bg-black/40 border border-white/10 rounded-2xl p-5 hover:border-red-500/50 transition-all duration-300 space-y-3 group">
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl w-fit group-hover:bg-red-500 group-hover:text-white transition-colors">
                <CheckCircle2 className="w-6 h-6 text-red-500 group-hover:text-white" />
              </div>
              <h4 className="font-black text-base text-white uppercase">
                {t('engineering.featured3.title')}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                {t('engineering.featured3.desc')}
              </p>
            </div>

          </div>
        </div>

        {/* 2. DOS CUADROS PEQUEÑOS (GRID 2 COLUMNAS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Cuadro Pequeño 1: Trabajos de Difícil Acceso */}
          <div className="bg-[#131B26] border border-white/10 hover:border-red-500/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-red-500">
                  <HardHat className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold px-3 py-1 bg-white/10 text-gray-300 rounded-full uppercase tracking-wider">
                  {t('services.access.tag')}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                {t('services.access.title')}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {t('services.access.desc')}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-gray-400">
              <span>{t('services.access.footerLeft')}</span>
              <span className="text-red-500">{t('services.access.footerRight')}</span>
            </div>
          </div>

          {/* Cuadro Pequeño 2: Venta, Mantenimiento EPP y Ropa Técnica */}
          <div className="bg-[#131B26] border border-white/10 hover:border-red-500/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-red-500 flex gap-2">
                  <Wrench className="w-6 h-6" />
                  <Shirt className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold px-3 py-1 bg-red-600/20 text-red-400 border border-red-500/30 rounded-full uppercase tracking-wider">
                  {t('services.equipmentApparel.tag')}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                {t('services.equipmentApparel.title')}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {t('services.equipmentApparel.desc')}
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-gray-400">
              <span>{t('services.equipmentApparel.footerLeft')}</span>
              <span className="text-red-500">{t('services.equipmentApparel.footerRight')}</span>
            </div>
          </div>

        </div>

        {/* RESPALDO TÉCNICO / TRAYECTORIA Y CERTIFICACIÓN */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-red-500">
              <Award className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">{tLegacy('badge')}</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white uppercase">
              {t('guarantee.title')}
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {tLegacy('subheading')}
            </p>
          </div>

          <div className="bg-black/50 border border-white/10 p-6 rounded-2xl text-center min-w-[180px] w-full md:w-auto">
            <span className="text-4xl font-black text-red-500">{t('guarantee.statNumber')}</span>
            <p className="text-[11px] font-bold text-white mt-1 uppercase tracking-wider">{t('guarantee.statTitle')}</p>
          </div>
        </div>

      </div>
    </section>
  );
}