import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Zap } from "lucide-react";
import SoundVisualizer from "../SoundVisualizer";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo con overlay oscuro */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/im1.png"
          alt="DJ en acción con luces neón"
          fill
          className="object-cover"
          priority
          quality={75}
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      </div>

      {/* Glitch Effect Overlay */}
      <div className="absolute inset-0 z-15 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8 mx-4">
          <h1 className="font-black leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] text-4xl sm:text-6xl md:text-8xl">
            {/* Mobile version */}
            <div className="block md:hidden">
              <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                CONVIÉRTETE
              </div>
              <div className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                EN DJ O
              </div>
              <div className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                PRODUCTOR
              </div>
            </div>

            {/* Desktop version */}
            <div className="hidden md:block">
              <div>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  CONVIÉRTETE EN
                </span>
              </div>
              <div>
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  DJ O PRODUCTOR
                </span>
              </div>
            </div>
          </h1>
        </div>

        <p className="text-xl md:text-3xl mb-12 text-gray-200 font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
          <span className="font-seeker text-purple-400">
            Explora tu talento.
          </span>
          <span className="font-seeker text-pink-400">
            Aprende con los mejores.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center">
          <Button
            size="lg"
            className="cursor-pointer bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white 
    px-6 py-4 text-base 
    sm:px-10 sm:py-5 sm:text-lg 
    font-bold rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl shadow-purple-500/25"
          >
            <Zap className="w-4 h-4 mr-2 sm:w-6 sm:h-6 sm:mr-3" />
            INSCRÍBETE AHORA
          </Button>
        </div>
      </div>

      <SoundVisualizer />
    </section>
  );
};

export default Hero;
