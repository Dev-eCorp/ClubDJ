"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import NavBar from "@/components/NavBar";
import Courses from "@/components/sections/Courses";
import Equipments from "@/components/sections/Equipments";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import TestimonialsData from "@/data/Testimonials";
import CoursesData from "@/data/Courses";
import EquipmentsData from "@/data/Equipments";
import StatsData from "@/data/Stats";
import galleryData from "@/data/Gallery";

export default function ClubDJSchoolIbague() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About stats={StatsData} testimonials={TestimonialsData} />

      {/* Courses Section */}
      <Courses courses={CoursesData} />

      {/* Equipment Section */}
      <Equipments equipments={EquipmentsData} />

      {/* Gallery Section */}
      <Gallery galleryImages={galleryData} />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
