'use client';
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <nav className="bg-[#0D131A]/90 backdrop-blur-md border border-white/10 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-2xl transition-all duration-300">
        
        {/* LOGO: ISOTIPO + MARCA */}
        <a href="#" className="cursor-pointer flex items-center gap-3 group py-1">
          {/* Montaña en gradiente rojo */}
          <svg 
            viewBox="0 0 521 479" 
            className="h-8 sm:h-10 w-auto transition-transform group-hover:scale-105"
          >
            <defs>
              <linearGradient id="altaCimaRed" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF0B0B" />
                <stop offset="60%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="#7F1D1D" />
              </linearGradient>
            </defs>
            <g transform="translate(0, 479) scale(0.1, -0.1)" fill="url(#altaCimaRed)">
              <path d="M2274 4530 c-102 -33 -251 -142 -412 -303 -221 -218 -445 -537 -717
              -1022 -109 -195 -377 -747 -562 -1160 -25 -55 -51 -113 -59 -130 -58 -128
              -297 -829 -309 -906 -13 -86 25 -159 92 -175 34 -9 118 36 190 101 150 136
              404 475 679 905 312 490 367 581 526 864 96 173 107 211 70 248 -20 20 -22 20
              -47 4 -14 -10 -37 -36 -51 -59 -241 -409 -390 -643 -779 -1217 -238 -352 -479
              -660 -516 -660 -25 0 -24 11 7 122 104 376 269 768 609 1448 144 288 182 358
              332 615 345 587 461 748 696 970 162 154 315 246 440 267 201 34 275 -72 843
              -1192 94 -186 245 -445 384 -660 190 -293 590 -757 830 -962 172 -147 592
              -438 632 -438 38 0 14 29 -69 85 -209 139 -418 310 -661 543 -304 290 -433
              445 -664 797 -142 217 -176 274 -283 475 -43 80 -92 172 -110 205 -18 33 -136
              251 -262 485 -311 576 -328 604 -399 670 -76 70 -141 94 -264 97 -83 2 -118
              -1 -166 -17z"/>
            </g>
          </svg>

          {/* Texto legible en blanco */}
          <span className="text-base sm:text-lg font-black tracking-widest text-white uppercase leading-none whitespace-nowrap">
            ALTA <span className="text-red-600">CIMA</span>
          </span>
        </a>

        {/* MENÚ DESKTOP */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <a href="#trayectoria" className="text-xs xl:text-sm font-semibold tracking-wider text-gray-300 hover:text-white transition-colors uppercase">
            Trayectoria
          </a>
          <a href="#turismo-aventura" className="text-xs xl:text-sm font-semibold tracking-wider text-gray-300 hover:text-white transition-colors uppercase">
            Turismo Aventura
          </a>
          <a href="#eventos-b2b" className="text-xs xl:text-sm font-semibold tracking-wider text-gray-300 hover:text-white transition-colors uppercase">
            Eventos B2B
          </a>
          <a href="#industrial" className="text-xs xl:text-sm font-semibold tracking-wider text-gray-300 hover:text-white transition-colors uppercase">
            Trabajo Industrial
          </a>
          <a href="#contacto" className="text-xs xl:text-sm font-semibold tracking-wider text-gray-300 hover:text-white transition-colors uppercase">
            Contacto
          </a>
        </div>

        {/* CONTROLES DERECHA (IDIOMA + BOTÓN) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Selector Idioma */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-gray-300 bg-white/5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
            </svg>
            <span className="text-red-500 font-bold">ES</span>
            <span className="text-gray-500">|</span>
            <span className="hover:text-white cursor-pointer transition-colors">EN</span>
          </div>

          {/* Botón Cotizar */}
          <a
            href="#cotizar"
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs xl:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-red-900/30 transition-all transform hover:scale-105 uppercase tracking-wider"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.85 5.971 5.971 0 00-.012-3.12 8.163 8.163 0 01-1.324-4.5C3 7.444 7.03 3.75 12 3.75s9 3.694 9 8.25z" />
            </svg>
            Cotizar
          </a>
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-[#0D131A]/95 backdrop-blur-lg border border-white/10 rounded-2xl p-4 flex flex-col gap-3 shadow-xl">
          <a href="#trayectoria" onClick={() => setIsOpen(false)} className="text-sm font-semibold tracking-wider text-gray-300 hover:text-white uppercase py-1">Trayectoria</a>
          <a href="#turismo-aventura" onClick={() => setIsOpen(false)} className="text-sm font-semibold tracking-wider text-gray-300 hover:text-white uppercase py-1">Turismo Aventura</a>
          <a href="#eventos-b2b" onClick={() => setIsOpen(false)} className="text-sm font-semibold tracking-wider text-gray-300 hover:text-white uppercase py-1">Eventos B2B</a>
          <a href="#industrial" onClick={() => setIsOpen(false)} className="text-sm font-semibold tracking-wider text-gray-300 hover:text-white uppercase py-1">Trabajo Industrial</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="text-sm font-semibold tracking-wider text-gray-300 hover:text-white uppercase py-1">Contacto</a>
          
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 text-xs font-semibold text-gray-300">
              <span className="text-red-500 font-bold">ES</span>
              <span>|</span>
              <span className="hover:text-white cursor-pointer">EN</span>
            </div>
            <a
              href="#cotizar"
              onClick={() => setIsOpen(false)}
              className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-4 py-2 rounded-full uppercase tracking-wider"
            >
              Cotizar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}