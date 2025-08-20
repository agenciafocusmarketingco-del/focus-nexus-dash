import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { notificationService } from "@/services/notificationService";
import { 
  Globe, 
  Smartphone, 
  Code, 
  Database, 
  Zap,
  ExternalLink,
  GitBranch,
  Server,
  Lock,
  CheckCircle
} from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Site Institucional",
    type: "Website",
    technology: "React + Next.js",
    progress: 85,
    status: "Em Desenvolvimento",
    url: "https://preview.site.com",
    features: ["Responsivo", "SEO Otimizado", "CMS Integrado"]
  },
  {
    id: 2,
    name: "E-commerce",
    type: "Loja Online",
    technology: "WooCommerce",
    progress: 100,
    status: "Entregue",
    url: "https://loja.cliente.com",
    features: ["Pagamento", "Estoque", "Analytics"]
  },
  {
    id: 3,
    name: "App Mobile",
    type: "Aplicativo",
    technology: "React Native",
    progress: 45,
    status: "Em Desenvolvimento",
    url: "",
    features: ["iOS", "Android", "Push Notifications"]
  },
  {
    id: 4,
    name: "Sistema CRM",
    type: "Sistema",
    technology: "Laravel + Vue.js",
    progress: 70,
    status: "Em Teste",
    url: "https://crm.cliente.com",
    features: ["Dashboard", "Relatórios", "API"]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Entregue": return "bg-success/20 text-success border-success/30";
    case "Em Desenvolvimento": return "bg-info/20 text-info border-info/30";
    case "Em Teste": return "bg-warning/20 text-warning border-warning/30";
    case "Planejamento": return "bg-muted/20 text-muted-foreground border-muted/30";
    default: return "bg-secondary/20 text-white border-secondary/30";
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Website": return Globe;
    case "Loja Online": return Globe;
    case "Aplicativo": return Smartphone;
    case "Sistema": return Database;
    default: return Code;
  }
};

const Development = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Sites & Sistemas</h1>
          <p className="text-muted-foreground">Acompanhe o desenvolvimento dos seus projetos</p>
        </div>
        <Button 
          className="bg-gradient-primary text-white hover:shadow-glow"
          onClick={() => {
            notificationService.loading("Iniciando novo projeto de desenvolvimento...");
            setTimeout(() => {
              notificationService.success("Projeto criado!", "Novo projeto adicionado ao pipeline de desenvolvimento");
            }, 1500);
          }}
        >
          <Code className="h-4 w-4 mr-2" />
          Novo Projeto
        </Button>
      </div>

      {/* Development Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6 text-center">
            <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">8</div>
            <div className="text-sm text-muted-foreground">Sites Entregues</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6 text-center">
            <Smartphone className="h-8 w-8 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">3</div>
            <div className="text-sm text-muted-foreground">Apps Desenvolvidos</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6 text-center">
            <Database className="h-8 w-8 text-info mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">5</div>
            <div className="text-sm text-muted-foreground">Sistemas Ativos</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6 text-center">
            <Zap className="h-8 w-8 text-warning mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </CardContent>
        </Card>
      </div>

      {/* Tech Stack */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="text-white">Stack Tecnológico</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-secondary/20 rounded-lg">
              <Code className="h-6 w-6 text-blue-400 mx-auto mb-2" />
              <div className="text-sm font-medium text-white">React</div>
              <div className="text-xs text-muted-foreground">Frontend</div>
            </div>
            <div className="text-center p-4 bg-secondary/20 rounded-lg">
              <Server className="h-6 w-6 text-green-400 mx-auto mb-2" />
              <div className="text-sm font-medium text-white">Node.js</div>
              <div className="text-xs text-muted-foreground">Backend</div>
            </div>
            <div className="text-center p-4 bg-secondary/20 rounded-lg">
              <Database className="h-6 w-6 text-purple-400 mx-auto mb-2" />
              <div className="text-sm font-medium text-white">PostgreSQL</div>
              <div className="text-xs text-muted-foreground">Database</div>
            </div>
            <div className="text-center p-4 bg-secondary/20 rounded-lg">
              <Lock className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-sm font-medium text-white">SSL</div>
              <div className="text-xs text-muted-foreground">Segurança</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects List */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Projetos em Andamento</h2>
        <div className="space-y-4">
          {projects.map((project) => {
            const IconComponent = getTypeIcon(project.type);
            return (
              <Card key={project.id} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">{project.type} • {project.technology}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                      {project.url && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-white border-border hover:bg-secondary/20"
                          onClick={() => {
                            if (project.url) {
                              window.open(project.url, "_blank");
                            } else {
                              notificationService.info("Preview em desenvolvimento", "O link estará disponível em breve");
                            }
                          }}
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progresso do Desenvolvimento</span>
                      <span className="text-white font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Deployment Status */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-primary" />
            Status de Deploy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="text-white">Produção</span>
              </div>
              <Badge variant="outline" className="bg-success/20 text-success border-success/30">
                Online
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <span className="text-white">Homologação</span>
              </div>
              <Badge variant="outline" className="bg-warning/20 text-warning border-warning/30">
                Em Teste
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-info rounded-full"></div>
                <span className="text-white">Desenvolvimento</span>
              </div>
              <Badge variant="outline" className="bg-info/20 text-info border-info/30">
                Ativo
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Development;