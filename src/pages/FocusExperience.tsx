import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { notificationService } from "@/services/notificationService";
import { communicationService } from "@/services/communicationService";
import { 
  BookOpen, 
  Video, 
  Calendar, 
  Users, 
  Download,
  Play,
  Clock,
  Star,
  MapPin,
  Search,
  Filter,
  Heart,
  MessageCircle,
  Share2,
  GraduationCap,
  Trophy,
  Target,
  Lightbulb,
  Rocket,
  Brain,
  TrendingUp,
  Award,
  BookMarked,
  PlayCircle
} from "lucide-react";

const FocusExperience = () => {
  const ebooks = [
    {
      title: "Guia Completo de Marketing Digital 2024",
      description: "Estratégias avançadas para aumentar vendas online",
      category: "Marketing",
      pages: 45,
      downloads: 1250,
      rating: 4.8,
      image: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png"
    },
    {
      title: "ROI em Campanhas de Tráfego Pago",
      description: "Como otimizar seus investimentos em ads",
      category: "Ads",
      pages: 32,
      downloads: 890,
      rating: 4.9,
      image: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png"
    },
    {
      title: "Branding que Converte",
      description: "Construindo uma marca forte e lucrativa",
      category: "Branding",
      pages: 28,
      downloads: 756,
      rating: 4.7,
      image: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png"
    }
  ];

  const focusSchoolCourses = [
    {
      title: "Marketing & Branding",
      description: "Construa marcas que conectam e vendem",
      duration: "12h",
      modules: 24,
      students: 680,
      rating: 4.9,
      level: "Intermediário",
      icon: Target,
      category: "Marketing",
      price: "R$ 397",
      image: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png"
    },
    {
      title: "Edição e Videomaker",
      description: "Domine a arte da criação audiovisual",
      duration: "16h",
      modules: 32,
      students: 420,
      rating: 4.8,
      level: "Iniciante",
      icon: Video,
      category: "Audiovisual",
      price: "R$ 497",
      image: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png"
    },
    {
      title: "Growth Marketing",
      description: "Estratégias para crescimento exponencial",
      duration: "10h",
      modules: 20,
      students: 350,
      rating: 4.9,
      level: "Avançado",
      icon: TrendingUp,
      category: "Growth",
      price: "R$ 597",
      image: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png"
    },
    {
      title: "Skills do Século 21",
      description: "Competências essenciais para o futuro",
      duration: "8h",
      modules: 16,
      students: 520,
      rating: 4.7,
      level: "Iniciante",
      icon: Lightbulb,
      category: "Soft Skills",
      price: "R$ 297",
      image: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png"
    },
    {
      title: "Empreendedorismo",
      description: "Do sonho ao negócio de sucesso",
      duration: "14h",
      modules: 28,
      students: 380,
      rating: 4.8,
      level: "Intermediário",
      icon: Rocket,
      category: "Negócios",
      price: "R$ 497",
      image: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png"
    },
    {
      title: "Neuromarketing e Comunicação Persuasiva",
      description: "A ciência por trás das decisões de compra",
      duration: "9h",
      modules: 18,
      students: 290,
      rating: 4.9,
      level: "Avançado",
      icon: Brain,
      category: "Psicologia",
      price: "R$ 697",
      image: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png"
    },
    {
      title: "Funil de Vendas e Social Media",
      description: "Conversão através das redes sociais",
      duration: "11h",
      modules: 22,
      students: 450,
      rating: 4.8,
      level: "Intermediário",
      icon: Users,
      category: "Social Media",
      price: "R$ 397",
      image: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png"
    }
  ];

  const eventos = [
    {
      title: "Workshop: Meta Ads 2024",
      date: "15 Dezembro 2024",
      time: "14:00 - 17:00",
      type: "Workshop",
      participants: 45,
      location: "Online",
      price: "Gratuito",
      status: "Inscrições Abertas"
    },
    {
      title: "Focus Summit: Futuro do Marketing",
      date: "22 Janeiro 2025",
      time: "09:00 - 18:00",
      type: "Evento",
      participants: 200,
      location: "São Paulo - SP",
      price: "R$ 150",
      status: "Em Breve"
    },
    {
      title: "Masterclass: Growth Hacking",
      date: "28 Janeiro 2025",
      time: "19:00 - 21:00",
      type: "Palestra",
      participants: 80,
      location: "Online",
      price: "R$ 50",
      status: "Inscrições Abertas"
    }
  ];

  const communityPosts = [
    {
      author: "João Silva",
      avatar: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png",
      time: "2h atrás",
      content: "Acabei de implementar as estratégias do curso de Facebook Ads e já vejo resultados! ROAS de 4.2x na primeira semana. Obrigado Focus Team! 🚀",
      likes: 24,
      comments: 8,
      category: "Sucesso"
    },
    {
      author: "Maria Costa",
      avatar: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png",
      time: "5h atrás",
      content: "Alguém mais vai participar do Workshop de Meta Ads? Seria legal criar um grupo para trocar experiências depois!",
      likes: 12,
      comments: 15,
      category: "Eventos"
    },
    {
      author: "Carlos Mendes",
      avatar: "/lovable-uploads/c20312c1-8c91-4294-929b-ca8e8714c5d0.png",
      time: "1 dia atrás",
      content: "Dúvida sobre segmentação no Google Ads: vocês recomendam começar com audiences amplas ou segmentadas desde o início?",
      likes: 8,
      comments: 22,
      category: "Dúvida"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Focus Experience
          </h1>
          <p className="text-muted-foreground">
            Centro de aprendizado e comunidade - acesse conteúdos exclusivos, participe de eventos e conecte-se com outros clientes.
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

      <Tabs defaultValue="content" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="content">Conteúdos</TabsTrigger>
          <TabsTrigger value="school">Focus School</TabsTrigger>
          <TabsTrigger value="events">Eventos</TabsTrigger>
          <TabsTrigger value="community">Comunidade</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* eBooks */}
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  eBooks Exclusivos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ebooks.map((ebook, index) => (
                    <div key={index} className="flex gap-4 p-4 border border-border rounded-lg bg-card hover:bg-accent transition-colors">
                      <img 
                        src={ebook.image} 
                        alt={ebook.title}
                        className="w-16 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{ebook.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{ebook.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                          <span>{ebook.pages} páginas</span>
                          <span>{ebook.downloads} downloads</span>
                          <div className="flex items-center gap-1">
                            {renderStars(ebook.rating)}
                            <span>{ebook.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{ebook.category}</Badge>
                          <Button 
                            size="sm"
                            onClick={() => {
                              notificationService.loading(`Baixando ${ebook.title}...`);
                              setTimeout(() => {
                                notificationService.success("eBook baixado com sucesso!");
                                communicationService.downloadFile(`${ebook.title}.pdf`, "PDF");
                              }, 1000);
                            }}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Preview Cursos Focus School */}
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Cursos Focus School
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {focusSchoolCourses.slice(0, 3).map((curso, index) => (
                    <div key={index} className="flex gap-4 p-4 border border-border rounded-lg bg-card hover:bg-accent transition-colors">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <curso.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{curso.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{curso.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {curso.duration}
                          </span>
                          <span>{curso.modules} módulos</span>
                          <span>{curso.students} alunos</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{curso.level}</Badge>
                            <div className="flex items-center gap-1">
                              {renderStars(curso.rating)}
                              <span className="text-xs">{curso.rating}</span>
                            </div>
                          </div>
                          <Button 
                            size="sm"
                            onClick={() => notificationService.info(`Ver curso: ${curso.title} na Focus School`)}
                          >
                            <GraduationCap className="h-4 w-4 mr-1" />
                            Ver Curso
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="text-center pt-4">
                    <Button variant="outline" className="w-full">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Ver Todos os Cursos na Focus School
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="school" className="space-y-6">
          {/* Focus School Header */}
          <div className="text-center mb-8 p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <GraduationCap className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3">Focus School</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Aprenda com a Focus School: inovação, marketing e as habilidades do futuro.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <BookMarked className="h-5 w-5 mr-2" />
                Matrícula Online
              </Button>
              <Button variant="outline" size="lg" onClick={() => {
                window.open("https://preview--focus-spark-portal.lovable.app/", "_blank");
                notificationService.success("Redirecionando para o Portal do Aluno...");
              }}>
                <PlayCircle className="h-5 w-5 mr-2" />
                Portal do Aluno
              </Button>
              <Button variant="outline" size="lg">
                <Trophy className="h-5 w-5 mr-2" />
                Meu Progresso
              </Button>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusSchoolCourses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">{course.category}</Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{course.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </span>
                        <span>{course.modules} módulos</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {course.students} alunos
                        </span>
                        <Badge variant="outline">{course.level}</Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        {renderStars(course.rating)}
                        <span className="text-sm ml-1">{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-primary">{course.price}</div>
                      <Button 
                        size="sm"
                        onClick={() => {
                          notificationService.success(`Matriculando em ${course.title}!`);
                        }}
                      >
                        <GraduationCap className="h-4 w-4 mr-1" />
                        Matricular
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Gamification Section */}
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Seu Progresso de Aprendizagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <p className="text-sm text-muted-foreground">Cursos Concluídos</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">47h</div>
                  <p className="text-sm text-muted-foreground">Horas de Estudo</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">12</div>
                  <p className="text-sm text-muted-foreground">Badges Conquistadas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Próximos Eventos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {eventos.map((evento, index) => (
                  <div key={index} className="p-6 border border-border rounded-lg bg-card hover:bg-accent transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant={
                        evento.type === "Workshop" ? "default" : 
                        evento.type === "Evento" ? "secondary" : "outline"
                      }>
                        {evento.type}
                      </Badge>
                      <Badge variant={
                        evento.status === "Inscrições Abertas" ? "default" : "outline"
                      }>
                        {evento.status}
                      </Badge>
                    </div>
                    
                    <h4 className="font-semibold text-foreground mb-2">{evento.title}</h4>
                    
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {evento.date} • {evento.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {evento.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {evento.participants} participantes
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-primary">{evento.price}</div>
                      <Button 
                        size="sm" 
                        disabled={evento.status !== "Inscrições Abertas"}
                        onClick={() => {
                          if (evento.status === "Inscrições Abertas") {
                            notificationService.success(`Inscrição realizada para ${evento.title}!`);
                          }
                        }}
                      >
                        {evento.status === "Inscrições Abertas" ? "Inscrever-se" : "Em Breve"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-6">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Comunidade Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <Input placeholder="Compartilhe algo com a comunidade..." className="flex-1" />
                  <Button>
                    <Share2 className="h-4 w-4 mr-2" />
                    Postar
                  </Button>
                </div>
              </div>
              
              <div className="space-y-6">
                {communityPosts.map((post, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg bg-card">
                    <div className="flex items-start gap-3 mb-3">
                      <img 
                        src={post.avatar} 
                        alt={post.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-foreground">{post.author}</h4>
                          <Badge variant="outline" className="text-xs">{post.category}</Badge>
                          <span className="text-xs text-muted-foreground">{post.time}</span>
                        </div>
                        <p className="text-muted-foreground">{post.content}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        <Heart className="h-4 w-4" />
                        {post.likes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        {post.comments}
                      </button>
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        <Share2 className="h-4 w-4" />
                        Compartilhar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FocusExperience;