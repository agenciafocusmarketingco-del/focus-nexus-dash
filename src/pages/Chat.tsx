import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { notificationService } from "@/services/notificationService";
import { 
  MessageCircle, 
  Newspaper, 
  TrendingUp, 
  Building, 
  Lightbulb, 
  Rocket, 
  Clock,
  Bookmark,
  Share2,
  Search,
  Filter,
  Star,
  ExternalLink,
  Eye,
  Heart,
  ChevronRight,
  Send,
  Paperclip,
  Phone,
  Video,
  Users,
  Settings,
  Headphones,
  Target,
  Zap,
  Code,
  Plus,
  FileText,
  AlertCircle,
  CheckCircle,
  Timer
} from "lucide-react";

const teamSectors = [
  {
    id: 1,
    name: "Comercial",
    description: "Vendas, propostas e novos projetos",
    icon: Building,
    team: ["Ana Silva - Consultora", "Pedro Costa - Gerente"],
    online: 2,
    color: "text-blue-500"
  },
  {
    id: 2,
    name: "Tráfego Pago",
    description: "Campanhas, otimização e resultados",
    icon: Target,
    team: ["Carlos Lima - Especialista", "Maria Santos - Analista"],
    online: 1,
    color: "text-green-500"
  },
  {
    id: 3,
    name: "Focus Estúdios",
    description: "Audiovisual, edição e produção",
    icon: Video,
    team: ["João Silva - Editor", "Laura Mendes - Produtora"],
    online: 2,
    color: "text-purple-500"
  },
  {
    id: 4,
    name: "Tech & Desenvolvimento",
    description: "Sites, sistemas e suporte técnico",
    icon: Code,
    team: ["Rafael Tech - Dev Lead", "Bruno Code - Frontend"],
    online: 1,
    color: "text-orange-500"
  }
];

const tickets = [
  {
    id: "T001",
    title: "Revisão da campanha Black Friday",
    sector: "Tráfego Pago",
    status: "Aberto",
    priority: "Alta",
    created: "2h atrás",
    lastUpdate: "30min atrás"
  },
  {
    id: "T002", 
    title: "Ajuste no vídeo institucional",
    sector: "Focus Estúdios",
    status: "Em Andamento",
    priority: "Média",
    created: "1 dia atrás",
    lastUpdate: "2h atrás"
  },
  {
    id: "T003",
    title: "Bug no formulário de contato",
    sector: "Tech & Desenvolvimento", 
    status: "Resolvido",
    priority: "Alta",
    created: "3 dias atrás",
    lastUpdate: "1 dia atrás"
  }
];

const messages = [
  {
    id: 1,
    sender: "Carlos Lima - Tráfego Pago",
    content: "Olá! Vi que você quer revisar a campanha. Vou enviar o relatório de performance agora.",
    time: "14:30",
    isOwn: false,
    sector: "Tráfego Pago"
  },
  {
    id: 2,
    sender: "Você",
    content: "Perfeito! Também gostaria de discutir as palavras-chave que não estão convertendo bem.",
    time: "14:32",
    isOwn: true,
    sector: "Tráfego Pago"
  },
  {
    id: 3,
    sender: "Carlos Lima - Tráfego Pago",
    content: "Claro! Identifiquei algumas que precisam de ajuste. Que tal uma call rápida às 16h?",
    time: "14:35",
    isOwn: false,
    sector: "Tráfego Pago"
  }
];

const focusNews = [
  {
    id: 1,
    title: "Meta anuncia novas funcionalidades para Instagram Ads em 2024",
    summary: "Plataforma introduz IA avançada para otimização automática de campanhas e novas opções de segmentação comportamental.",
    category: "Marketing Digital",
    readTime: "3 min",
    publishedAt: "2h atrás",
    author: "Focus Team",
    views: 1.2,
    likes: 45,
    isFavorite: false,
    tags: ["Instagram", "Meta", "IA", "Publicidade"],
    image: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png"
  },
  {
    id: 2,
    title: "Google Analytics 4: Novas métricas de engajamento revolucionam análises",
    summary: "Atualização traz insights mais profundos sobre comportamento do usuário e predições baseadas em machine learning.",
    category: "Analytics",
    readTime: "4 min",
    publishedAt: "5h atrás",
    author: "Focus Team",
    views: 2.1,
    likes: 78,
    isFavorite: true,
    tags: ["Google", "Analytics", "Métricas", "ML"],
    image: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png"
  },
  {
    id: 3,
    title: "TikTok for Business expande ferramentas de e-commerce para PMEs",
    summary: "Nova suite de ferramentas permite integração direta com lojas virtuais e checkout nativo na plataforma.",
    category: "E-commerce",
    readTime: "2 min",
    publishedAt: "8h atrás",
    author: "Focus Team",
    views: 892,
    likes: 34,
    isFavorite: false,
    tags: ["TikTok", "E-commerce", "PME", "Social Commerce"],
    image: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png"
  },
  {
    id: 4,
    title: "Startups brasileiras recebem R$ 2.8 bi em investimentos no Q4",
    summary: "Setor de marketing technology (martech) lidera captações com foco em soluções de automação e inteligência artificial.",
    category: "Empreendedorismo",
    readTime: "5 min",
    publishedAt: "12h atrás",
    author: "Focus Team",
    views: 3.4,
    likes: 156,
    isFavorite: true,
    tags: ["Startups", "Investimento", "MarTech", "Brasil"],
    image: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png"
  },
  {
    id: 5,
    title: "ChatGPT-4 Turbo: Como usar IA para criar campanhas de marketing mais eficazes",
    summary: "Guia prático mostra como aproveitar recursos avançados da IA para copywriting, segmentação e análise de dados.",
    category: "Inovação & Tecnologia",
    readTime: "6 min",
    publishedAt: "1 dia atrás",
    author: "Focus Team",
    views: 5.7,
    likes: 289,
    isFavorite: false,
    tags: ["IA", "ChatGPT", "Copywriting", "Automação"],
    image: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png"
  }
];

const categories = [
  { name: "Marketing Digital", icon: TrendingUp, count: 12 },
  { name: "Empreendedorismo", icon: Building, count: 8 },
  { name: "Inovação & Tecnologia", icon: Lightbulb, count: 15 },
  { name: "Growth & Startups", icon: Rocket, count: 9 },
  { name: "Tendências do Futuro", icon: Star, count: 6 }
];

const favoriteNews = focusNews.filter(news => news.isFavorite);

const handleSaveToFavorites = (newsId: number) => {
  notificationService.success("Notícia salva nos favoritos!");
};

const handleShare = (newsTitle: string) => {
  notificationService.info(`Compartilhando: ${newsTitle}`);
};

const handleStartChat = (sectorName: string) => {
  notificationService.success(`Conectando com a equipe de ${sectorName}...`);
};

const handleCreateTicket = () => {
  notificationService.success("Novo chamado criado com sucesso!");
};

const handleWhatsAppContact = () => {
  window.open("https://wa.me/5511999999999?text=Olá! Gostaria de falar com a equipe Focus.", "_blank");
  notificationService.success("Redirecionando para WhatsApp...");
};

const Chat = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Comunicação & News
          </h1>
          <p className="text-muted-foreground">
            Mantenha-se atualizado com as últimas tendências do mercado e insights exclusivos da Focus.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" />
            Buscar
          </Button>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>
      </div>

      <Tabs defaultValue="team" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="team" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Comunicação com a Equipe
          </TabsTrigger>
          <TabsTrigger value="news" className="flex items-center gap-2">
            <Newspaper className="h-4 w-4" />
            Focus News
          </TabsTrigger>
          <TabsTrigger value="favorites" className="flex items-center gap-2">
            <Bookmark className="h-4 w-4" />
            Favoritos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="team" className="space-y-6">
          {/* Quick Contact Button */}
          <div className="mb-6">
            <Button 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4"
              onClick={handleWhatsAppContact}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Falar com a Equipe Agora
            </Button>
          </div>

          {/* Team Sectors */}
          <Card className="bg-gradient-card border-border shadow-card mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Setores da Equipe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teamSectors.map((sector) => {
                  const IconComponent = sector.icon;
                  return (
                    <div key={sector.id} className="p-4 border border-border rounded-lg bg-card hover:bg-accent transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className={`h-6 w-6 ${sector.color}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{sector.name}</h4>
                            <p className="text-sm text-muted-foreground">{sector.description}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {sector.online} online
                        </Badge>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-xs text-muted-foreground mb-1">Equipe:</p>
                        {sector.team.map((member, index) => (
                          <p key={index} className="text-sm text-foreground">• {member}</p>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleStartChat(sector.name)}
                        >
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Chat
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            notificationService.info(`Agendando call com ${sector.name}...`);
                          }}
                        >
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Active Chat */}
          <Card className="bg-gradient-card border-border shadow-card mb-6">
            <CardHeader className="border-b border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Target className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Tráfego Pago</CardTitle>
                    <p className="text-sm text-muted-foreground">Carlos Lima está online</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Video className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="h-64 overflow-y-auto mb-4 space-y-3">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] ${message.isOwn ? 'order-2' : 'order-1'}`}>
                      {!message.isOwn && (
                        <p className="text-xs text-muted-foreground mb-1">{message.sender}</p>
                      )}
                      <div className={`p-3 rounded-lg ${
                        message.isOwn 
                          ? 'bg-primary text-white' 
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">{message.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input 
                  placeholder="Digite sua mensagem..." 
                  className="flex-1"
                />
                <Button size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tickets Section */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Meus Chamados
                </CardTitle>
                <Button size="sm" onClick={handleCreateTicket}>
                  <Plus className="h-4 w-4 mr-1" />
                  Novo Chamado
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tickets.map((ticket) => (
                  <div key={ticket.id} className="p-4 border border-border rounded-lg bg-card">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-sm text-muted-foreground">#{ticket.id}</span>
                          <Badge 
                            variant={
                              ticket.status === "Aberto" ? "destructive" :
                              ticket.status === "Em Andamento" ? "default" : "secondary"
                            }
                            className="text-xs"
                          >
                            {ticket.status}
                          </Badge>
                          <Badge 
                            variant={ticket.priority === "Alta" ? "destructive" : "outline"}
                            className="text-xs"
                          >
                            {ticket.priority}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-foreground mb-1">{ticket.title}</h4>
                        <p className="text-sm text-muted-foreground">{ticket.sector}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Criado {ticket.created}</span>
                      <span>Atualizado {ticket.lastUpdate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="news" className="space-y-6">
          {/* News Categories */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Newspaper className="h-5 w-5 text-primary" />
                Categorias de Notícias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {categories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <Button 
                      key={index}
                      variant="outline" 
                      className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-primary/10 hover:border-primary/20"
                    >
                      <IconComponent className="h-6 w-6 text-primary" />
                      <div className="text-center">
                        <div className="font-medium text-sm">{category.name}</div>
                        <div className="text-xs text-muted-foreground">{category.count} artigos</div>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Featured News */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Destaque da Semana
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                <img 
                  src={focusNews[0].image} 
                  alt={focusNews[0].title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <Badge className="mb-2">{focusNews[0].category}</Badge>
                  <h3 className="text-xl font-bold text-foreground mb-2">{focusNews[0].title}</h3>
                  <p className="text-muted-foreground mb-4">{focusNews[0].summary}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {focusNews[0].readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {focusNews[0].views}k visualizações
                      </span>
                    </div>
                    <Button onClick={() => {
                      window.open("https://preview--wiktok-517.lovable.app/?q=Rainbow%20(rock%20band)", "_blank");
                    }}>
                      Ler Artigo Completo
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusNews.slice(1).map((news, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-3 left-3">{news.category}</Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                    onClick={() => handleSaveToFavorites(news.id)}
                  >
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2 line-clamp-2">{news.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{news.summary}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {news.readTime}
                    </span>
                    <span>{news.publishedAt}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {news.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {news.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {news.views}k
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleShare(news.title)}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Ler
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="favorites" className="space-y-6">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bookmark className="h-5 w-5 text-primary" />
                Notícias Favoritas
              </CardTitle>
            </CardHeader>
            <CardContent>
              {favoriteNews.length === 0 ? (
                <div className="text-center py-8">
                  <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Nenhuma notícia salva ainda.</p>
                  <p className="text-sm text-muted-foreground">Clique no ícone de bookmark para salvar artigos interessantes.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {favoriteNews.map((news, index) => (
                    <div key={index} className="flex gap-4 p-4 border border-border rounded-lg bg-card hover:bg-accent transition-colors">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline">{news.category}</Badge>
                          <span className="text-xs text-muted-foreground">{news.publishedAt}</span>
                        </div>
                        <h4 className="font-medium text-foreground mb-2">{news.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{news.summary}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {news.readTime}
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              {news.likes}
                            </span>
                          </div>
                          <Button size="sm">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Ler Artigo
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Chat;