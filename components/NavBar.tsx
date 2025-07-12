import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isVisible ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="Club DJ School Logo"
            width={0}
            height={0}
            sizes="(max-width: 768px) 120px, 160px"
            className="h-10 w-auto"
          />
          <div className="hidden md:flex space-x-8">
            <Link
              href="#inicio"
              className="hover:text-purple-400 transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#cursos"
              className="hover:text-purple-400 transition-colors"
            >
              Cursos
            </Link>
            <Link
              href="#equipos"
              className="hover:text-purple-400 transition-colors"
            >
              Equipos
            </Link>
            <Link
              href="#contacto"
              className="hover:text-purple-400 transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
