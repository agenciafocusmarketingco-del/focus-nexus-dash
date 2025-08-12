import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useProfile } from './useProfile';

/**
 * Representa um relatório interno armazenado no Supabase.
 */
export interface Report {
  id: number;
  title: string;
  date: string;
  description?: string | null;
  status?: string | null;
  author?: string | null;
}

/**
 * Hook para buscar relatórios do banco de dados Supabase.
 * Pode ser usado na página de relatórios para listar documentos e estatísticas.
 */
export function useReports() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const { profile } = useProfile();

  useEffect(() => {
    async function fetchReports() {
      if (!profile?.client_id) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('reports')
        .select('*')
        .order('date', { ascending: false });
      if (error) {
        console.error('Erro ao buscar relatórios:', error);
      } else {
        setReports(data as Report[]);
      }
      setLoading(false);
    }
    fetchReports();
  }, [profile?.client_id]);

  return { reports, loading };
}