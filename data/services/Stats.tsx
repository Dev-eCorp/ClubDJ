import { Stat } from "@/lib/types";
import { Speaker, Lightbulb, Wrench, Building2 } from "lucide-react";

const servicesStats: Stat[] = [
  {
    number: "100+",
    label: "Eventos producidos",
    icon: <Building2 className="w-8 h-8" />,
  },
  {
    number: "50+",
    label: "Clientes empresariales",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    number: "300+",
    label: "Equipos en alquiler",
    icon: <Wrench className="w-8 h-8" />,
  },
  {
    number: "20000+",
    label: "Asistentes impactados",
    icon: <Speaker className="w-8 h-8" />,
  },
];

export default servicesStats;
