import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import LegacyAuthority from "@/components/LegacyAuthority";
import AdventureServices from "@/components/AdventureServices"; // 1. Turismo de Aventura
import B2BEvents from "@/components/B2BEvents"; // 2. Eventos & Montajes Corporativos
import IndustrialRope from "@/components/IndustrialRope"; // 3. Trabajo Industrial
import ImageGalleryCarousel from '@/components/ImageGalleryCarousel';
import LeadForm from "@/components/LeadForm"; // Formulario modal/estático + WhatsApp CTA
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0D131A] text-white overflow-x-hidden">
      {/* Barra de navegación fija */}
      <Navbar />
      {/* Hero: Impacto visual + CTA directo a WhatsApp */}
      <Hero />

      {/* Trayectoria: +20 años de historia, retorno de la marca */}
      <LegacyAuthority />

      {/* Galería de fotos: Carrusel de imágenes de alta calidad */}
      {/* <ImageGalleryCarousel /> */}

      {/* PILAR 1: Turismo de Aventura (Cascadas, Espeleología, Parapente) */}
      <AdventureServices />

      {/* PILAR 2: Eventos & Trabajo en Equipo (Muros móviles, Tirolesas, +80 Juegos) */}
      <B2BEvents />

      {/* PILAR 3: Servicios Industriales & Alturas */}
      <IndustrialRope />

      {/* Muestra de Línea de Ropa / Equipo Especializado */}
      {/* <GearStoreHighlight /> */}

      {/* Prueba Social y Respaldo Técnico (Petzl Rope Trip, ITRA, Normativa) */}
      {/* <SafetyAndCredentials /> */}

      {/* Sección principal de Conversión / Cotización a la Medida */}
      <LeadForm /> 

      <Footer />
    </main>
  );
}