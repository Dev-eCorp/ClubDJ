// components/sections/Hero.tsx
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Zap } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { HiRadio } from "react-icons/hi2";

interface HeroProps {
  titleLines: string[];
  subtitle?: string;
  ctaText?: string;
  backgroundImage: string;
  showSocials?: boolean;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
  };
}

const Hero = ({
  titleLines,
  subtitle,
  ctaText = "INSCRÍBETE AHORA",
  backgroundImage,
  showSocials = true,
  socialLinks,
}: HeroProps) => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-10">
        <Image
          src={backgroundImage}
          alt="Fondo del hero"
          fill
          className="object-cover"
          priority
          quality={75}
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      </div>

      <div className="absolute inset-0 z-15 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse" />
      </div>

      {/* Contenido */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 className="font-black leading-tight text-4xl sm:text-6xl md:text-8xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] mb-6">
          {titleLines.map((line, idx) => (
            <span
              key={idx}
              className={`block ${
                idx === 0
                  ? "bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
                  : idx === 1
                  ? "bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"
                  : "text-white"
              } ${
                idx < 2 ? "bg-clip-text text-transparent" : ""
              } text-4xl md:text-6xl mt-4`}
            >
              {line}
            </span>
          ))}
        </h1>

        {subtitle && (
          <p className="text-xl md:text-3xl mb-12 text-gray-200 font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            {subtitle}
          </p>
        )}

        {ctaText && (
          <Button
            size="lg"
            className="cursor-pointer bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white 
            px-6 py-4 text-base sm:px-10 sm:py-5 sm:text-lg 
            font-bold rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl shadow-purple-500/25"
          >
            <Zap className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3" />
            {ctaText}
          </Button>
        )}
      </div>

      {/* Redes sociales */}
      {showSocials && socialLinks && (
        <div className="relative z-20 mt-16 text-center">
          <p className="text-gray-200 text-lg sm:text-xl mb-4 font-semibold">
            Síguenos y mantente al ritmo del beat
          </p>
          <div className="flex justify-center items-center gap-6 text-3xl">
            {socialLinks.instagram && (
              <Link
                href={socialLinks.instagram}
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram className="text-pink-500 hover:text-pink-400 transition hover:scale-110" />
              </Link>
            )}
            {socialLinks.facebook && (
              <Link
                href={socialLinks.facebook}
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-blue-500 hover:text-blue-400 transition hover:scale-110" />
              </Link>
            )}
            <Link
              href="https://wa.me/573163573337"
              target="_blank"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-green-500 hover:text-green-400 transition hover:scale-110" />
            </Link>
            <Link
              href="https://clubdjradio.com/"
              target="_blank"
              aria-label="Radio Online"
            >
              <HiRadio className="text-purple-400 hover:text-purple-300 transition hover:scale-110" />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
