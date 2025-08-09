import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, Globe, Palette, Target, Users, Zap } from "lucide-react";

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

export function ProjectStatusGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Card key={project.id} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <project.icon className={`h-6 w-6 ${project.color}`} />
              <Badge variant="outline" className={getStatusColor(project.status)}>
                {project.status}
              </Badge>
            </div>
            <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
              {project.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{project.service}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progresso</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Entrega</span>
                <span className="text-sm font-medium">{project.deadline}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}