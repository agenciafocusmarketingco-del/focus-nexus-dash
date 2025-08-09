import { MetricsChart } from "@/components/MetricsChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Download, 
  Calendar,
  Filter,
  BarChart3,
  PieChart,
  Target,
  Users
} from "lucide-react";

const reports = [
  {
    id: 1,
    name: "Relatório Mensal - Performance",
    type: "Performance",
    period: "Novembro 2024",
    status: "Pronto",
    size: "2.4 MB"
  },
  {
    id: 2,
    name: "Análise de Tráfego Pago",
    type: "Tráfego",
    period: "Último Trimestre", 
    status: "Pronto",
    size: "1.8 MB"
  },
  {
    id: 3,
    name: "Social Media Analytics",
    type: "Social",
    period: "Novembro 2024",
    status: "Processando",
    size: "3.1 MB"
  },
  {
    id: 4,
    name: "Relatório de Conversões",
    type: "CRM",
    period: "Últimas 4 semanas",
    status: "Pronto",
    size: "1.2 MB"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pronto": return "bg-success/20 text-success border-success/30";
    case "Processando": return "bg-warning/20 text-warning border-warning/30";
    case "Agendado": return "bg-info/20 text-info border-info/30";
    default: return "bg-secondary/20 text-white border-secondary/30";
  }
};

const Reports = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Relatórios</h1>
          <p className="text-muted-foreground">Análises detalhadas e insights dos seus projetos</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-white border-border hover:bg-secondary/20">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button className="bg-gradient-primary text-white hover:shadow-glow">
            <Calendar className="h-4 w-4 mr-2" />
            Gerar Relatório
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">24</div>
            <div className="text-sm text-muted-foreground">Relatórios Gerados</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6 text-center">
            <BarChart3 className="h-8 w-8 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">89%</div>
            <div className="text-sm text-muted-foreground">Taxa de Crescimento</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 text-info mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">4.2x</div>
            <div className="text-sm text-muted-foreground">ROAS Médio</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-warning mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">1,847</div>
            <div className="text-sm text-muted-foreground">Leads Captados</div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-white">Performance Geral</CardTitle>
          </CardHeader>
          <CardContent>
            <MetricsChart />
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-white">Distribuição de Resultados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-white">Tráfego Pago</span>
                </div>
                <span className="text-white font-medium">45%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-white">Social Media</span>
                </div>
                <span className="text-white font-medium">30%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-info rounded-full"></div>
                  <span className="text-white">SEO Orgânico</span>
                </div>
                <span className="text-white font-medium">25%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports List */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Relatórios Disponíveis</h2>
        <div className="space-y-4">
          {reports.map((report) => (
            <Card key={report.id} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{report.name}</h3>
                      <Badge variant="outline" className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {report.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span>Período: {report.period}</span>
                      <span>Tamanho: {report.size}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {report.status === "Pronto" && (
                      <Button size="sm" className="bg-gradient-primary text-white hover:shadow-glow">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="text-white border-border hover:bg-secondary/20">
                      Visualizar
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

export default Reports;