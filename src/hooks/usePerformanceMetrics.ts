import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

/**
 * Representa uma métrica de performance de marketing/negócio.
 * Exemplo de métricas: ROI, CAC, LTV, taxa de retenção etc.
 */
export interface PerformanceMetric {
  id: number;
  kpi: string;
  value: number;
  period: string | null;
}

/**
 * Hook para buscar métricas de performance do banco Supabase.
 * Retorna um array de métricas e um estado de carregamento.
 */
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMetrics() {
      const { data, error } = await supabase
        .from('kpi_performance')
        .select('*');
      if (error) {
        console.error('Erro ao buscar métricas de performance:', error);
      } else {
        setMetrics(data as PerformanceMetric[]);
      }
      setLoading(false);
    }
    fetchMetrics();
  }, []);

  return { metrics, loading };
}