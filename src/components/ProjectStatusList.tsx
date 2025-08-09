import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Globe, Palette, Target, Users, Zap, Clock } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Identidade Visual",
    service: "Branding",
    progress: 85,
    status: "Em Progresso",
    deadline: "15 Dez",
    icon: Palette,
    color: "text-purple-400"
  },
  {
    id: 2,
    name: "Campanha Black Friday",
    service: "Tráfego Pago",
    progress: 100,
    status: "Concluído",
    deadline: "30 Nov",
    icon: Target,
    color: "text-success"
  },
  {
    id: 3,
    name: "Site Institucional",
    service: "Desenvolvimento",
    progress: 60,
    status: "Em Desenvolvimento",
    deadline: "20 Dez",
    icon: Globe,
    color: "text-info"
  },
  {
    id: 4,
    name: "Automação WhatsApp",
    service: "CRM",
    progress: 40,
    status: "Iniciado",
    deadline: "10 Jan",
    icon: Zap,
    color: "text-warning"
  },
  {
    id: 5,
    name: "Calendário Editorial",
    service: "Social Media",
    progress: 75,
    status: "Em Progresso",
    deadline: "05 Dez",
    icon: Calendar,
    color: "text-primary"
  },
  {
    id: 6,
    name: "Treinamento Equipe",
    service: "Consultoria",
    progress: 25,
    status: "Planejamento",
    deadline: "15 Jan",
    icon: Users,
    color: "text-muted-foreground"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Concluído": return "bg-success/20 text-success border-success/30";
    case "Em Progresso": return "bg-primary/20 text-primary border-primary/30";
    case "Em Desenvolvimento": return "bg-info/20 text-info border-info/30";
    case "Iniciado": return "bg-warning/20 text-warning border-warning/30";
    case "Planejamento": return "bg-muted/20 text-muted-foreground border-muted/30";
    default: return "bg-secondary/20 text-secondary-foreground border-secondary/30";
  }
};

export function ProjectStatusList() {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="flex items-center justify-between p-4 bg-gradient-card border border-border rounded-lg hover:shadow-glow transition-all duration-300 group"
        >
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-card/50">
              <project.icon className={`h-5 w-5 ${project.color}`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {project.name}
                </h3>
                <Badge variant="outline" className={`${getStatusColor(project.status)} text-xs`}>
                  {project.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{project.service}</p>
              <div className="flex items-center space-x-4">
                <div className="flex-1 max-w-32">
                  <Progress value={project.progress} className="h-1.5" />
                </div>
                <span className="text-xs font-medium">{project.progress}%</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="font-medium">{project.deadline}</span>
          </div>
        </div>
      ))}
    </div>
  );
}