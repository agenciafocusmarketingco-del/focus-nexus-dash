import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Palette, 
  Download, 
  Eye, 
  FileText, 
  Image,
  Type,
  Layers,
  Grid
} from "lucide-react";

const IdentidadeVisual = () => {
  const colorPalette = [
    { name: "Laranja Principal", hex: "#FF6600", usage: "Botões, CTAs, Destaques" },
    { name: "Preto Primário", hex: "#000000", usage: "Textos principais, Backgrounds" },
    { name: "Cinza Escuro", hex: "#1A1A1A", usage: "Backgrounds secundários" },
    { name: "Branco", hex: "#FFFFFF", usage: "Textos sobre fundos escuros" },
    { name: "Cinza Médio", hex: "#666666", usage: "Textos secundários" },
  ];

  const logoVariations = [
    { name: "Logo Principal", file: "focus-logo-principal.svg", usage: "Uso geral" },
    { name: "Logo Horizontal", file: "focus-logo-horizontal.svg", usage: "Headers, rodapés" },
    { name: "Logo Marca", file: "focus-logo-marca.svg", usage: "Favicon, ícones" },
    { name: "Logo Monocromático", file: "focus-logo-mono.svg", usage: "Impressão P&B" },
  ];

  const typography = [
    { name: "Título Principal", font: "Inter Bold", size: "32px", usage: "H1, Títulos principais" },
    { name: "Título Secundário", font: "Inter SemiBold", size: "24px", usage: "H2, Subtítulos" },
    { name: "Corpo de Texto", font: "Inter Regular", size: "16px", usage: "Parágrafos, textos" },
    { name: "Texto Pequeno", font: "Inter Medium", size: "14px", usage: "Labels, legendas" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Identidade Visual Focus
        </h1>
        <p className="text-muted-foreground">
          Guia completo da identidade visual da marca Focus com elementos visuais, cores, tipografia e aplicações.
        </p>
      </div>

      {/* Logo Variations */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Image className="h-5 w-5 text-primary" />
            Variações do Logo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {logoVariations.map((logo, index) => (
              <div key={index} className="border border-border rounded-lg p-4 bg-card hover:bg-accent transition-colors">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-3">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{logo.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{logo.usage}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" />
                    SVG
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" />
                    PNG
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Color Palette */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            Paleta de Cores
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {colorPalette.map((color, index) => (
              <div key={index} className="border border-border rounded-lg p-4 bg-card">
                <div 
                  className="w-full h-16 rounded-lg mb-3"
                  style={{ backgroundColor: color.hex }}
                />
                <h3 className="font-medium text-foreground mb-1">{color.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{color.hex}</p>
                <Badge variant="secondary" className="text-xs">{color.usage}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Typography */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="h-5 w-5 text-primary" />
            Tipografia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {typography.map((typo, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-foreground">{typo.name}</h3>
                  <Badge variant="outline">{typo.font} - {typo.size}</Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{typo.usage}</p>
                <div 
                  className="text-foreground"
                  style={{ 
                    fontSize: typo.size,
                    fontWeight: typo.font.includes('Bold') ? 'bold' : 
                               typo.font.includes('SemiBold') ? '600' : 
                               typo.font.includes('Medium') ? '500' : 'normal'
                  }}
                >
                  Focus - Inovação e Resultados
                </div>
                {index < typography.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Brand Guidelines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Grid className="h-5 w-5 text-primary" />
              Espaçamento e Grid
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Margem mínima do logo</span>
                <Badge variant="secondary">20px</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Tamanho mínimo do logo</span>
                <Badge variant="secondary">24px</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Grid base</span>
                <Badge variant="secondary">8px</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Altura de linha padrão</span>
                <Badge variant="secondary">1.5</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              Aplicações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Material de Marketing</span>
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4 mr-1" />
                  Ver
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Templates de Apresentação</span>
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4 mr-1" />
                  Ver
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Assinatura de E-mail</span>
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4 mr-1" />
                  Ver
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Papelaria Corporativa</span>
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4 mr-1" />
                  Ver
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Download All */}
      <div className="flex justify-center">
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          <Download className="h-5 w-5 mr-2" />
          Download Pacote Completo
        </Button>
      </div>
    </div>
  );
};

export default IdentidadeVisual;