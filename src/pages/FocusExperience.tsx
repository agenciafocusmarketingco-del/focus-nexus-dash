import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  Heart, 
  MessageSquare, 
  Users, 
  TrendingUp,
  Calendar,
  Award,
  CheckCircle,
  Clock,
  Send
} from "lucide-react";

const FocusExperience = () => {
  const testimonials = [
    {
      client: "João Silva - CEO TechCorp",
      rating: 5,
      date: "15 Nov 2024",
      feedback: "Excelente trabalho da equipe Focus! Superaram nossas expectativas em todos os aspectos do projeto. A comunicação foi clara e os resultados extraordinários.",
      project: "Rebranding Completo",
      status: "Concluído"
    },
    {
      client: "Maria Santos - Diretora de Marketing",
      rating: 5,
      date: "12 Nov 2024",
      feedback: "Profissionais excepcionais! O ROI das campanhas aumentou 340% desde que começamos a trabalhar juntos. Recomendo fortemente!",
      project: "Campanhas Meta Ads",
      status: "Ativo"
    },
    {
      client: "Carlos Mendes - Founder StartupX",
      rating: 4,
      date: "08 Nov 2024",
      feedback: "Ótima experiência! A equipe é muito dedicada e sempre disponível para esclarecimentos. Os prazos foram cumpridos rigorosamente.",
      project: "Desenvolvimento Web",
      status: "Concluído"
    }
  ];

  const npsScores = [
    { month: "Janeiro", score: 85, responses: 42 },
    { month: "Fevereiro", score: 87, responses: 38 },
    { month: "Março", score: 91, responses: 45 },
    { month: "Abril", score: 89, responses: 52 },
    { month: "Maio", score: 93, responses: 48 },
  ];

  const satisfactionMetrics = [
    { metric: "Satisfação Geral", score: "4.8/5", trend: "+0.3", positive: true },
    { metric: "Qualidade do Atendimento", score: "4.9/5", trend: "+0.2", positive: true },
    { metric: "Cumprimento de Prazos", score: "4.7/5", trend: "+0.1", positive: true },
    { metric: "Comunicação", score: "4.8/5", trend: "+0.4", positive: true },
  ];

  const improvements = [
    {
      suggestion: "Relatórios mais frequentes",
      impact: "Alto",
      status: "Implementado",
      date: "Outubro 2024"
    },
    {
      suggestion: "Dashboard em tempo real",
      impact: "Médio",
      status: "Em desenvolvimento",
      date: "Novembro 2024"
    },
    {
      suggestion: "Notificações push",
      impact: "Baixo",
      status: "Planejado",
      date: "Dezembro 2024"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Focus Experience
        </h1>
        <p className="text-muted-foreground">
          Centro de experiência do cliente - feedbacks, avaliações e melhorias contínuas.
        </p>
      </div>

      {/* Métricas de Satisfação */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {satisfactionMetrics.map((metric, index) => (
          <Card key={index} className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Heart className="h-5 w-5 text-primary" />
                <Badge variant={metric.positive ? "default" : "destructive"} className="text-xs">
                  {metric.trend}
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{metric.score}</h3>
              <p className="text-sm text-muted-foreground">{metric.metric}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="feedback" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="feedback">Feedbacks</TabsTrigger>
          <TabsTrigger value="nps">NPS Score</TabsTrigger>
          <TabsTrigger value="improvements">Melhorias</TabsTrigger>
          <TabsTrigger value="rating">Avaliar</TabsTrigger>
        </TabsList>

        <TabsContent value="feedback" className="space-y-6">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Feedbacks Recentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-foreground">{testimonial.client}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex">{renderStars(testimonial.rating)}</div>
                            <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                          </div>
                        </div>
                        <Badge variant={testimonial.status === "Ativo" ? "default" : "secondary"}>
                          {testimonial.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{testimonial.feedback}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {testimonial.project}
                        </Badge>
                      </div>
                    </div>
                    {index < testimonials.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nps" className="space-y-6">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Net Promoter Score (NPS)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-6 border border-border rounded-lg bg-card">
                  <div className="text-4xl font-bold text-primary mb-2">93</div>
                  <p className="text-muted-foreground">NPS Score Atual</p>
                  <Badge variant="default" className="mt-2">Excelente</Badge>
                </div>
                
                <div className="space-y-3">
                  {npsScores.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg bg-card">
                      <div>
                        <span className="font-medium text-foreground">{item.month}</span>
                        <span className="text-sm text-muted-foreground ml-2">({item.responses} respostas)</span>
                      </div>
                      <div className="text-lg font-bold text-primary">{item.score}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="improvements" className="space-y-6">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Melhorias e Sugestões
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {improvements.map((improvement, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg bg-card">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1">{improvement.suggestion}</h4>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          Impacto: {improvement.impact}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{improvement.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {improvement.status === "Implementado" && <CheckCircle className="h-4 w-4 text-green-500" />}
                      {improvement.status === "Em desenvolvimento" && <Clock className="h-4 w-4 text-yellow-500" />}
                      {improvement.status === "Planejado" && <Calendar className="h-4 w-4 text-blue-500" />}
                      <Badge variant={
                        improvement.status === "Implementado" ? "default" : 
                        improvement.status === "Em desenvolvimento" ? "secondary" : "outline"
                      }>
                        {improvement.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rating" className="space-y-6">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Avalie Nosso Atendimento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-medium text-foreground mb-4">
                    Como você avalia sua experiência com a Focus?
                  </h3>
                  <div className="flex justify-center gap-2 mb-6">
                    {Array.from({ length: 5 }, (_, i) => (
                      <button key={i} className="p-2 hover:bg-accent rounded-lg transition-colors">
                        <Star className="h-8 w-8 text-gray-300 hover:text-yellow-400 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Conte-nos sobre sua experiência
                    </label>
                    <Textarea 
                      placeholder="Compartilhe seus comentários, sugestões ou elogios..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Projeto relacionado (opcional)
                    </label>
                    <select className="w-full p-2 border border-border rounded-lg bg-background text-foreground">
                      <option>Selecione um projeto</option>
                      <option>Branding</option>
                      <option>Tráfego Pago</option>
                      <option>Social Media</option>
                      <option>Desenvolvimento</option>
                      <option>CRM & Automação</option>
                    </select>
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Avaliação
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FocusExperience;