"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  const isSchool = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Definir items según la ruta actual
  const navItems = isSchool
    ? [
        { label: "Inicio", href: "#inicio" },
        { label: "Cursos", href: "#cursos" },
        { label: "Galeria", href: "#galeria" },
        { label: "Contacto", href: "#contacto" },
        { label: "Servicios", href: "/servicios" },
      ]
    : [
        { label: "Inicio", href: "#inicio" },
        { label: "Eventos", href: "#eventos" },
        { label: "Alquiler", href: "#alquiler" },
        { label: "Venta", href: "#venta" },
        { label: "Academia", href: "/" },
      ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isVisible ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/Completo_blanco.svg"
              alt="Club DJ School Logo"
              width={0}
              height={0}
              sizes="(max-width: 768px) 120px, 160px"
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex space-x-8 text-lg text-white font-medium">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="hover:text-pink-500 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
