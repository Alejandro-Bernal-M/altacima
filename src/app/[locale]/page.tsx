'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySplitter from "@/components/CategorySplitter";
import AdventurePillar from "@/components/AdventurePillar";
import IndustrialPillar from "@/components/IndustrialPillar";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<'adventure' | 'professional' | null>(null);

  const handleSelectCategory = (category: 'adventure' | 'professional') => {
    setSelectedCategory(category);

    // Scroll suave hacia la sección elegida
    setTimeout(() => {
      const target = document.getElementById('pilar-contenido');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <main className="bg-[#0D131A] text-white overflow-x-hidden">
      <Navbar />
      
      {/* 1. Hero Principal */}
      <Hero />

      {/* 2. Selección Obligatoria: Solo se muestra si AÚN NO se ha elegido categoría */}
      {!selectedCategory && (
        <CategorySplitter onSelectCategory={handleSelectCategory} />
      )}

      {/* 3. Contenido Dinámico: Aparece en el flujo una vez seleccionada la opción */}
      {selectedCategory && (
        <>
          {selectedCategory === 'adventure' ? (
            <AdventurePillar 
              onSwitchToProfessional={() => setSelectedCategory('professional')} 
            />
          ) : (
            <IndustrialPillar 
              onSwitchToAdventure={() => setSelectedCategory('adventure')} 
            />
          )}

        </>
      )}
      <LeadForm defaultCategory={selectedCategory} />

      <Footer />
    </main>
  );
}