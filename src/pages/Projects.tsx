import { ProjectStatusGrid } from "@/components/ProjectStatusGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Briefcase, Plus, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Projects = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Projetos</h1>
          <p className="text-muted-foreground">Gerencie todos os seus projetos em andamento</p>
        </div>
        <Button className="bg-gradient-primary text-white hover:shadow-glow">
          <Plus className="h-4 w-4 mr-2" />
          Novo Projeto
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-gradient-card border-border">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar projetos..." 
                className="pl-10 bg-secondary/20 border-border text-white placeholder:text-muted-foreground"
              />
            </div>
            <Button variant="outline" className="text-white border-border hover:bg-secondary/20">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Project Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">12</div>
              <div className="text-sm text-white">Projetos Ativos</div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-success mb-1">8</div>
              <div className="text-sm text-white">Concluídos</div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-warning mb-1">3</div>
              <div className="text-sm text-white">Atrasados</div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-info mb-1">75%</div>
              <div className="text-sm text-white">Taxa de Sucesso</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects Grid */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Todos os Projetos</h2>
        <ProjectStatusGrid />
      </div>
    </div>
  );
};

export default Projects;