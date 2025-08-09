import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette, Download, Eye, Upload } from "lucide-react";

const brandingAssets = [
  {
    id: 1,
    name: "Logotipo Principal",
    type: "Logo",
    status: "Aprovado",
    version: "v3.0",
    files: ["PNG", "SVG", "PDF"]
  },
  {
    id: 2,
    name: "Paleta de Cores",
    type: "Colors",
    status: "Em Revisão",
    version: "v2.1",
    files: ["ASE", "PDF"]
  },
  {
    id: 3,
    name: "Tipografia",
    type: "Typography",
    status: "Aprovado",
    version: "v1.0",
    files: ["TTF", "OTF", "PDF"]
  },
  {
    id: 4,
    name: "Manual da Marca",
    type: "Guidelines",
    status: "Em Desenvolvimento",
    version: "v1.5",
    files: ["PDF", "INDD"]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Aprovado": return "bg-success/20 text-success border-success/30";
    case "Em Revisão": return "bg-warning/20 text-warning border-warning/30";
    case "Em Desenvolvimento": return "bg-info/20 text-info border-info/30";
    default: return "bg-secondary/20 text-white border-secondary/30";
  }
};

const Branding = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Branding & Identidade Visual</h1>
          <p className="text-muted-foreground">Gerencie todos os ativos da sua marca</p>
        </div>
        <Button className="bg-gradient-primary text-white hover:shadow-glow">
          <Upload className="h-4 w-4 mr-2" />
          Upload Asset
        </Button>
      </div>

      {/* Brand Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6 text-center">
            <Palette className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">15</div>
            <div className="text-sm text-muted-foreground">Assets Entregues</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6 text-center">
            <Eye className="h-8 w-8 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">12</div>
            <div className="text-sm text-muted-foreground">Aprovados</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6 text-center">
            <Download className="h-8 w-8 text-info mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">3</div>
            <div className="text-sm text-muted-foreground">Em Revisão</div>
          </CardContent>
        </Card>
      </div>

      {/* Brand Assets */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Assets da Marca</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {brandingAssets.map((asset) => (
            <Card key={asset.id} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-lg">{asset.name}</CardTitle>
                  <Badge variant="outline" className={getStatusColor(asset.status)}>
                    {asset.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">{asset.type} • {asset.version}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {asset.files.map((file) => (
                      <Badge key={file} variant="secondary" className="text-xs">
                        {file}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-white border-border hover:bg-secondary/20">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-white border-border hover:bg-secondary/20">
                      <Download className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Color Palette Preview */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="text-white">Paleta de Cores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            <div className="text-center">
              <div className="w-full h-16 bg-primary rounded-lg mb-2"></div>
              <div className="text-xs text-white">#FF6600</div>
              <div className="text-xs text-muted-foreground">Primary</div>
            </div>
            <div className="text-center">
              <div className="w-full h-16 bg-background rounded-lg border mb-2"></div>
              <div className="text-xs text-white">#0F0F0F</div>
              <div className="text-xs text-muted-foreground">Background</div>
            </div>
            <div className="text-center">
              <div className="w-full h-16 bg-card rounded-lg border mb-2"></div>
              <div className="text-xs text-white">#1A1A1A</div>
              <div className="text-xs text-muted-foreground">Card</div>
            </div>
            <div className="text-center">
              <div className="w-full h-16 bg-white rounded-lg mb-2"></div>
              <div className="text-xs text-white">#FFFFFF</div>
              <div className="text-xs text-muted-foreground">White</div>
            </div>
            <div className="text-center">
              <div className="w-full h-16 bg-muted rounded-lg mb-2"></div>
              <div className="text-xs text-white">#333333</div>
              <div className="text-xs text-muted-foreground">Muted</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Branding;