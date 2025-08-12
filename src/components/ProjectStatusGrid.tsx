import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import LoadingSpinner from '@/components/LoadingSpinner';

/**
 * Representa um projeto com propriedades mínimas para exibição no grid.
 */
export interface ProjectItem {
  id: string;
  name: string;
  service: string;
  progress: number;
  status: string;
  deadline: string;
  color?: string;
}

interface ProjectStatusGridProps {
  /**
   * Lista de projetos a serem exibidos. Deve vir de um hook (ex.: useProjects).
   */
  projects: ProjectItem[];
  /**
   * Se verdadeiro, mostra um spinner enquanto os dados carregam.
   */
  loading?: boolean;
}

/**
 * Componente que renderiza um grid com cartões de status de projetos.
 * Recebe os projetos via props para evitar arrays estáticos no componente.
 */
const ProjectStatusGrid: React.FC<ProjectStatusGridProps> = ({ projects, loading = false }) => {
  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner className="h-16 w-16" />
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="p-4 bg-secondary/20 rounded-lg text-muted-foreground">
        Nenhum projeto encontrado.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300"
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary">{project.service}</Badge>
              <Badge variant="secondary">{project.status}</Badge>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">{project.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">Prazo: {project.deadline}</p>
            <Progress value={project.progress} className="h-2" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectStatusGrid;