import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

/**
 * Informações agregadas sobre os projetos para estatísticas no dashboard.
 */
export interface ProjectsSummary {
  total: number;
  active: number;
  concluded: number;
  delayed: number;
  successRate: number;
}

/**
 * Hook que calcula o resumo dos projetos com base no status de cada registro.
 * O status do projeto deve ser uma coluna na tabela `projects` (ex.: "Em Progresso", "Concluído", "Atrasado").
 */
export function useProjectsSummary() {
  const [summary, setSummary] = useState<ProjectsSummary>({
    total: 0,
    active: 0,
    concluded: 0,
    delayed: 0,
    successRate: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase.from('projects').select('status');
      if (error) {
        console.error('Erro ao buscar projetos:', error);
      } else if (data) {
        const total = data.length;
        const active = data.filter((p: any) => p.status === 'Em Progresso' || p.status === 'Ativo').length;
        const concluded = data.filter((p: any) => p.status === 'Concluído').length;
        const delayed = data.filter((p: any) => p.status === 'Atrasado').length;
        const successRate = total > 0 ? (concluded / total) * 100 : 0;
        setSummary({ total, active, concluded, delayed, successRate });
      }
      setLoading(false);
    }
    fetchProjects();
  }, []);

  return { summary, loading };
}