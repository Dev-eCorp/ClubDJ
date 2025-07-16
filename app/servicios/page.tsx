"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import NavBar from "@/components/NavBar";
import Equipments from "@/components/sections/Equipments";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import EquipmentsData from "@/data/services/Equipments";
import servicesStats from "@/data/services/Stats";
import ServicesData from "@/data/services/Services";
import galleryData from "@/data/school/Gallery";
import Courses from "@/components/sections/Courses";

export default function ClubDJServices() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <Hero
        titleLines={["SOLUCIONES MUSICALES", "PARA TUS EVENTOS"]}
        subtitle="Alquiler, producción y venta de equipos profesionales"
        ctaText="COTIZA TU EVENTO"
        backgroundImage="/im1.png"
        socialLinks={{
          instagram: "https://www.instagram.com/clubdjradioonline/",
          facebook: "https://www.facebook.com/ClubDJRadio",
        }}
      />

      {/* About Section */}
      <About
        stats={servicesStats}
        title="EXPERTOS EN EVENTOS"
        description="Ofrecemos soluciones profesionales en producción de eventos, alquiler y venta de equipos de sonido e iluminación."
        highlight="Tu evento, en manos de especialistas"
        showTestimonials={false}
      />

      <Courses courses={ServicesData} context="services" />

      {/* Equipment Section */}
      <Equipments equipments={EquipmentsData} />

      {/* Gallery Section */}
      <Gallery galleryImages={galleryData} />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer
        name="Club DJ Radio"
        description="Ofrecemos soluciones profesionales para eventos, alquiler de equipos y producción audiovisual en Ibagué y sus alrededores. Sonido, luces y DJs expertos a tu servicio."
        instagram="https://www.instagram.com/clubdjradioonline/"
        facebook="https://www.facebook.com/ClubDJRadio"
      />
    </div>
  );
}
