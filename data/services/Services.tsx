import { Course } from "@/lib/types";
import { Speaker, Wrench, Truck } from "lucide-react";

const ServicesData: Course[] = [
  {
    title: "Alquiler de Equipos de Sonido",
    description:
      "Sonido profesional para eventos sociales, empresariales y conciertos.",
    duration: "",
    modality: "",
    image: "/alquiler1.jpeg",
    icon: <Speaker className="w-8 h-8" />,
    benefits: [
      "Alta fidelidad sonora",
      "Montaje y desmontaje",
      "Soporte técnico incluido",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Producción de Eventos",
    description: "Coordinamos y ejecutamos la producción técnica de tu evento.",
    duration: "",
    modality: "",
    image: "/eventos.jpg",
    icon: <Wrench className="w-8 h-8" />,
    benefits: [
      "Personal técnico calificado",
      "Logística completa",
      "Iluminación y DJ incluidos",
    ],
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Transporte y Montaje",
    description:
      "Llevamos el equipo hasta tu ubicación, lo instalamos y dejamos todo listo.",
    duration: "",
    modality: "",
    image: "/equipos.webp",
    icon: <Truck className="w-8 h-8" />,
    benefits: [
      "Cobertura regional",
      "Rápido y seguro",
      "Sin preocupaciones logísticas",
    ],
    color: "from-teal-500 to-green-500",
  },
];

export default ServicesData;
