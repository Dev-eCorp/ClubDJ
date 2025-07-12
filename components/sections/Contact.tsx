"use client";

import React, { useId } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const messageId = useId();

  return (
    <section
      id="contacto"
      role="region"
      aria-label="Sección de contacto"
      className="py-12 md:py-18 px-4 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-tight break-words">
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
              CONTÁCTANOS
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            ¿Listo para comenzar tu{" "}
            <span className="text-blue-400">carrera musical</span>? ¡Hablemos!
          </p>
        </div>

        {/* Formulario y datos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-full">
          {/* Formulario */}
          <Card className="w-full max-w-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white">
                Envíanos un mensaje
              </CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Completa el formulario y te responderemos en menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={nameId}
                    className="text-gray-300 text-sm block mb-1"
                  >
                    Nombre completo
                  </label>
                  <Input
                    id={nameId}
                    name="name"
                    required
                    placeholder="Tu nombre completo"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor={phoneId}
                    className="text-gray-300 text-sm block mb-1"
                  >
                    Teléfono
                  </label>
                  <Input
                    id={phoneId}
                    name="phone"
                    type="tel"
                    required
                    placeholder="Tu teléfono"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 h-12"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor={emailId}
                  className="text-gray-300 text-sm block mb-1"
                >
                  Correo electrónico
                </label>
                <Input
                  id={emailId}
                  name="email"
                  type="email"
                  required
                  placeholder="Tu correo electrónico"
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 h-12"
                />
              </div>
              <div>
                <label
                  htmlFor={messageId}
                  className="text-gray-300 text-sm block mb-1"
                >
                  Mensaje
                </label>
                <Textarea
                  id={messageId}
                  name="message"
                  required
                  placeholder="Cuéntanos sobre tus intereses musicales y objetivos..."
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-52"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 h-12 text-lg font-bold"
                aria-label="Enviar mensaje de contacto"
              >
                <Mail className="w-5 h-5 mr-2" />
                ENVIAR MENSAJE
              </Button>
            </CardContent>
          </Card>

          {/* Información de contacto */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-white text-lg">Ubicación</p>
                      <p className="text-gray-300">
                        Cra 9 #9‑35, Edificio Faro de Belén
                      </p>
                      <p className="text-gray-300">Ibagué, Tolima, Colombia</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-white text-lg">Teléfono</p>
                      <p className="text-gray-300">+57 316 357 3337</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-white text-lg">Email</p>
                      <p className="text-gray-300">
                        clubdjradioschool@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 md:py-6 text-base md:text-xl font-bold rounded-lg md:rounded-xl flex items-center justify-center"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
              CONTÁCTANOS POR WHATSAPP
            </Button>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl h-64 border border-gray-700 overflow-hidden">
              <iframe
                title="Ubicación Club DJ School"
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.706020591967!2d-75.2272549!3d4.4446678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38c5149cfa58cd%3A0xe1b841d6f080f16b!2sCra.%209%20%239-35%2C%20Ibagu%C3%A9%2C%20Tolima!5e0!3m2!1ses!2sco!4v1720670320111!5m2!1ses!2sco"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
