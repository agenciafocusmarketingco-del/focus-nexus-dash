import { DashboardCard } from "@/components/DashboardCard";
import { MetricsChart } from "@/components/MetricsChart";
import { ActivityTimeline } from "@/components/ActivityTimeline";
import { ProjectStatusGrid } from "@/components/ProjectStatusGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
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
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="ROAS Médio"
          value="4.2x"
          description="Retorno sobre investimento"
          icon={DollarSign}
          trend={{ value: 12.5, isPositive: true }}
        />
        <DashboardCard
          title="Leads Gerados"
          value="1,247"
          description="Este mês"
          icon={Users}
          trend={{ value: 8.3, isPositive: true }}
        />
        <DashboardCard
          title="Taxa de Conversão"
          value="3.7%"
          description="Média das campanhas"
          icon={Target}
          trend={{ value: -2.1, isPositive: false }}
        />
        <DashboardCard
          title="Projetos Ativos"
          value="12"
          description="Em desenvolvimento"
          icon={BarChart3}
          trend={{ value: 15.0, isPositive: true }}
        />
      </div>

      {/* Charts and Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Performance das Campanhas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <MetricsChart />
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Atividades Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ActivityTimeline />
          </CardContent>
        </Card>
      </div>

      {/* Social Media Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashboardCard
          title="Alcance Total"
          value="45.2K"
          description="Últimos 30 dias"
          icon={Eye}
          trend={{ value: 23.1, isPositive: true }}
        />
        <DashboardCard
          title="Engajamento"
          value="6.8%"
          description="Taxa média"
          icon={MousePointer}
          trend={{ value: 5.7, isPositive: true }}
        />
        <DashboardCard
          title="Posts Publicados"
          value="84"
          description="Este mês"
          icon={Calendar}
          trend={{ value: 11.2, isPositive: true }}
        />
      </div>

      {/* Projects Status */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">Status dos Projetos</h2>
        </div>
        <ProjectStatusGrid />
      </div>
    </div>
  );
};

export default Dashboard;