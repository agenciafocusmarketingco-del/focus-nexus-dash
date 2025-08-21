import React, { useState, useEffect } from 'react';
import { Star, Send, Award, TrendingUp, MessageSquare, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { notificationService } from '@/services/notificationService';

interface Evaluation {
  id: string;
  rating: number;
  comment: string;
  category: string;
  date: string;
  status: 'sent' | 'responded';
}

interface ServiceCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'traffic',
    name: 'Tráfego Pago',
    icon: <TrendingUp className="h-5 w-5" />,
    description: 'Campanhas, otimização e resultados'
  },
  {
    id: 'social',
    name: 'Social Media',
    icon: <MessageSquare className="h-5 w-5" />,
    description: 'Gestão de redes sociais e conteúdo'
  },
  {
    id: 'crm',
    name: 'CRM & Automação',
    icon: <CheckCircle className="h-5 w-5" />,
    description: 'Automações e gestão de leads'
  },
  {
    id: 'general',
    name: 'Atendimento Geral',
    icon: <Award className="h-5 w-5" />,
    description: 'Suporte técnico e relacionamento'
  }
];

// Mock data for overall ratings
const overallStats = {
  averageRating: 4.7,
  totalEvaluations: 347,
  distribution: {
    5: 68,
    4: 20,
    3: 8,
    2: 3,
    1: 1
  }
};

export default function ServiceEvaluation() {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userEvaluations, setUserEvaluations] = useState<Evaluation[]>([]);

  // Load user's previous evaluations (mock data)
  useEffect(() => {
    const mockEvaluations: Evaluation[] = [
      {
        id: '1',
        rating: 5,
        comment: 'Excelente trabalho na campanha de Black Friday! Superaram nossas expectativas.',
        category: 'Tráfego Pago',
        date: '2024-01-15',
        status: 'responded'
      },
      {
        id: '2',
        rating: 4,
        comment: 'Bom atendimento, mas poderia ser mais rápido nas respostas.',
        category: 'Atendimento Geral',
        date: '2024-01-10',
        status: 'sent'
      }
    ];
    setUserEvaluations(mockEvaluations);
  }, []);

  const handleSubmitEvaluation = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      notificationService.error('Por favor, selecione uma avaliação');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = notificationService.loading('Enviando avaliação...');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newEvaluation: Evaluation = {
        id: Date.now().toString(),
        rating,
        comment,
        category: serviceCategories.find(cat => cat.id === selectedCategory)?.name || 'Geral',
        date: new Date().toISOString().split('T')[0],
        status: 'sent'
      };

      setUserEvaluations(prev => [newEvaluation, ...prev]);
      
      notificationService.dismiss(loadingToast);
      notificationService.success('Avaliação enviada com sucesso! Obrigado pelo seu feedback.');
      
      // Reset form
      setRating(0);
      setComment('');
      setSelectedCategory('general');
      
    } catch (error) {
      notificationService.dismiss(loadingToast);
      notificationService.error('Erro ao enviar avaliação. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (count: number, interactive: boolean = false) => {
    return Array.from({ length: 5 }, (_, index) => {
      const starNumber = index + 1;
      const isActive = interactive ? 
        (hoverRating >= starNumber || (hoverRating === 0 && rating >= starNumber)) :
        count >= starNumber;
      
      return (
        <Star
          key={index}
          className={`h-6 w-6 cursor-pointer transition-all duration-200 ${
            isActive 
              ? 'fill-primary text-primary drop-shadow-sm' 
              : 'text-muted-foreground hover:text-primary/60'
          }`}
          onClick={interactive ? () => setRating(starNumber) : undefined}
          onMouseEnter={interactive ? () => setHoverRating(starNumber) : undefined}
          onMouseLeave={interactive ? () => setHoverRating(0) : undefined}
        />
      );
    });
  };

  return (
    <div className="min-h-screen bg-background p-6 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Award className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Avaliação de Serviços</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Sua opinião é fundamental para melhorarmos continuamente nossos serviços
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Evaluation Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border/50 bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                <Star className="h-6 w-6 text-primary" />
                Nova Avaliação
              </CardTitle>
              <CardDescription>
                Avalie nosso atendimento e serviços para nos ajudar a melhorar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitEvaluation} className="space-y-6">
                {/* Service Category Selection */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Categoria do Serviço
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceCategories.map(category => (
                      <div
                        key={category.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          selectedCategory === category.id
                            ? 'border-primary bg-primary/10 shadow-glow'
                            : 'border-border hover:border-primary/50 hover:bg-secondary/30'
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${
                            selectedCategory === category.id 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-secondary text-secondary-foreground'
                          }`}>
                            {category.icon}
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground">{category.name}</h3>
                            <p className="text-xs text-muted-foreground">{category.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Sua Avaliação
                  </label>
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(rating, true)}
                    {rating > 0 && (
                      <span className="ml-3 text-sm text-muted-foreground">
                        {rating === 1 && 'Muito Insatisfeito'}
                        {rating === 2 && 'Insatisfeito'}
                        {rating === 3 && 'Regular'}
                        {rating === 4 && 'Satisfeito'}
                        {rating === 5 && 'Muito Satisfeito'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Comment */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Comentário (Opcional)
                  </label>
                  <Textarea
                    placeholder="Conte-nos mais sobre sua experiência... O que podemos melhorar?"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="min-h-[120px] bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || rating === 0}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? 'Enviando...' : 'Enviar Avaliação'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* User's Previous Evaluations */}
          {userEvaluations.length > 0 && (
            <Card className="border-border/50 bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Suas Avaliações Anteriores
                </CardTitle>
                <CardDescription>
                  Histórico das suas avaliações enviadas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {userEvaluations.map(evaluation => (
                  <div key={evaluation.id} className="p-4 bg-card rounded-lg border border-border/50">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {renderStars(evaluation.rating)}
                          <Badge variant="outline">{evaluation.category}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {new Date(evaluation.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <Badge variant={evaluation.status === 'responded' ? 'default' : 'secondary'}>
                        {evaluation.status === 'responded' ? 'Respondida' : 'Enviada'}
                      </Badge>
                    </div>
                    {evaluation.comment && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {evaluation.comment}
                      </p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Statistics Sidebar */}
        <div className="space-y-6">
          {/* Overall Rating */}
          <Card className="border-border/50 bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-lg text-foreground flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                Avaliação Geral
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {overallStats.averageRating}
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(Math.floor(overallStats.averageRating))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Baseado em {overallStats.totalEvaluations} avaliações
                </p>
              </div>

              <div className="space-y-2">
                {Object.entries(overallStats.distribution)
                  .reverse()
                  .map(([stars, percentage]) => (
                    <div key={stars} className="flex items-center gap-3">
                      <span className="text-sm w-6">{stars}★</span>
                      <Progress 
                        value={percentage} 
                        className="flex-1 h-2" 
                      />
                      <span className="text-sm text-muted-foreground w-10">
                        {percentage}%
                      </span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Recognition */}
          <Card className="border-border/50 bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-lg text-foreground flex items-center gap-3">
                <Award className="h-5 w-5 text-primary" />
                Reconhecimentos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Top Rated 2024</h3>
                  <p className="text-sm text-muted-foreground">
                    Melhor avaliada em Marketing Digital
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Satisfação do Cliente:</span>
                  <span className="text-success font-medium">94%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tempo de Resposta:</span>
                  <span className="text-success font-medium">&lt; 2h</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Recomendação:</span>
                  <span className="text-success font-medium">96%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feedback Incentive */}
          <Card className="border-primary/20 bg-gradient-primary/10 shadow-glow">
            <CardContent className="p-6 text-center space-y-3">
              <Star className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-foreground">
                Sua opinião importa!
              </h3>
              <p className="text-sm text-muted-foreground">
                Cada avaliação nos ajuda a melhorar nossos serviços e oferecer a melhor experiência possível.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}