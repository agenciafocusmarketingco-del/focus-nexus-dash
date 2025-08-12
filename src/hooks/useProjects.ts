import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Project {
  id: string;
  name: string;
  service: string;
  progress: number;
  status: string;
  deadline: string;
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('deadline', { ascending: false });

      if (error) {
        console.error('Erro ao buscar projetos:', error);
      } else {
        setProjects(data as Project[]);
      }
      setLoading(false);
    }

    fetchProjects();
  }, []);

  return { projects, loading };
}
