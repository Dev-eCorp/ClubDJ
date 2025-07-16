import { Stat } from "@/lib/types";
import { Music, Users, CalendarCheck2, BadgeCheck } from "lucide-react";

const schoolStats: Stat[] = [
  {
    number: "10+",
    label: "Años formando DJs",
    icon: <Music className="w-8 h-8" />,
  },
  {
    number: "500+",
    label: "Alumnos certificados",
    icon: <BadgeCheck className="w-8 h-8" />,
  },
  {
    number: "80+",
    label: "Eventos estudiantiles",
    icon: <CalendarCheck2 className="w-8 h-8" />,
  },
  {
    number: "95%",
    label: "Empleabilidad en el sector",
    icon: <Users className="w-8 h-8" />,
  },
];

export default schoolStats;
