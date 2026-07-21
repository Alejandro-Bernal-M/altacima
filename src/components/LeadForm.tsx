'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MessageCircle, Send, User, Building, Phone, HelpCircle } from 'lucide-react';

export default function LeadForm() {
  const t = useTranslations('LeadForm');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'tourism', // 'tourism' | 'events' | 'industrial' | 'gear'
    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mapeo del servicio seleccionado para el texto del mensaje
    const serviceLabels: Record<string, string> = {
      tourism: t('options.tourism'),
      events: t('options.events'),
      industrial: t('options.industrial'),
      gear: t('options.gear'),
    };

    const selectedServiceLabel = serviceLabels[formData.service] || formData.service;

    // Construcción del mensaje estructurado para WhatsApp
    const message = 
`📌 *NUEVA SOLICITUD DE COTIZACIÓN - ALTA CIMA*
👤 *Nombre:* ${formData.name}
📞 *Teléfono:* ${formData.phone}
🎯 *Servicio de Interés:* ${selectedServiceLabel}
💬 *Detalles / Mensaje:* ${formData.notes || 'Sin detalles adicionales'}`;

    const whatsappUrl = `https://wa.me/573146594963?text=${encodeURIComponent(message)}`;

    // Redirección a WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-[#0A0F14] text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        <div className="rounded-3xl bg-[#131B24] border border-orange-500/20 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Elementos decorativos de fondo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Encabezado */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              {t('badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">
              {t('heading')}
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3">
              {t('subheading')}
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Campo Nombre */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  {t('labels.name')} *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('placeholders.name')}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#0D131A] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Campo Teléfono */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  {t('labels.phone')} *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('placeholders.phone')}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#0D131A] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 text-sm transition-colors"
                  />
                </div>
              </div>

            </div>

            {/* Selector de Servicio */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                {t('labels.service')} *
              </label>
              <div className="relative">
                <HelpCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#0D131A] border border-white/10 text-white focus:outline-none focus:border-orange-500 text-sm transition-colors cursor-pointer appearance-none"
                >
                  <option value="tourism">{t('options.tourism')}</option>
                  <option value="events">{t('options.events')}</option>
                  <option value="industrial">{t('options.industrial')}</option>
                  <option value="gear">{t('options.gear')}</option>
                </select>
              </div>
            </div>

            {/* Campo Notas / Mensaje */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                {t('labels.notes')}
              </label>
              <textarea
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                placeholder={t('placeholders.notes')}
                className="w-full p-4 rounded-xl bg-[#0D131A] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 text-sm transition-colors resize-none"
              />
            </div>

            {/* Botón de Envío */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-orange-500/20 transition-all cursor-pointer text-base"
            >
              <MessageCircle className="w-5 h-5" />
              {t('submitButton')}
            </motion.button>
          </form>

        </div>

      </div>
    </section>
  );
}