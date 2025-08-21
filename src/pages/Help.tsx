import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MessageCircle, Mail, Phone, Search, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';
import { notificationService } from '@/services/notificationService';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'Como configurar minha primeira campanha de tráfego pago?',
    answer: 'Para configurar sua primeira campanha, acesse o módulo "Tráfego Pago", clique em "Nova Campanha" e siga o assistente passo a passo. Defina seu público-alvo, orçamento diário e criativos. Nossa equipe pode auxiliar na otimização.',
    category: 'Tráfego Pago',
    tags: ['campanha', 'configuração', 'iniciante']
  },
  {
    id: '2',
    question: 'Como acompanhar o desempenho das minhas campanhas?',
    answer: 'No dashboard principal, você encontra métricas em tempo real. Acesse "Performance" para relatórios detalhados ou "Relatórios" para exportar dados. Todas as métricas são atualizadas automaticamente.',
    category: 'Performance',
    tags: ['métricas', 'dashboard', 'relatórios']
  },
  {
    id: '3',
    question: 'Como agendar posts nas redes sociais?',
    answer: 'No módulo "Social Media", selecione a rede social, crie seu conteúdo, defina data e horário. O sistema permite agendamento em massa e calendário visual para melhor organização.',
    category: 'Social Media',
    tags: ['agendamento', 'posts', 'redes sociais']
  },
  {
    id: '4',
    question: 'Como configurar automações no CRM?',
    answer: 'Acesse "CRM & Automação", crie um novo funil, defina os gatilhos e ações. Você pode automatizar e-mails, SMS, tags e movimentação entre etapas baseado no comportamento do lead.',
    category: 'CRM',
    tags: ['automação', 'funil', 'leads']
  },
  {
    id: '5',
    question: 'Como gerar relatórios personalizados?',
    answer: 'Em "Relatórios", selecione as métricas desejadas, período e filtros. Você pode salvar modelos de relatórios e programar envios automáticos por e-mail.',
    category: 'Relatórios',
    tags: ['relatórios', 'personalização', 'exportar']
  },
  {
    id: '6',
    question: 'Como integrar o app com outras ferramentas?',
    answer: 'Vá em "Configurações" > "Integrações" e conecte suas ferramentas favoritas como Google Ads, Facebook, WhatsApp Business, Hotmart, entre outras. Temos mais de 50 integrações disponíveis.',
    category: 'Integrações',
    tags: ['integração', 'api', 'conectar']
  }
];

const categories = ['Todas', 'Tráfego Pago', 'Social Media', 'CRM', 'Performance', 'Relatórios', 'Integrações'];

export default function Help() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [contactForm, setContactForm] = useState({
    subject: '',
    message: '',
    urgency: 'normal'
  });

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.subject.trim() || !contactForm.message.trim()) {
      notificationService.error('Preencha todos os campos obrigatórios');
      return;
    }

    const loadingToast = notificationService.loading('Enviando mensagem...');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    notificationService.dismiss(loadingToast);
    notificationService.success('Mensagem enviada com sucesso! Nossa equipe responderá em breve.');
    
    setContactForm({ subject: '', message: '', urgency: 'normal' });
  };

  return (
    <div className="min-h-screen bg-background p-6 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <HelpCircle className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Central de Ajuda</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Encontre respostas rápidas para suas dúvidas ou entre em contato com nossa equipe especializada
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FAQ Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border/50 bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                <Search className="h-6 w-6 text-primary" />
                Perguntas Frequentes
              </CardTitle>
              <CardDescription>
                Busque por tópicos específicos ou navegue pelas categorias
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Pesquisar na central de ajuda..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background/50 border-border focus:border-primary"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "secondary"}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedCategory === category 
                        ? 'bg-primary text-primary-foreground shadow-glow' 
                        : 'hover:bg-secondary/80'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              {/* FAQ Items */}
              <div className="space-y-3">
                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <HelpCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Nenhum resultado encontrado para sua busca.</p>
                  </div>
                ) : (
                  filteredFAQs.map(item => {
                    const isOpen = openItems.includes(item.id);
                    return (
                      <Collapsible key={item.id} open={isOpen} onOpenChange={() => toggleItem(item.id)}>
                        <CollapsibleTrigger className="w-full">
                          <div className="flex items-center justify-between p-4 bg-card hover:bg-secondary/30 rounded-lg border border-border/50 transition-all duration-200 hover:shadow-card">
                            <div className="flex-1 text-left">
                              <p className="font-medium text-foreground">{item.question}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <Badge variant="outline" className="text-xs">
                                  {item.category}
                                </Badge>
                                {item.tags.slice(0, 2).map(tag => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            {isOpen ? 
                              <ChevronDown className="h-5 w-5 text-muted-foreground" /> : 
                              <ChevronRight className="h-5 w-5 text-muted-foreground" />
                            }
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="p-4 bg-muted/30 rounded-lg mt-2 border-l-4 border-primary">
                            <p className="text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    );
                  })
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="space-y-6">
          {/* Quick Contact */}
          <Card className="border-border/50 bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-lg text-foreground flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-primary" />
                Contato Rápido
              </CardTitle>
              <CardDescription>
                Nossa equipe está pronta para ajudar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-3 hover:bg-primary/10">
                  <MessageCircle className="h-4 w-4" />
                  Chat ao Vivo
                  <Badge variant="secondary" className="ml-auto">Online</Badge>
                </Button>
                
                <Button variant="outline" className="w-full justify-start gap-3 hover:bg-primary/10">
                  <Mail className="h-4 w-4" />
                  suporte@focusmarketing.com.br
                </Button>
                
                <Button variant="outline" className="w-full justify-start gap-3 hover:bg-primary/10">
                  <Phone className="h-4 w-4" />
                  (11) 9 9999-9999
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="border-border/50 bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">
                Enviar Mensagem
              </CardTitle>
              <CardDescription>
                Descreva sua dúvida detalhadamente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Assunto da mensagem"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Descreva sua dúvida ou problema..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    className="min-h-[120px] bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <div>
                  <select
                    value={contactForm.urgency}
                    onChange={(e) => setContactForm(prev => ({ ...prev, urgency: e.target.value }))}
                    className="w-full p-2 rounded-md bg-background/50 border border-border focus:border-primary text-foreground"
                  >
                    <option value="normal">Prioridade Normal</option>
                    <option value="high">Alta Prioridade</option>
                    <option value="urgent">Urgente</option>
                  </select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Support Hours */}
          <Card className="border-border/50 bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">
                Horário de Atendimento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Segunda a Sexta:</span>
                <span className="text-foreground font-medium">8h às 18h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sábado:</span>
                <span className="text-foreground font-medium">8h às 12h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Domingo:</span>
                <span className="text-foreground font-medium">Fechado</span>
              </div>
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Tempo médio de resposta: <span className="text-primary font-medium">2 horas</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}