"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import NavBar from "@/components/NavBar";
import Courses from "@/components/sections/Courses";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import TestimonialsData from "@/data/school/Testimonials";
import CoursesData from "@/data/school/Courses";
import schoolStats from "@/data/school/Stats";
import galleryData from "@/data/school/Gallery";

export default function ClubDJSchoolIbague() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <Hero
        titleLines={["CONVIÉRTETE EN", "DJ PROFESIONAL"]}
        subtitle="Explora tu talento. Aprende con los mejores."
        backgroundImage="/im1.png"
        socialLinks={{
          instagram: "https://www.instagram.com/clubdjschoolibague/",
          facebook: "https://www.facebook.com/ClubDJSchoolIbague",
        }}
      />

      {/* About Section */}
      <About
        stats={schoolStats}
        testimonials={TestimonialsData}
        title="SOBRE NOSOTROS"
        description="Somos la academia de DJs y productores musicales más reconocida de Ibagué."
        highlight="Transformamos pasiones en profesiones"
        testimonialTitle="LO QUE DICEN NUESTROS"
        testimonialHighlight="ESTUDIANTES"
        showTestimonials={true}
      />

      {/* Courses Section */}
      <Courses courses={CoursesData} context="school" />

      {/* Gallery Section */}
      <Gallery galleryImages={galleryData} />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer
        name="Club DJ School Ibagué"
        description="La academia líder en formación de DJs y productores musicales en Ibagué. Transformamos tu pasión por la música en una carrera profesional exitosa."
        instagram="https://www.instagram.com/clubdjschoolibague/"
        facebook="https://www.facebook.com/ClubDJSchoolIbague"
      />
    </div>
  );
}
