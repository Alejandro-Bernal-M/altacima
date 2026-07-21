'use client';

import { useTranslations, useLocale } from 'next-intl';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const t = useTranslations('Footer');
  const currentLocale = useLocale();

  const whatsappUrl = `https://wa.me/573146594963?text=${encodeURIComponent(
    t('whatsappMessage')
  )}`;

  const navLinks = [
    { href: '#legacy', label: t('links.legacy') },
    { href: '#tourism', label: t('links.tourism') },
    { href: '#events', label: t('links.events') },
    { href: '#industrial', label: t('links.industrial') },
    { href: '#contact', label: t('links.contact') },
  ];

  return (
    <footer className="w-full bg-[#070B0E] text-white border-t border-white/5 pt-16 pb-12">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Columna 1: Brand / Eslogan (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <span className="text-2xl font-black tracking-widest text-white uppercase">
                ALTA <span className="text-orange-500">CIMA</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t('brandDescription')}
            </p>
            {/* Redes Sociales */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#131B24] border border-white/10 text-gray-400 hover:text-orange-500 hover:border-orange-500/40 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#131B24] border border-white/10 text-gray-400 hover:text-orange-500 hover:border-orange-500/40 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#131B24] border border-white/10 text-gray-400 hover:text-orange-500 hover:border-orange-500/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">
              {t('sections.navigation')}
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-gray-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Datos de Contacto (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">
              {t('sections.contact')}
            </h4>
            <div className="flex items-start gap-3 text-sm text-gray-400">
              <Phone size={16} className="text-orange-500 shrink-0 mt-0.5" />
              <span>+57 314 659 4963</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-gray-400">
              <Mail size={16} className="text-orange-500 shrink-0 mt-0.5" />
              <span>contacto@altacima.co</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-gray-400">
              <MapPin size={16} className="text-orange-500 shrink-0 mt-0.5" />
              <span>Colombia</span>
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Alta Cima Aventura. {t('rights')}</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-400 transition-colors cursor-pointer">
              {t('privacy')}
            </span>
            <span className="hover:text-gray-400 transition-colors cursor-pointer">
              {t('terms')}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}