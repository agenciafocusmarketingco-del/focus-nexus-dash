import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search as SearchIcon } from 'lucide-react';
import ProjectStatusGrid from '@/components/ProjectStatusGrid';
import { useProjects } from '@/hooks/useProjects';
import { useProjectsSummary } from '@/hooks/useProjectsSummary';
import LoadingSpinner from '@/components/LoadingSpinner';

/**
 * Página de listagem e resumo de projetos.
 * Exibe estatísticas agregadas e um grid com os projetos recuperados do Supabase.
 */
const Projects = () => {
  const { projects, loading: projectsLoading } = useProjects();
  const { summary, loading: summaryLoading } = useProjectsSummary();

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
        <Button className="bg-gradient-primary text-white hover:shadow-glow">
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
                className="pl-10 bg-secondary/20 border-border text-white placeholder:text-muted-foreground"
              />
            </div>
            <Button
              variant="outline"
              className="text-white border-border hover:bg-secondary/20"
            >
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
        <h2 className="text-xl font-semibold text-white mb-4">
          Todos os Projetos
        </h2>
        <ProjectStatusGrid projects={projects} loading={projectsLoading} />
      </div>
    </div>
  );
};

export default Projects;