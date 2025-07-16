import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { HiRadio } from "react-icons/hi2";

interface FooterProps {
  name: string;
  description: string;
  facebook: string;
  instagram: string;
}

const Footer = ({ name, description, facebook, instagram }: FooterProps) => {
  return (
    <footer className="bg-black py-16 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
              {name}
            </h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              {description}
            </p>
            <div className="flex space-x-6">
              <Link href={instagram} target="_blank" aria-label="Instagram">
                <FaInstagram className="text-pink-500 hover:text-pink-400 transition hover:scale-110 w-8 h-8" />
              </Link>
              <Link href={facebook} target="_blank" aria-label="Facebook">
                <FaFacebookF className="text-blue-500 hover:text-blue-400 transition hover:scale-110 w-8 h-8" />
              </Link>
              <Link
                href="https://wa.me/573163573337"
                target="_blank"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-green-500 hover:text-green-400 transition hover:scale-110 w-8 h-8" />
              </Link>
              <Link
                href="https://clubdjradio.com/"
                target="_blank"
                aria-label="Radio Online"
              >
                <HiRadio className="text-purple-400 hover:text-purple-300 transition hover:scale-110 w-8 h-8" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Cursos</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/#cursos" className="hover:text-purple-400">
                  Curso DJ Básico
                </Link>
              </li>
              <li>
                <Link href="/#cursos" className="hover:text-purple-400">
                  Mezcla en Vivo
                </Link>
              </li>
              <li>
                <Link href="/#cursos" className="hover:text-purple-400">
                  Producción Musical
                </Link>
              </li>
              <li>
                <Link href="/#cursos" className="hover:text-purple-400">
                  Clases Privadas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Enlaces</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="#about" className="hover:text-purple-400">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/#equipos"
                  className="hover:text-purple-400"
                >
                  Tienda de Equipos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/#servicios"
                  className="hover:text-purple-400"
                >
                  Eventos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
