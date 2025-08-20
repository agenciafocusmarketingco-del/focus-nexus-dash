import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search as SearchIcon, Filter } from 'lucide-react';
import ProjectStatusGrid from '@/components/ProjectStatusGrid';
import { ProjectCard } from '@/components/ProjectCard';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { useProjects } from '@/hooks/useProjects';
import { useProjectsSummary } from '@/hooks/useProjectsSummary';
import { notificationService } from '@/services/notificationService';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useState } from 'react';

/**
 * Página de listagem e resumo de projetos.
 * Exibe estatísticas agregadas e um grid com os projetos recuperados do Supabase.
 */
const Projects = () => {
  const { projects, loading: projectsLoading } = useProjects();
  const { summary, loading: summaryLoading } = useProjectsSummary();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter projects based on search term
  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNewProject = () => {
    notificationService.loading("Criando novo projeto...");
    setTimeout(() => {
      notificationService.success("Projeto criado!", "Novo projeto foi adicionado ao portfólio");
    }, 1500);
  };

  const handleFilter = () => {
    notificationService.info("Filtros aplicados", "Projetos filtrados por status, serviço e período");
  };

  // KPI cards com base no resumo de projetos
  const kpis = [
    {
      title: 'Projetos Ativos',
      value: summary.active,
      color: 'text-primary',
      description: 'Em andamento',
    },
    {
      title: 'Concluídos',
      value: summary.concluded,
      color: 'text-success',
      description: 'Finalizados',
    },
    {
      title: 'Atrasados',
      value: summary.delayed,
      color: 'text-warning',
      description: 'Com prazo excedido',
    },
    {
      title: 'Taxa de Sucesso',
      value: `${summary.successRate.toFixed(0)}%`,
      color: 'text-info',
      description: 'Projetos concluídos / total',
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Projetos</h1>
          <p className="text-muted-foreground">
            Gerencie todos os seus projetos em andamento
          </p>
        </div>
        <Button 
          onClick={handleNewProject}
          className="bg-gradient-primary text-white hover:shadow-glow"
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Projeto
        </Button>
      </div>

      {/* Filtros e busca */}
      <Card className="bg-gradient-card border-border">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar projetos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-secondary/20 border-border text-white placeholder:text-muted-foreground"
              />
            </div>
            <Button
              onClick={handleFilter}
              variant="outline"
              className="text-white border-border hover:bg-secondary/20"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Estatísticas dos projetos */}
      {summaryLoading ? (
        <LoadingSpinner className="h-24" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <Card
              key={kpi.title}
              className="bg-gradient-card border-border shadow-card"
            >
              <CardContent className="p-4 text-center">
                <div className={`text-2xl font-bold mb-1 ${kpi.color}`}>{kpi.value}</div>
                <div className="text-white text-sm mb-1">{kpi.title}</div>
                <div className="text-muted-foreground text-xs">
                  {kpi.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Grid de projetos */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">
            Todos os Projetos ({filteredProjects.length})
          </h2>
          {searchTerm && (
            <Badge variant="outline" className="text-white border-border">
              Filtrado: "{searchTerm}"
            </Badge>
          )}
        </div>
        
        {projectsLoading ? (
          <LoadingSpinner className="h-24" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {filteredProjects.length === 0 && !projectsLoading && (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">
                  {searchTerm 
                    ? "Nenhum projeto encontrado com os critérios de busca." 
                    : "Nenhum projeto encontrado. Crie seu primeiro projeto!"
                  }
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <FloatingActionButton onClick={handleNewProject} label="Novo Projeto" />
    </div>
  );
};

export default Projects;