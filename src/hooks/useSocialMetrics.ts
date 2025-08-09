import { useEffect, useState } from 'react';
import { getSocialMetrics, SocialMetrics } from '@/services/socialService';

export function useSocialMetrics() {
  const [metrics, setMetrics] = useState<SocialMetrics[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const data = await getSocialMetrics();
        setMetrics(data);
      } catch (error) {
        console.error('Erro ao buscar métricas de redes sociais:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchMetrics();
  }, []);

  return { metrics, loading };
}
