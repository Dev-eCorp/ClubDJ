import { Stat } from "@/lib/types";
import { Award, Calendar, TrendingUp, Users } from "lucide-react";

const StatsData: Stat[] = [
  {
    number: "10+",
    label: "Años de experiencia",
    icon: <Award className="w-8 h-8" />,
  },
  {
    number: "500+",
    label: "Estudiantes graduados",
    icon: <Users className="w-8 h-8" />,
  },
  {
    number: "50+",
    label: "Eventos realizados",
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    number: "95%",
    label: "Tasa de empleabilidad",
    icon: <TrendingUp className="w-8 h-8" />,
  },
];

export default StatsData;
