import { DashboardCard } from "@/components/DashboardCard";
import { MetricsChart } from "@/components/MetricsChart";
import { SalesChart } from "@/components/SalesChart";
import { ActivityTimeline } from "@/components/ActivityTimeline";
import { ProjectStatusGrid } from "@/components/ProjectStatusGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Eye,
  MousePointer,
  Calendar
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Bem-vindo ao seu Dashboard Focus
        </h1>
        <p className="text-muted-foreground">
          Acompanhe em tempo real o progresso de todos os seus projetos e campanhas.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard
          title="ROAS Médio"
          value="4.2x"
          description="Retorno sobre investimento em ads"
          icon={TrendingUp}
          trend={{ value: 12, isPositive: true }}
        />
        <DashboardCard
          title="Leads Gerados"
          value="847"
          description="Total de leads captados"
          icon={Users}
          trend={{ value: 28, isPositive: true }}
        />
        <DashboardCard
          title="Seguidores"
          value="12.4K"
          description="Crescimento nas redes sociais"
          icon={Calendar}
          trend={{ value: 5.2, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard
          title="Faturamento"
          value="R$ 48.7K"
          description="Receita total gerada"
          icon={DollarSign}
          trend={{ value: 18, isPositive: true }}
        />
        <DashboardCard
          title="Impressões"
          value="2.1M"
          description="Alcance total das campanhas"
          icon={Eye}
          trend={{ value: -3, isPositive: false }}
        />
        <DashboardCard
          title="Engajamento"
          value="8.7%"
          description="Taxa de engajamento média"
          icon={Target}
          trend={{ value: 1.2, isPositive: true }}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Evolução de Leads e Vendas</CardTitle>
          </CardHeader>
          <CardContent>
            <MetricsChart />
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Performance de Vendas</CardTitle>
          </CardHeader>
          <CardContent>
            <SalesChart />
          </CardContent>
        </Card>
      </div>

      {/* Activity and Projects Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <ActivityTimeline />
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Projetos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectStatusGrid />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;