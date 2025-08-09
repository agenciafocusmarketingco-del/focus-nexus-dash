import { useEffect, useState } from 'react';
import { getCampaignStats } from '@/services/googleAdsService';

export interface CampaignStat {
  id: string;
  name: string;
  impressions: number;
  clicks: number;
  conversions: number;
  costMicros: number;
}

/**
 * Hook to fetch campaign statistics from the Google Ads service.
 *
 * @param customerId The Google Ads customer ID to retrieve stats for.
 */
export function useGoogleCampaignStats(customerId: string) {
  const [stats, setStats] = useState<CampaignStat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const data = await getCampaignStats(customerId);
        // Data is returned as array of rows from google-ads-api; convert to our type if necessary
        setStats(data as unknown as CampaignStat[]);
      } catch (error) {
        console.error('Error fetching campaign stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [customerId]);

  return { stats, loading };
}
