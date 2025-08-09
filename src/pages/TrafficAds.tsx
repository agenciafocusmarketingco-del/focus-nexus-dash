import { useMemo } from 'react';
import { DashboardCard } from '@/components/DashboardCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Eye,
  MousePointerClick,
  TrendingUp,
  DollarSign,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { useGoogleCampaignStats } from '@/hooks/useGoogleCampaignStats';

/**
 * Página de Tráfego Pago que consulta dados reais via Google Ads API (v21)
 * utilizando o hook useGoogleCampaignStats. Substitui a versão estática
 * baseada em arrays mockados.
 */
const TrafficAds = () => {
  // TODO: substitua pelo ID do cliente Google Ads (ex.: '123-456-7890')
  const customerId = 'YOUR_CUSTOMER_ID';
  const { stats, loading } = useGoogleCampaignStats(customerId);

  // Aggregated metrics
  const {
    impressions,
    clicks,
    conversions,
    costMicros
  } = useMemo(() => {
    return stats.reduce(
      (acc, s) => {
        acc.impressions += s.impressions;
        acc.clicks += s.clicks;
        acc.conversions += s.conversions;
        acc.costMicros += s.costMicros;
        return acc;
      },
      { impressions: 0, clicks: 0, conversions: 0, costMicros: 0 }
    );
  }, [stats]);

  // Format cost from micros to currency (assuming BRL)
  const cost = costMicros / 1_000_000; // convert micros to base unit

  const formatNumber = (val: number) =>
    val >= 1000 ? (val / 1000).toFixed(1) + 'K' : val.toString();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Tráfego Pago</h1>
        {/* Botão para criar campanha - funcionalidade futura */}
        <Button className="bg-gradient-primary text-white hover:shadow-glow">
          Criar Campanha
        </Button>
      </div>

      {/* KPIs Resumidos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Impressões"
          value={formatNumber(impressions)}
          description="Últimos 30 dias"
          icon={Eye}
          trend={{ value: 5.3, isPositive: true }}
        />
        <DashboardCard
          title="Cliques"
          value={formatNumber(clicks)}
          description="Últimos 30 dias"
          icon={MousePointerClick}
          trend={{ value: 4.1, isPositive: true }}
        />
        <DashboardCard
          title="Conversões"
          value={formatNumber(conversions)}
          description="Últimos 30 dias"
          icon={CheckCircle}
          trend={{ value: 2.7, isPositive: true }}
        />
        <DashboardCard
          title="Custo (R$)"
          value={cost.toFixed(2)}
          description="Total investido"
          icon={DollarSign}
          trend={{ value: -1.3, isPositive: false }}
        />
      </div>

      {/* Listagem de Campanhas */}
      <div className="grid grid-cols-1 gap-4">
        {loading ? (
          <p className="text-muted-foreground">Carregando campanhas...</p>
        ) : stats.length === 0 ? (
          <p className="text-muted-foreground">Nenhuma campanha encontrada.</p>
        ) : (
          stats.map((c) => (
            <Card key={c.id} className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-white flex justify-between items-center">
                  <span>{c.name}</span>
                  {/* Exemplo de status simples: conversões positivas ou não */}
                  {c.conversions > 0 ? (
                    <CheckCircle className="h-5 w-5 text-success" />
                  ) : (
                    <XCircle className="h-5 w-5 text-warning" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white">
                  <div>
                    <p className="text-muted-foreground">Impressões</p>
                    <p className="font-medium">{formatNumber(c.impressions)}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Cliques</p>
                    <p className="font-medium">{formatNumber(c.clicks)}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Conversões</p>
                    <p className="font-medium">{formatNumber(c.conversions)}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Custo (R$)</p>
                    <p className="font-medium">{(c.costMicros / 1_000_000).toFixed(2)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default TrafficAds;
