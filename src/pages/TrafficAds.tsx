import { DashboardCard } from "@/components/DashboardCard";
import { MetricsChart } from "@/components/MetricsChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  DollarSign, 
  TrendingUp, 
  Users, 
  MousePointer,
  Eye,
  Play,
  Pause,
  BarChart3
} from "lucide-react";

const campaigns = [
  {
    id: 1,
    name: "Black Friday 2024",
    platform: "Meta Ads",
    status: "Ativa",
    budget: "R$ 5.000",
    spent: "R$ 3.245",
    roas: "4.2x",
    conversions: 89
  },
  {
    id: 2,
    name: "Lançamento Produto",
    platform: "Google Ads",
    status: "Pausada",
    budget: "R$ 2.500",
    spent: "R$ 1.890",
    roas: "3.8x",
    conversions: 45
  },
  {
    id: 3,
    name: "Remarketing",
    platform: "Meta Ads",
    status: "Ativa",
    budget: "R$ 1.200",
    spent: "R$ 980",
    roas: "5.1x",
    conversions: 67
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Ativa": return "bg-success/20 text-success border-success/30";
    case "Pausada": return "bg-warning/20 text-warning border-warning/30";
    case "Finalizada": return "bg-muted/20 text-muted-foreground border-muted/30";
    default: return "bg-secondary/20 text-white border-secondary/30";
  }
};

const TrafficAds = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Tráfego Pago</h1>
          <p className="text-muted-foreground">Monitore o desempenho das suas campanhas</p>
        </div>
        <Button className="bg-gradient-primary text-white hover:shadow-glow">
          <Target className="h-4 w-4 mr-2" />
          Nova Campanha
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <DashboardCard
          title="ROAS Médio"
          value="4.4x"
          icon={DollarSign}
          trend={{ value: 8.5, isPositive: true }}
        />
        <DashboardCard
          title="Conversões"
          value="201"
          description="Este mês"
          icon={Target}
          trend={{ value: 15.2, isPositive: true }}
        />
        <DashboardCard
          title="CTR"
          value="2.8%"
          description="Taxa de cliques"
          icon={MousePointer}
          trend={{ value: 5.1, isPositive: true }}
        />
        <DashboardCard
          title="Impressões"
          value="125.4K"
          description="Total"
          icon={Eye}
          trend={{ value: 22.3, isPositive: true }}
        />
        <DashboardCard
          title="CPC Médio"
          value="R$ 1.85"
          description="Custo por clique"
          icon={TrendingUp}
          trend={{ value: -3.2, isPositive: false }}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <BarChart3 className="h-5 w-5 text-primary" />
              Performance Mensal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <MetricsChart />
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-white">Distribuição por Plataforma</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-white">Meta Ads</span>
                </div>
                <span className="text-white font-medium">65%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-white">Google Ads</span>
                </div>
                <span className="text-white font-medium">30%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <span className="text-white">TikTok Ads</span>
                </div>
                <span className="text-white font-medium">5%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaigns List */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Campanhas Ativas</h2>
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{campaign.name}</h3>
                      <Badge variant="outline" className={getStatusColor(campaign.status)}>
                        {campaign.status}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {campaign.platform}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Orçamento</p>
                        <p className="text-sm font-medium text-white">{campaign.budget}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Gasto</p>
                        <p className="text-sm font-medium text-white">{campaign.spent}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">ROAS</p>
                        <p className="text-sm font-medium text-primary">{campaign.roas}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Conversões</p>
                        <p className="text-sm font-medium text-white">{campaign.conversions}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {campaign.status === "Ativa" ? (
                      <Button size="sm" variant="outline" className="text-white border-border hover:bg-secondary/20">
                        <Pause className="h-3 w-3" />
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" className="text-white border-border hover:bg-secondary/20">
                        <Play className="h-3 w-3" />
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="text-white border-border hover:bg-secondary/20">
                      <Eye className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrafficAds;