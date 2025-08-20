import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { notificationService } from "@/services/notificationService";
import { communicationService } from "@/services/communicationService";
import { 
  Video, 
  Camera, 
  Calendar, 
  DollarSign, 
  Lightbulb, 
  TrendingUp,
  Clock,
  MapPin,
  Users,
  Play,
  Edit,
  Eye,
  Plus
} from "lucide-react";

const FocusEstudios = () => {
  const captacoes = [
    {
      id: 1,
      titulo: "Campanha Produto X",
      cliente: "Empresa ABC",
      data: "2024-01-15",
      status: "Em Produção",
      tipo: "Video Institucional",
      duracao: "2:30min",
      local: "São Paulo, SP"
    },
    {
      id: 2,
      titulo: "Lançamento Brand Y",
      cliente: "Startup DEF",
      data: "2024-01-20",
      status: "Planejamento",
      tipo: "Social Media",
      duracao: "1:00min",
      local: "Rio de Janeiro, RJ"
    },
    {
      id: 3,
      titulo: "Evento Corporativo",
      cliente: "Corporação GHI",
      data: "2024-01-25",
      status: "Agendado",
      tipo: "Cobertura de Evento",
      duracao: "4:00h",
      local: "Belo Horizonte, MG"
    }
  ];

  const agendamentos = [
    {
      id: 1,
      data: "2024-01-16",
      horario: "09:00",
      cliente: "Tech Solutions",
      tipo: "Reunião de Briefing",
      status: "Confirmado"
    },
    {
      id: 2,
      data: "2024-01-18",
      horario: "14:00",
      cliente: "Marketing Plus",
      tipo: "Gravação Studio",
      status: "Pendente"
    },
    {
      id: 3,
      data: "2024-01-22",
      horario: "10:30",
      cliente: "Eventos Premium",
      tipo: "Locação Externa",
      status: "Confirmado"
    }
  ];

  const ideiasCampanhas = [
    {
      id: 1,
      titulo: "Campanha Sustentabilidade",
      descricao: "Vídeos focados em práticas sustentáveis",
      categoria: "Institucional",
      tendencia: "ESG"
    },
    {
      id: 2,
      titulo: "Behind the Scenes",
      descricao: "Mostrar processo criativo da marca",
      categoria: "Social Media",
      tendencia: "Autenticidade"
    },
    {
      id: 3,
      titulo: "User Generated Content",
      descricao: "Campanhas com conteúdo dos usuários",
      categoria: "Engajamento",
      tendencia: "Comunidade"
    }
  ];

  const tendencias = [
    { nome: "Vídeos Verticais", crescimento: 85, categoria: "Social Media" },
    { nome: "Live Streaming", crescimento: 67, categoria: "Engagement" },
    { nome: "AR/VR Content", crescimento: 45, categoria: "Inovação" },
    { nome: "Micro-Influencers", crescimento: 78, categoria: "Marketing" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em Produção": return "bg-success/20 text-success border-success/30";
      case "Planejamento": return "bg-warning/20 text-warning border-warning/30";
      case "Agendado": return "bg-info/20 text-info border-info/30";
      case "Confirmado": return "bg-success/20 text-success border-success/30";
      case "Pendente": return "bg-warning/20 text-warning border-warning/30";
      default: return "bg-secondary/20 text-white border-secondary/30";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Focus Estudios
        </h1>
        <p className="text-muted-foreground">
          Central de produção audiovisual - Captações, agendamentos, orçamentos e estratégias criativas.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6 text-center">
            <Video className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">12</div>
            <div className="text-sm text-muted-foreground">Projetos Ativos</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">8</div>
            <div className="text-sm text-muted-foreground">Agendamentos</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6 text-center">
            <DollarSign className="h-8 w-8 text-info mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">R$ 45k</div>
            <div className="text-sm text-muted-foreground">Orçamentos Abertos</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6 text-center">
            <Lightbulb className="h-8 w-8 text-warning mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">25</div>
            <div className="text-sm text-muted-foreground">Ideias Criativas</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="captacoes" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="captacoes">Captações</TabsTrigger>
          <TabsTrigger value="agendamentos">Agendamentos</TabsTrigger>
          <TabsTrigger value="orcamentos">Orçamentos</TabsTrigger>
          <TabsTrigger value="ideias">Ideias & Estratégias</TabsTrigger>
          <TabsTrigger value="tendencias">Tendências</TabsTrigger>
        </TabsList>

        <TabsContent value="captacoes" className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Captações em Andamento</h2>
            <Button 
              className="bg-gradient-primary text-white hover:shadow-glow"
              onClick={() => {
                notificationService.loading("Abrindo formulário de nova captação...");
                setTimeout(() => {
                  notificationService.success("Captação criada com sucesso!", "Uma nova captação foi adicionada ao seu pipeline");
                }, 1500);
              }}
            >
              <Plus className="h-4 w-4 mr-2" />
              Nova Captação
            </Button>
          </div>

          <div className="grid gap-4">
            {captacoes.map((captacao) => (
              <Card key={captacao.id} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">{captacao.titulo}</CardTitle>
                    <Badge variant="outline" className={getStatusColor(captacao.status)}>
                      {captacao.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{captacao.cliente} • {captacao.tipo}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-white">{captacao.data}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm text-white">{captacao.duracao}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm text-white">{captacao.local}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-white border-border hover:bg-secondary/20"
                      onClick={() => {
                        notificationService.loading("Carregando preview...");
                        setTimeout(() => {
                          notificationService.success("Preview carregado com sucesso!");
                        }, 1000);
                      }}
                    >
                      <Play className="h-3 w-3 mr-1" />
                      Preview
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-white border-border hover:bg-secondary/20"
                      onClick={() => {
                        notificationService.info("Editor de captação aberto!", "Você pode editar todos os detalhes da captação");
                      }}
                    >
                      <Edit className="h-3 w-3 mr-1" />
                      Editar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="agendamentos" className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Próximos Agendamentos</h2>
            <Button 
              className="bg-gradient-primary text-white hover:shadow-glow"
              onClick={() => {
                notificationService.loading("Abrindo calendário...");
                setTimeout(() => {
                  notificationService.success("Agendamento criado!", "Cliente foi notificado sobre o novo agendamento");
                }, 1500);
              }}
            >
              <Plus className="h-4 w-4 mr-2" />
              Novo Agendamento
            </Button>
          </div>

          <div className="grid gap-4">
            {agendamentos.map((agendamento) => (
              <Card key={agendamento.id} className="bg-gradient-card border-border shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-white">{agendamento.cliente}</h3>
                      <p className="text-muted-foreground text-sm">{agendamento.tipo}</p>
                    </div>
                    <Badge variant="outline" className={getStatusColor(agendamento.status)}>
                      {agendamento.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm text-white">{agendamento.data}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm text-white">{agendamento.horario}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="orcamentos" className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Orçamentos de Campanha</h2>
            <Button 
              className="bg-gradient-primary text-white hover:shadow-glow"
              onClick={() => {
                notificationService.loading("Criando novo orçamento...");
                setTimeout(() => {
                  notificationService.success("Orçamento criado!", "Template de orçamento personalizado está pronto");
                }, 1500);
              }}
            >
              <Plus className="h-4 w-4 mr-2" />
              Novo Orçamento
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-white">Vídeo Institucional</CardTitle>
                <p className="text-muted-foreground text-sm">Produção completa</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Pré-produção</span>
                    <span className="text-sm text-white">R$ 5.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Gravação</span>
                    <span className="text-sm text-white">R$ 15.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Pós-produção</span>
                    <span className="text-sm text-white">R$ 8.000</span>
                  </div>
                  <div className="border-t border-border pt-2">
                    <div className="flex justify-between font-medium">
                      <span className="text-white">Total</span>
                      <span className="text-primary">R$ 28.000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-white">Social Media Package</CardTitle>
                <p className="text-muted-foreground text-sm">Conteúdo mensal</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Criação</span>
                    <span className="text-sm text-white">R$ 3.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Produção</span>
                    <span className="text-sm text-white">R$ 5.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Edição</span>
                    <span className="text-sm text-white">R$ 2.000</span>
                  </div>
                  <div className="border-t border-border pt-2">
                    <div className="flex justify-between font-medium">
                      <span className="text-white">Total</span>
                      <span className="text-primary">R$ 10.000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-white">Evento Corporativo</CardTitle>
                <p className="text-muted-foreground text-sm">Cobertura completa</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Equipamentos</span>
                    <span className="text-sm text-white">R$ 4.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Equipe</span>
                    <span className="text-sm text-white">R$ 6.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Edição</span>
                    <span className="text-sm text-white">R$ 3.000</span>
                  </div>
                  <div className="border-t border-border pt-2">
                    <div className="flex justify-between font-medium">
                      <span className="text-white">Total</span>
                      <span className="text-primary">R$ 13.000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ideias" className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Ideias & Estratégias de Campanhas</h2>
            <Button 
              className="bg-gradient-primary text-white hover:shadow-glow"
              onClick={() => {
                notificationService.loading("Organizando ideias criativas...");
                setTimeout(() => {
                  notificationService.success("Nova ideia adicionada!", "Conceito salvo no banco de ideias criativas");
                }, 1500);
              }}
            >
              <Plus className="h-4 w-4 mr-2" />
              Nova Ideia
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ideiasCampanhas.map((ideia) => (
              <Card key={ideia.id} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">{ideia.titulo}</CardTitle>
                    <Badge variant="secondary">{ideia.tendencia}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{ideia.descricao}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-primary border-primary/30">
                      {ideia.categoria}
                    </Badge>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-white border-border hover:bg-secondary/20"
                        onClick={() => {
                          notificationService.info("Visualizando ideia", "Detalhes completos da estratégia criativa");
                        }}
                      >
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-white border-border hover:bg-secondary/20"
                        onClick={() => {
                          notificationService.info("Editor de ideia aberto", "Você pode refinar a estratégia");
                        }}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tendencias" className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Tendências do Mercado</h2>
          <Button 
            variant="outline" 
            className="text-white border-border hover:bg-secondary/20"
            onClick={() => {
              notificationService.loading("Gerando relatório de tendências...");
              setTimeout(() => {
                notificationService.success("Relatório completo!", "Análise detalhada das tendências de mercado");
                communicationService.downloadFile("tendencias-focus-estudios.pdf", "PDF");
              }, 2000);
            }}
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Relatório Completo
          </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tendencias.map((tendencia, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">{tendencia.nome}</CardTitle>
                    <Badge variant="outline" className="text-success border-success/30">
                      {tendencia.categoria}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Crescimento</span>
                      <span className="text-lg font-bold text-success">+{tendencia.crescimento}%</span>
                    </div>
                    <Progress value={tendencia.crescimento} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Market References */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-white">Referências do Mercado</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-full h-24 bg-muted rounded-lg mb-2 flex items-center justify-center">
                    <Video className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-medium text-white mb-1">Nike - Dream Crazy</h4>
                  <p className="text-xs text-muted-foreground">Storytelling emocional</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-24 bg-muted rounded-lg mb-2 flex items-center justify-center">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-medium text-white mb-1">Apple - Shot on iPhone</h4>
                  <p className="text-xs text-muted-foreground">User Generated Content</p>
                </div>
                <div className="text-center">
                  <div className="w-full h-24 bg-muted rounded-lg mb-2 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-medium text-white mb-1">Dove - Real Beauty</h4>
                  <p className="text-xs text-muted-foreground">Diversidade e inclusão</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FocusEstudios;