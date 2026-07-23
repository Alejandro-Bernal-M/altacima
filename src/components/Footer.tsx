'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MessageCircle, MapPin, Phone, X, ShieldCheck, FileText } from 'lucide-react';
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const t = useTranslations('Footer');
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const whatsappUrl = `https://wa.me/573146594963?text=${encodeURIComponent(
    t('whatsappMessage')
  )}`;

  const navLinks = [
    { href: '#legacy', label: t('links.legacy') },
    { href: '#tourism', label: t('links.tourism') },
    { href: '#eventos-b2b', label: t('links.events') },
    { href: '#industrial', label: t('links.industrial') },
    { href: '#contacto', label: t('links.contact') },
  ];

  const phoneNumbers = [
    { display: '+57 314 659 4963', raw: '573146594963' },
    { display: '+57 311 363 4230', raw: '573113634230' },
    { display: '+57 316 526 2249', raw: '573165262249' },
  ];

  return (
    <footer className="w-full bg-[#070B0E] text-white border-t border-white/5 pt-16 pb-12 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Columna 1: Brand / Eslogan */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <span className="text-2xl font-black tracking-widest text-white uppercase">
                ALTA <span className="text-red-500">CIMA</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t('brandDescription')}
            </p>

            {/* Redes Sociales */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/alta_cima"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#131B24] border border-white/10 text-gray-400 hover:text-red-500 hover:border-red-500/40 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              {/* <a
                href="https://facebook.com/alta_cima"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#131B24] border border-white/10 text-gray-400 hover:text-red-500 hover:border-red-500/40 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a> */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#131B24] border border-white/10 text-gray-400 hover:text-red-500 hover:border-red-500/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4">
              {t('sections.navigation')}
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-gray-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Datos de Contacto */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4">
              {t('sections.contact')}
            </h4>
            
            <div className="space-y-2">
              {phoneNumbers.map((phone) => (
                <div key={phone.raw} className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone size={16} className="text-red-500 shrink-0" />
                  <a
                    href={`https://wa.me/${phone.raw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {phone.display}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-400 pt-1">
              <MapPin size={16} className="text-red-500 shrink-0" />
              <span>Colombia</span>
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Alta Cima Aventura. {t('rights')}</p>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-gray-300 transition-colors cursor-pointer underline underline-offset-4 decoration-white/20"
            >
              {t('privacy')}
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-gray-300 transition-colors cursor-pointer underline underline-offset-4 decoration-white/20"
            >
              {t('terms')}
            </button>
          </div>
        </div>

      </div>

      {/* ==================== MODAL FLOTANTE LEGAL ==================== */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          
          <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#131B24] border border-red-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col text-gray-300">
            
            {/* Header del Modal */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20">
                  {activeModal === 'privacy' ? <ShieldCheck className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {activeModal === 'privacy' ? 'Política de Privacidad' : 'Términos de Servicio'}
                </h3>
              </div>

              <button
                onClick={() => setActiveModal(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-red-600 hover:text-white text-gray-400 transition-all cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenido Scrolleable */}
            <div className="overflow-y-auto pr-2 my-6 space-y-5 text-sm leading-relaxed text-gray-300 custom-scrollbar">
              
              {activeModal === 'privacy' ? (
                <>
                  <p>
                    En <strong className="text-white">Alta Cima Aventura</strong>, nos tomamos muy en serio la protección y confidencialidad de los datos personales de nuestros clientes y usuarios.
                  </p>

                  <h4 className="text-white font-bold text-base pt-2">1. Recopilación de Información</h4>
                  <p>
                    Los datos recabados a través de nuestro sitio web o formularios de WhatsApp (nombre, teléfono y detalles de cotización) son utilizados únicamente para la atención comercial, coordinación logística y respuesta a solicitudes de servicio.
                  </p>

                  <h4 className="text-white font-bold text-base pt-2">2. Uso y Protección de Datos</h4>
                  <p>
                    Garantizamos que su información personal no será vendida, alquilada ni compartida con terceros bajo ningún concepto, salvo requerimiento legal o judicial explícito. Sus datos permanecen protegidos bajo protocolos de seguridad y almacenamiento seguro.
                  </p>

                  <h4 className="text-white font-bold text-base pt-2">3. Comunicaciones Informativas</h4>
                  <p>
                    Podremos utilizar su contacto para enviar detalles técnicos de reservas, promociones o información sobre salidas de aventura, manteniendo siempre el derecho a cancelar la recepción de mensajes en cualquier momento.
                  </p>

                  <h4 className="text-white font-bold text-base pt-2">4. Derechos del Titular</h4>
                  <p>
                    Usted podrá solicitar en cualquier momento la actualización, rectificación o eliminación total de sus datos personales de nuestras bases de datos enviando un mensaje directo a nuestras líneas oficiales de atención.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Al contratar cualquiera de los servicios de <strong className="text-white">Alta Cima Aventura</strong> (Turismo, Construcción, Eventos B2B o Trabajos en Altura), el usuario o cliente acepta de manera expresa los siguientes términos y condiciones.
                  </p>

                  <h4 className="text-white font-bold text-base pt-2">1. Seguridad y Cumplimiento Técnico</h4>
                  <p>
                    Todas las actividades operadas por Alta Cima se rigen por estrictos protocolos de gestión de riesgo y certificaciones internacionales. Los participantes y contratantes se comprometen a acatar al 100% las instrucciones del equipo técnico y guías a cargo.
                  </p>

                  <h4 className="text-white font-bold text-base pt-2">2. Declaración de Aptitud Física y Salud</h4>
                  <p>
                    Para servicios de turismo de aventura o eventos corporativos, el participante declara encontrarse en condiciones de salud física y mental óptimas para el desarrollo de la actividad, notificando previamente cualquier condición médica relevante.
                  </p>

                  <h4 className="text-white font-bold text-base pt-2">3. Reservas y Cancelaciones</h4>
                  <p>
                    Las reservas de salidas, pasadías o construcciones requieren el anticipo fijado al momento de la cotización. En caso de cancelaciones por condiciones meteorológicas extremas o de fuerza mayor, se reprogramará la actividad priorizando siempre la seguridad del grupo.
                  </p>

                  <h4 className="text-white font-bold text-base pt-2">4. Infraestructura e Ingeniería</h4>
                  <p>
                    Las obras de ingeniería de aventura (muros, tirolesas, parques) y montajes industriales cuentan con sus respectivas garantías de instalación y fichas técnicas de equipos certificados.
                  </p>
                </>
              )}

            </div>

            {/* Footer del Modal */}
            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Entendido
              </button>
            </div>

          </div>

        </div>
      )}
    </footer>
  );
}