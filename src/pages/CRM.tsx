import { DashboardCard } from "@/components/DashboardCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Zap, 
  Users, 
  MessageCircle, 
  Mail, 
  Phone,
  TrendingUp,
  Filter,
  ArrowRight,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const automations = [
  {
    id: 1,
    name: "Boas-vindas WhatsApp",
    type: "WhatsApp",
    status: "Ativo",
    triggers: 245,
    conversions: 89,
    conversionRate: 36.3
  },
  {
    id: 2,
    name: "Email Nutrição",
    type: "Email",
    status: "Ativo", 
    triggers: 1240,
    conversions: 156,
    conversionRate: 12.6
  },
  {
    id: 3,
    name: "Carrinho Abandonado",
    type: "Email + SMS",
    status: "Pausado",
    triggers: 89,
    conversions: 23,
    conversionRate: 25.8
  }
];

const leads = [
  {
    id: 1,
    name: "Maria Silva",
    email: "maria@email.com",
    phone: "(11) 99999-9999",
    source: "Facebook Ads",
    stage: "Novo Lead",
    score: 85,
    lastContact: "2h atrás"
  },
  {
    id: 2,
    name: "João Santos",
    email: "joao@email.com", 
    phone: "(11) 88888-8888",
    source: "Google Ads",
    stage: "Qualificado",
    score: 92,
    lastContact: "1 dia atrás"
  },
  {
    id: 3,
    name: "Ana Costa",
    email: "ana@email.com",
    phone: "(11) 77777-7777",
    source: "Orgânico",
    stage: "Oportunidade",
    score: 78,
    lastContact: "3h atrás"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Ativo": return "bg-success/20 text-success border-success/30";
    case "Pausado": return "bg-warning/20 text-warning border-warning/30";
    case "Inativo": return "bg-muted/20 text-muted-foreground border-muted/30";
    default: return "bg-secondary/20 text-white border-secondary/30";
  }
};

const getStageColor = (stage: string) => {
  switch (stage) {
    case "Novo Lead": return "bg-info/20 text-info border-info/30";
    case "Qualificado": return "bg-warning/20 text-warning border-warning/30";
    case "Oportunidade": return "bg-primary/20 text-primary border-primary/30";
    case "Cliente": return "bg-success/20 text-success border-success/30";
    default: return "bg-secondary/20 text-white border-secondary/30";
  }
};

const CRM = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">CRM & Automação</h1>
          <p className="text-muted-foreground">Gerencie leads e automações de marketing</p>
        </div>
        <Button className="bg-gradient-primary text-white hover:shadow-glow">
          <Zap className="h-4 w-4 mr-2" />
          Nova Automação
        </Button>
      </div>

      {/* CRM KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Leads Captados"
          value="1,574"
          description="Este mês"
          icon={Users}
          trend={{ value: 23.1, isPositive: true }}
        />
        <DashboardCard
          title="Taxa de Conversão"
          value="18.5%"
          description="Lead para cliente"
          icon={TrendingUp}
          trend={{ value: 5.3, isPositive: true }}
        />
        <DashboardCard
          title="Automações Ativas"
          value="12"
          description="Funcionando"
          icon={Zap}
          trend={{ value: 8.7, isPositive: true }}
        />
        <DashboardCard
          title="Tempo Resposta"
          value="2.3h"
          description="Médio"
          icon={Clock}
          trend={{ value: -15.2, isPositive: true }}
        />
      </div>

      {/* Funnel Overview */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="text-white">Funil de Vendas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-info/10 border border-info/30 rounded-lg">
              <div className="text-2xl font-bold text-info mb-1">1,574</div>
              <div className="text-sm text-white">Leads</div>
              <div className="text-xs text-muted-foreground">100%</div>
            </div>
            <div className="text-center p-4 bg-warning/10 border border-warning/30 rounded-lg">
              <div className="text-2xl font-bold text-warning mb-1">892</div>
              <div className="text-sm text-white">Qualificados</div>
              <div className="text-xs text-muted-foreground">56.7%</div>
            </div>
            <div className="text-center p-4 bg-primary/10 border border-primary/30 rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">345</div>
              <div className="text-sm text-white">Oportunidades</div>
              <div className="text-xs text-muted-foreground">21.9%</div>
            </div>
            <div className="text-center p-4 bg-success/10 border border-success/30 rounded-lg">
              <div className="text-2xl font-bold text-success mb-1">291</div>
              <div className="text-sm text-white">Clientes</div>
              <div className="text-xs text-muted-foreground">18.5%</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Automations */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Automações de Marketing</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {automations.map((automation) => (
            <Card key={automation.id} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <CardTitle className="text-white text-lg">{automation.name}</CardTitle>
                  </div>
                  <Badge variant="outline" className={getStatusColor(automation.status)}>
                    {automation.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">{automation.type}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Disparos</span>
                    <span className="text-sm font-medium text-white">{automation.triggers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Conversões</span>
                    <span className="text-sm font-medium text-white">{automation.conversions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Taxa Conversão</span>
                    <span className="text-sm font-medium text-primary">{automation.conversionRate}%</span>
                  </div>
                  <Progress value={automation.conversionRate} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Leads */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Leads Recentes</h2>
          <Button variant="outline" className="text-white border-border hover:bg-secondary/20">
            <Filter className="h-4 w-4 mr-2" />
            Filtrar
          </Button>
        </div>
        <div className="space-y-4">
          {leads.map((lead) => (
            <Card key={lead.id} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{lead.name}</h3>
                      <Badge variant="outline" className={getStageColor(lead.stage)}>
                        {lead.stage}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-xs text-white">{lead.score}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-white">{lead.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-white">{lead.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-white">{lead.source}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Último contato: {lead.lastContact}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-white border-border hover:bg-secondary/20">
                      <MessageCircle className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-white border-border hover:bg-secondary/20">
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Integration Status */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="text-white">Integrações Ativas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm text-white">WhatsApp</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm text-white">Mailchimp</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm text-white">RD Station</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-warning" />
                <span className="text-sm text-white">Zapier</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CRM;