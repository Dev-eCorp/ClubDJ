"use client";

import Image from "next/image";
import { FC } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Equipment } from "@/lib/types";

interface EquipmentsProps {
  equipments: Equipment[];
}

const Equipments: FC<EquipmentsProps> = ({ equipments }) => {
  if (!equipments.length) return null;

  return (
    <section
      id="equipos"
      role="region"
      aria-label="Sección de equipos profesionales"
      className="py-12 md:py-18 px-4 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-tight break-words">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              EQUIPOS PROFESIONALES
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            Consigue el <span className="text-green-400">equipo perfecto</span>{" "}
            para llevar tu música al siguiente nivel
          </p>
        </div>

        {/* Tarjetas de equipos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipments.map(
            ({ name, description, price, image, category }, idx) => (
              <Card
                key={idx}
                className="group overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Imagen de ${name}`}
                    width={300}
                    height={200}
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge
                    className="absolute top-3 left-3 bg-blue-600/90 text-white text-xs font-semibold px-2 py-1"
                    aria-label={`Categoría: ${category}`}
                  >
                    {category}
                  </Badge>
                </div>

                <CardContent className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{description}</p>
                  </div>
                  <div className="mt-auto">
                    <span className="block text-2xl font-extrabold text-green-400 mb-4">
                      {price}
                    </span>
                    <Button
                      size="sm"
                      className="cursor-pointer w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-bold text-white transition-colors"
                      aria-label={`Solicitar información sobre ${name}`}
                    >
                      SOLICITAR INFORMACIÓN
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Equipments;
