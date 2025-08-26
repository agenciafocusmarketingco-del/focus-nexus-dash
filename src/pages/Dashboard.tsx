import { DashboardCard } from "@/components/DashboardCard";
import { MetricsChart } from "@/components/MetricsChart";
import { SalesChart } from "@/components/SalesChart";
import { ActivityTimeline } from "@/components/ActivityTimeline";
import { ProjectStatusList } from "@/components/ProjectStatusList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import focusLogo from "@/assets/focus-logo.png";
import { communicationService } from "@/services/communicationService";
import { notificationService } from "@/services/notificationService";
import { 
  Target, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Eye,
  MousePointer,
  Calendar,
  Building,
  Briefcase,
  MessageCircle,
  CalendarDays,
  Mail,
  FileText
} from "lucide-react";
import { useProfile } from "@/hooks/useProfile";

const Dashboard = () => {
  const { profile } = useProfile();
  const handleWhatsApp = () => {
    communicationService.openWhatsApp();
    notificationService.success("Redirecionando para WhatsApp...", "Aguarde enquanto abrimos o WhatsApp");
  };

  const handleScheduleMeeting = () => {
    communicationService.scheduleeMeeting();
    notificationService.info("Abrindo calendário...", "Selecione o melhor horário para nossa reunião");
  };

  const handleSendEmail = () => {
    communicationService.sendEmail();
    notificationService.success("Abrindo cliente de email...", "Preparamos um template para você");
  };

  const handleDownloadReport = () => {
    communicationService.downloadWeeklyReport();
    notificationService.success("Relatório baixado!", "O arquivo foi salvo em Downloads");
  };
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-8 flex items-center gap-6">
        <div className="flex items-center gap-4">
          <img src={focusLogo} alt="Focus Logo" className="w-16 h-16 rounded-xl shadow-glow" />
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Bem-vindo ao seu Dashboard Focus
            </h1>
            <p className="text-muted-foreground">
              Acompanhe em tempo real o progresso de todos os seus projetos e campanhas com análises detalhadas.
            </p>
          </div>
        </div>
        <div className="ml-auto">
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="p-3 bg-gradient-card rounded-lg border border-border">
              <div className="text-lg font-bold text-primary">98%</div>
              <div className="text-xs text-muted-foreground">Satisfação</div>
            </div>
            <div className="p-3 bg-gradient-card rounded-lg border border-border">
              <div className="text-lg font-bold text-success">24/7</div>
              <div className="text-xs text-muted-foreground">Suporte</div>
            </div>
          </div>
        </div>
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
            <ProjectStatusList />
          </CardContent>
        </Card>
      </div>

      {/* Communication Section */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Central de Comunicação</CardTitle>
          <p className="text-sm text-muted-foreground">Acesso rápido aos principais canais de comunicação</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
              onClick={handleWhatsApp}
              className="flex flex-col items-center p-4 bg-green-500/10 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-all cursor-pointer group"
            >
              <MessageCircle className="h-8 w-8 text-green-500 mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground">WhatsApp</h3>
              <p className="text-xs text-muted-foreground text-center">Conversar agora</p>
            </div>
            
            <div 
              onClick={handleScheduleMeeting}
              className="flex flex-col items-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20 hover:bg-blue-500/20 transition-all cursor-pointer group"
            >
              <CalendarDays className="h-8 w-8 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground">Agendar Reunião</h3>
              <p className="text-xs text-muted-foreground text-center">Marcar encontro</p>
            </div>
            
            <div 
              onClick={handleSendEmail}
              className="flex flex-col items-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20 hover:bg-purple-500/20 transition-all cursor-pointer group"
            >
              <Mail className="h-8 w-8 text-purple-500 mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground">Enviar Email</h3>
              <p className="text-xs text-muted-foreground text-center">Contato direto</p>
            </div>
            
            <div 
              onClick={handleDownloadReport}
              className="flex flex-col items-center p-4 bg-orange-500/10 rounded-lg border border-orange-500/20 hover:bg-orange-500/20 transition-all cursor-pointer group"
            >
              <FileText className="h-8 w-8 text-orange-500 mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground">Relatório Semanal</h3>
              <p className="text-xs text-muted-foreground text-center">Baixar relatório</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;