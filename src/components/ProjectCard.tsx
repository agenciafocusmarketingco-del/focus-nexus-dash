import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { notificationService } from "@/services/notificationService";
import { formatters } from "@/utils/formatters";
import { Calendar, Eye, MessageCircle, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    service: string;
    progress: number;
    status: string;
    deadline: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

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

  const handleViewProject = () => {
    notificationService.info("Abrindo detalhes do projeto...", `Carregando ${project.name}`);
    // In a real app, this would navigate to project details
  };

  const handleChat = () => {
    notificationService.success("Iniciando conversa...", "Redirecionando para o chat do projeto");
    navigate("/chat");
  };

  const handleMore = () => {
    notificationService.info("Menu de opções", "Funcionalidade em desenvolvimento");
  };

  return (
    <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{project.service}</p>
          </div>
          <Badge variant="outline" className={`${getStatusColor(project.status)} text-xs`}>
            {project.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progresso</span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>

        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Prazo: {project.deadline}</span>
        </div>

        <div className="flex space-x-2 pt-2">
          <Button 
            onClick={handleViewProject}
            variant="outline" 
            size="sm" 
            className="flex-1"
          >
            <Eye className="h-4 w-4 mr-2" />
            Ver Projeto
          </Button>
          <Button 
            onClick={handleChat}
            variant="outline" 
            size="sm"
            className="flex-1"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Chat
          </Button>
          <Button 
            onClick={handleMore}
            variant="outline" 
            size="sm"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}