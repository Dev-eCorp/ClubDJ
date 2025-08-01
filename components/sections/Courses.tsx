// Modified and reusable Courses component for both School and Services
"use client";

import Image from "next/image";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Clock, Target } from "lucide-react";
import { Button } from "../ui/button";
import { Course } from "@/lib/types";

interface CoursesProps {
  courses: Course[];
  context: "school" | "services";
}

const Courses: FC<CoursesProps> = ({ courses, context }) => {
  if (!courses.length) return null;

  const titleMap = {
    school: "CURSOS DISPONIBLES",
    services: "SERVICIOS PROFESIONALES",
  };

  const subtitleMap = {
    school: (
      <>
        Elige tu camino hacia el{" "}
        <span className="text-purple-400">éxito musical</span>
      </>
    ),
    services: (
      <>
        Soluciones integrales para tus{" "}
        <span className="text-purple-400">eventos y producciones</span>
      </>
    ),
  };

  return (
    <section
      id={`${context === "school" ? "cursos" : "servicios"}`}
      role="region"
      aria-label="Sección de {context}"
      className="py-12 md:py-18 px-4 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-tight break-words">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {titleMap[context]}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            {subtitleMap[context]}
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid lg:grid-cols-3 gap-8  items-stretch">
          {courses.map(
            (
              {
                title,
                description,
                duration,
                modality,
                image,
                icon,
                benefits,
                color,
              },
              idx
            ) => (
              <Card
                key={idx}
                className="overflow-hidden group bg-gradient-to-br from-gray-900 to-black border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 h-full flex flex-col justify-between"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Imagen de ${title}`}
                    width={300}
                    height={200}
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute top-4 right-4 bg-black/70 p-3 rounded-full text-white">
                    {icon}
                  </div>
                </div>

                {/* Header */}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {description}
                  </CardDescription>
                </CardHeader>

                {/* Contenido */}
                <CardContent className="flex flex-col flex-grow justify-between pt-0">
                  {(duration || modality) && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {duration && (
                        <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                          <Clock className="w-4 h-4 mr-1" />
                          {duration}
                        </Badge>
                      )}
                      {modality && (
                        <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">
                          <Target className="w-4 h-4 mr-1" />
                          {modality}
                        </Badge>
                      )}
                    </div>
                  )}

                  {benefits && benefits.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">
                        {context === "school"
                          ? "Beneficios incluidos:"
                          : "Incluye:"}
                      </h4>
                      <ul className="space-y-2">
                        {benefits.map((benefit, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-center text-gray-300"
                          >
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    size="lg"
                    className={`cursor-pointer w-full bg-gradient-to-r ${color} hover:opacity-90 font-bold`}
                    aria-label={`Más información sobre ${title}`}
                  >
                    {context === "school"
                      ? "MÁS INFORMACIÓN"
                      : "COTIZAR SERVICIO"}
                  </Button>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Courses;
