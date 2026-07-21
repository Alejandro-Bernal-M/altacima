'use client';

import { useState } from 'react';
import { Menu, X, MessageCircle, Globe } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  // Mensaje personalizado de WhatsApp
  const whatsappUrl = `https://wa.me/573146594963?text=${encodeURIComponent(
    t('whatsappMessage')
  )}`;

  // Alterna el idioma manteniendo la ruta actual
  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/') || '/';

    router.push(newPath);
    setIsOpen(false);
  };

  // Enlaces adaptados a los pilares de Alta Cima
  const navItems = [
    { href: '#legacy', label: t('nav.legacy') },
    { href: '#tourism', label: t('nav.tourism') },
    { href: '#events', label: t('nav.events') },
    { href: '#industrial', label: t('nav.industrial') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[#0D131A]/70 px-6 py-3.5 backdrop-blur-xl shadow-2xl">

          {/* LOGO DE ALTA CIMA */}
          <a href="#" className="cursor-pointer flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-black tracking-widest text-white uppercase">
              ALTA <span className="text-orange-500">CIMA</span>
            </span>
          </a>

          {/* NAVEGACIÓN ESCRITORIO */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-7 text-xs xl:text-sm font-semibold uppercase tracking-wider text-gray-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition hover:text-orange-500 cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* BOTONES DE ACCIÓN Y SELECTOR DE IDIOMA */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* Language Switcher */}
            <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs font-bold text-zinc-400">
              <Globe size={14} className="text-zinc-400" />
              <button
                onClick={() => handleLanguageChange('es')}
                className={`transition cursor-pointer hover:text-white ${
                  currentLocale === 'es' ? 'text-orange-500 font-extrabold' : ''
                }`}
              >
                {t('lang.es')}
              </button>
              <span className="text-zinc-700">|</span>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`transition cursor-pointer hover:text-white ${
                  currentLocale === 'en' ? 'text-orange-500 font-extrabold' : ''
                }`}
              >
                {t('lang.en')}
              </button>
            </div>

            {/* WhatsApp CTA Desktop */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition hover:bg-orange-600 shadow-md hover:shadow-orange-500/20 cursor-pointer"
            >
              <MessageCircle size={18} />
              {t('cta')}
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-1 cursor-pointer focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {isOpen && (
        <div className="absolute top-[85px] left-4 right-4 z-40 rounded-3xl border border-zinc-800 bg-[#0D131A]/95 p-6 backdrop-blur-2xl lg:hidden shadow-2xl">
          <nav className="mb-6">
            <ul className="flex flex-col gap-4 text-center text-sm font-medium uppercase tracking-wider text-gray-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition hover:text-orange-500 cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* WhatsApp CTA Mobile */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-orange-500 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600 cursor-pointer w-full shadow-lg"
          >
            <MessageCircle size={18} />
            {t('cta')}
          </a>
        </div>
      )}
    </header>
  );
}