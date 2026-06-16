"use client";

import { useState } from "react";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation"; 

export default function Navbar() {
  const t = useTranslations("Navbar");
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  
  const [isOpen, setIsOpen] = useState(false);

  // Alterna el idioma manteniendo la ruta actual
  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    
    // Si usas el middleware estándar de next-intl, reemplazamos el locale en la URL
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || "/";
    
    router.push(newPath);
    setIsOpen(false);
  };

  const navItems = [
    { href: "#elements", label: t("nav.elements") },
    { href: "#about", label: t("nav.about") },
    { href: "#paths", label: t("nav.paths") },
    { href: "#mission", label: t("nav.mission") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-xl">

          {/* LOGO */}
          <a href="#hero" className="cursor-pointer">
            <h2 className="text-lg font-black tracking-[0.35em] text-lime-400">
              GODAI
            </h2>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 text-sm uppercase tracking-wider text-zinc-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-lime-400 cursor-pointer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ACTION BUTTONS & LANGUAGE SELECTOR */}
          <div className="flex items-center gap-4">
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs font-bold text-zinc-400">
              <Globe size={14} className="text-zinc-500" />
              <button
                onClick={() => handleLanguageChange("es")}
                className={`transition cursor-pointer hover:text-white ${currentLocale === "es" ? "text-lime-400" : ""}`}
              >
                {t("lang.es")}
              </button>
              <span className="text-zinc-700">|</span>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`transition cursor-pointer hover:text-white ${currentLocale === "en" ? "text-lime-400" : ""}`}
              >
                {t("lang.en")}
              </button>
            </div>

            {/* WhatsApp CTA Desktop */}
            <a
              href="https://wa.me/573146594963"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-300 cursor-pointer"
            >
              <MessageCircle size={18} />
              {t("cta")}
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

      {/* MOBILE DROP-DOWN MENU */}
      {isOpen && (
        <div className="absolute top-[90px] left-6 right-6 z-40 rounded-3xl border border-zinc-800 bg-black/95 p-6 backdrop-blur-xl lg:hidden shadow-2xl">
          <nav className="mb-6">
            <ul className="flex flex-col gap-5 text-center text-base font-medium uppercase tracking-wider text-zinc-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 transition hover:text-lime-400 cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* WhatsApp CTA Mobile */}
          <a
            href="https://wa.me/573146594963"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-lime-400 py-4 text-base font-bold text-black transition hover:bg-lime-300 cursor-pointer w-full"
          >
            <MessageCircle size={20} />
            {t("cta")}
          </a>
        </div>
      )}
    </header>
  );
}