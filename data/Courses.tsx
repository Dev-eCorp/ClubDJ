import { Course } from "@/lib/types";
import { Play, Music, Headphones } from "lucide-react";

const CoursesData: Course[] = [
  {
    title: "Curso DJ Básico",
    description:
      "Aprende los fundamentos del DJing, beatmatching y lectura de público desde cero",
    duration: "8 semanas",
    modality: "Presencial",
    price: "$450.000",
    image: "/1.jpg",
    icon: <Headphones className="w-8 h-8" />,
    benefits: [
      "Manejo de equipos",
      "Técnicas de mezcla",
      "Teoría musical",
      "Performance en vivo",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Mezcla en Vivo",
    description:
      "Técnicas avanzadas de mixing para presentaciones en vivo y eventos masivos",
    duration: "6 semanas",
    modality: "Presencial",
    price: "$580.000",
    image: "/2.jpg",
    icon: <Play className="w-8 h-8" />,
    benefits: [
      "Performance en vivo",
      "Mixing avanzado",
      "Interacción con público",
      "Dominio de equipos",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Producción Musical & Mastering",
    description:
      "Crea, produce y masteriza tus propios tracks de música electrónica profesional",
    duration: "12 semanas",
    modality: "Presencial",
    price: "$850.000",
    image: "/3.jpg",
    icon: <Music className="w-8 h-8" />,
    benefits: [
      "Dominio de DAW",
      "Diseño de sonido",
      "Mezcla y mastering",
      "Composición de tracks",
    ],
    color: "from-green-500 to-emerald-500",
  },
];

export default CoursesData;
