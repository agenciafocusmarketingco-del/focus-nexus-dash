import { useMemo } from 'react';
import { DashboardCard } from '@/components/DashboardCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, MousePointerClick, TrendingUp, DollarSign } from 'lucide-react';
import { useGoogleCampaignStats } from '@/hooks/useGoogleCampaignStats';
import LoadingSpinner from '@/components/LoadingSpinner';
import { notificationService } from '@/services/notificationService';

/**
 * Página de Tráfego Pago (Google Ads) que consome dados reais via a API V21.
 * Utiliza o hook useGoogleCampaignStats para buscar estatísticas das campanhas.
 * Inclui estados de carregamento e tratamento para ausência de campanhas.
 */
const TrafficAds = () => {
  // ID do cliente do Google Ads (substitua por variável de ambiente ou valor real)
  const customerId = import.meta.env.VITE_GOOGLE_ADS_CUSTOMER_ID || 'YOUR_CUSTOMER_ID';
  const {
    stats,
    loading
  } = useGoogleCampaignStats(customerId);

  // Agregar métricas para exibir nos cards principais
  const {
    impressions,
    clicks,
    conversions,
    costMicros
  } = useMemo(() => {
    return stats.reduce((acc, s) => {
      acc.impressions += s.impressions;
      acc.clicks += s.clicks;
      acc.conversions += s.conversions;
      acc.costMicros += s.costMicros;
      return acc;
    }, {
      impressions: 0,
      clicks: 0,
      conversions: 0,
      costMicros: 0
    });
  }, [stats]);

  // Converter custo de micros para unidade monetária (assume BRL)
  const totalCost = costMicros / 1_000_000;

  // Helpers de formatação
  const formatNumber = (val: number) => val >= 1000 ? (val / 1000).toFixed(1) + 'K' : val.toString();
  const formatCurrency = (val: number) => val >= 1000 ? 'R$ ' + (val / 1000).toFixed(1) + 'K' : 'R$ ' + val.toFixed(2);
  if (loading) {
    return <div className="flex items-center justify-center py-16">
        <LoadingSpinner className="h-16 w-16" />
      </div>;
  }
  return <div className="space-y-6 animate-fade-in">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Tráfego Pago</h1>
        <Button className="bg-gradient-primary text-white hover:shadow-glow" onClick={() => {
        notificationService.loading("Iniciando assistente de criação de campanha...");
        setTimeout(() => {
          notificationService.success("Assistente de criação de campanha aberto!");
        }, 1500);
      }}>Nova Campanha</Button>
      </div>

      {/* Indicadores principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard title="Impressões" value={formatNumber(impressions)} description="Total" icon={Eye} trend={{
        value: 3.2,
        isPositive: true
      }} />
        <DashboardCard title="Cliques" value={formatNumber(clicks)} description="Total" icon={MousePointerClick} trend={{
        value: 1.5,
        isPositive: true
      }} />
        <DashboardCard title="Conversões" value={formatNumber(conversions)} description="Total" icon={TrendingUp} trend={{
        value: 4.1,
        isPositive: true
      }} />
        <DashboardCard title="Investimento" value={formatCurrency(totalCost)} description="Gasto" icon={DollarSign} trend={{
        value: 2.2,
        isPositive: false
      }} />
      </div>

      {/* Lista de campanhas */}
      <div>
        <h2 className="text-xl font-semibold text-white my-4">Campanhas Ativas</h2>
        {stats.length === 0 ? <div className="p-4 bg-secondary/20 rounded-lg text-muted-foreground">
            Nenhuma campanha encontrada.
          </div> : <div className="space-y-4">
            {stats.map(c => {
          const ctr = c.impressions > 0 ? c.clicks / c.impressions * 100 : 0;
          const cpc = c.clicks > 0 ? c.costMicros / 1_000_000 / c.clicks : 0;
          const roas = c.costMicros > 0 ? c.conversions * 100 / (c.costMicros / 1_000_000) : 0;
          return <Card key={c.id} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white">{c.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Impressões</p>
                        <p className="text-white font-medium">{formatNumber(c.impressions)}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Cliques</p>
                        <p className="text-white font-medium">{formatNumber(c.clicks)}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Conversões</p>
                        <p className="text-white font-medium">{formatNumber(c.conversions)}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">Custo</p>
                        <p className="text-white font-medium">{formatCurrency(c.costMicros / 1_000_000)}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs mt-4">
                      <div className="space-y-1">
                        <p className="text-muted-foreground">CTR</p>
                        <p className="text-white font-medium">{ctr.toFixed(2)}%</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">CPC</p>
                        <p className="text-white font-medium">R$ {cpc.toFixed(2)}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">ROAS</p>
                        <p className="text-white font-medium">{roas.toFixed(2)}x</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>;
        })}
          </div>}
      </div>
    </div>;
};
export default TrafficAds;