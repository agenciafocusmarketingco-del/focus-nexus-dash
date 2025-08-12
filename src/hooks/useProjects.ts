import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useProfile } from './useProfile';

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
  const { profile } = useProfile();

  useEffect(() => {
    async function fetchProjects() {
      if (!profile?.client_id) {
        setLoading(false);
        return;
      }

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
  }, [profile?.client_id]);

  return { projects, loading };
}
