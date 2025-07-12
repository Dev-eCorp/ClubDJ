import { Facebook, Instagram, Music, Volume2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-16 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Club DJ School Ibagué
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              La academia líder en formación de DJs y productores musicales en
              Ibagué. Transformamos tu pasión por la música en una carrera
              profesional exitosa.
            </p>
            <div className="flex space-x-6">
              <Link
                aria-label="Instagram"
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors transform hover:scale-110"
              >
                <Instagram className="w-8 h-8" />
              </Link>
              <Link
                aria-label="Facebook"
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <Facebook className="w-8 h-8" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <Music className="w-8 h-8" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110"
              >
                <Volume2 className="w-8 h-8" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Cursos</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-colors"
                >
                  Curso DJ Básico
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-colors"
                >
                  Mezcla en Vivo
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-colors"
                >
                  Producción Musical
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-colors"
                >
                  Clases Privadas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Enlaces</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-colors"
                >
                  Tienda de Equipos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-colors"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-purple-400 transition-colors"
                >
                  Blog Musical
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Club DJ School Ibagué. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
