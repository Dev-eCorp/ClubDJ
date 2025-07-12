import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import { Stat, Testimonial } from "@/lib/types";

interface AboutProps {
  stats: Stat[];
  testimonials: Testimonial[];
}

const About: React.FC<AboutProps> = ({ stats, testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(testimonialInterval);
    };
  }, [testimonials.length]);

  return (
    <section className="py-12 md:py-18 px-4 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-tight break-words">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              SOBRE NOSOTROS
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Somos la academia de DJs y productores musicales más reconocida de
            Ibagué.
            <span className="text-purple-400">
              {" "}
              Transformamos pasiones en profesiones
            </span>{" "}
            a través de educación de clase mundial y experiencia práctica en el
            mundo de la música electrónica.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4 text-purple-400">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            LO QUE DICEN NUESTROS{" "}
            <span className="text-pink-400">ESTUDIANTES</span>
          </h3>
          <Card className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <Image
                  src={
                    testimonials[currentTestimonial].image || "/placeholder.svg"
                  }
                  alt={testimonials[currentTestimonial].name}
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-purple-400"
                />
              </div>
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>
              <p className="text-xl md:text-2xl mb-8 italic text-gray-200 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div>
                <p className="font-bold text-xl text-white">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-purple-400 font-medium">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentTestimonial
                    ? "bg-purple-400 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
