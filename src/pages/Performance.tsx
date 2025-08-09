import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  DollarSign, 
  Users, 
  Eye,
  MousePointer,
  Calendar,
  BarChart3,
  Filter,
  Download
} from "lucide-react";

const Performance = () => {
  const kpis = [
    { 
      title: "ROI Total", 
      value: "284%", 
      trend: "+23%", 
      positive: true, 
      icon: DollarSign,
      description: "Retorno sobre investimento"
    },
    { 
      title: "CAC Médio", 
      value: "R$ 45", 
      trend: "-12%", 
      positive: true, 
      icon: Target,
      description: "Custo de aquisição de cliente"
    },
    { 
      title: "LTV", 
      value: "R$ 850", 
      trend: "+18%", 
      positive: true, 
      icon: Users,
      description: "Valor vitalício do cliente"
    },
    { 
      title: "Taxa de Retenção", 
      value: "87%", 
      trend: "+5%", 
      positive: true, 
      icon: TrendingUp,
      description: "Clientes que permanecem ativos"
    },
  ];

  const campaignPerformance = [
    { name: "Black Friday 2024", roas: "6.2x", spend: "R$ 15.000", revenue: "R$ 93.000", status: "Ativa" },
    { name: "Lançamento Produto", roas: "4.8x", spend: "R$ 8.500", revenue: "R$ 40.800", status: "Pausada" },
    { name: "Retargeting Q4", roas: "3.9x", spend: "R$ 12.000", revenue: "R$ 46.800", status: "Ativa" },
    { name: "Prospecção Fria", roas: "2.1x", spend: "R$ 5.000", revenue: "R$ 10.500", status: "Otimizando" },
  ];

  const channelPerformance = [
    { channel: "Facebook Ads", conversions: 342, cost: "R$ 8.540", cpa: "R$ 24.97", performance: 85 },
    { channel: "Google Ads", conversions: 198, cost: "R$ 6.230", cpa: "R$ 31.46", performance: 78 },
    { channel: "Instagram Ads", conversions: 156, cost: "R$ 4.680", cpa: "R$ 30.00", performance: 72 },
    { channel: "LinkedIn Ads", conversions: 89, cost: "R$ 5.340", cpa: "R$ 60.00", performance: 65 },
  ];

  const goals = [
    { metric: "ROAS Meta", current: 4.2, target: 5.0, progress: 84 },
    { metric: "Leads Mensais", current: 847, target: 1000, progress: 85 },
    { metric: "Taxa de Conversão", current: 3.8, target: 4.5, progress: 84 },
    { metric: "Custo por Lead", current: 28, target: 25, progress: 89 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Performance & Analytics
          </h1>
          <p className="text-muted-foreground">
            Análise detalhada do desempenho de todas as campanhas e canais de marketing.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* KPIs Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <Card key={index} className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <kpi.icon className="h-5 w-5 text-primary" />
                <Badge variant={kpi.positive ? "default" : "destructive"} className="text-xs">
                  {kpi.trend}
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{kpi.value}</h3>
              <p className="text-sm text-muted-foreground">{kpi.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{kpi.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="campaigns" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="channels">Canais</TabsTrigger>
          <TabsTrigger value="goals">Metas</TabsTrigger>
          <TabsTrigger value="trends">Tendências</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-6">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Performance das Campanhas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaignPerformance.map((campaign, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg bg-card">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1">{campaign.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Investido: {campaign.spend}</span>
                        <span>Faturado: {campaign.revenue}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-lg font-bold text-foreground">{campaign.roas}</div>
                        <div className="text-xs text-muted-foreground">ROAS</div>
                      </div>
                      <Badge variant={
                        campaign.status === "Ativa" ? "default" : 
                        campaign.status === "Pausada" ? "secondary" : "outline"
                      }>
                        {campaign.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="channels" className="space-y-6">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Performance por Canal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {channelPerformance.map((channel, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-foreground">{channel.channel}</h4>
                      <Badge variant="outline">{channel.performance}% de eficiência</Badge>
                    </div>
                    <Progress value={channel.performance} className="h-2" />
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Conversões: </span>
                        <span className="font-medium text-foreground">{channel.conversions}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Investimento: </span>
                        <span className="font-medium text-foreground">{channel.cost}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">CPA: </span>
                        <span className="font-medium text-foreground">{channel.cpa}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Progresso das Metas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {goals.map((goal, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-foreground">{goal.metric}</h4>
                      <div className="text-sm text-muted-foreground">
                        {goal.current} / {goal.target}
                      </div>
                    </div>
                    <Progress value={goal.progress} className="h-3" />
                    <div className="text-sm text-muted-foreground">
                      {goal.progress}% da meta atingida
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Tendências e Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-lg bg-card">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Crescimento de Conversões</h4>
                      <p className="text-sm text-muted-foreground">
                        Aumento de 28% nas conversões nos últimos 30 dias, principalmente no canal Facebook Ads.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-border rounded-lg bg-card">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-yellow-500/10 rounded-lg">
                      <Eye className="h-4 w-4 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Oportunidade de Otimização</h4>
                      <p className="text-sm text-muted-foreground">
                        Google Ads apresenta potencial para redução de CPA com ajustes nos lances.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-border rounded-lg bg-card">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <MousePointer className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Melhoria no Engajamento</h4>
                      <p className="text-sm text-muted-foreground">
                        Taxa de engajamento aumentou 15% com os novos criativos implementados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Performance;