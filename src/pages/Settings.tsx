import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Globe, 
  Palette, 
  Bell, 
  Shield, 
  User, 
  Plug, 
  Info,
  Type,
  Layout,
  Moon,
  Sun,
  Smartphone,
  Mail,
  Lock,
  Eye,
  Key
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { SettingsCard } from '@/components/SettingsCard';
import { SettingsSwitch } from '@/components/SettingsSwitch';
import { useSettings } from '@/hooks/useSettings';

export default function Settings() {
  const navigate = useNavigate();
  const { 
    settings, 
    isLoading, 
    updateLanguage, 
    updateTheme, 
    toggleNotification, 
    toggleIntegration,
    updateSetting 
  } = useSettings();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="flex items-center h-16 px-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">Configurações</h1>
            <p className="text-sm text-muted-foreground">
              Personalize sua experiência no Focus
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        
        {/* Language & Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SettingsCard
            title="Idioma"
            description="Escolha o idioma da interface"
            icon={Globe}
          >
            <Select 
              value={settings.language} 
              onValueChange={updateLanguage}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione um idioma" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pt-BR">🇧🇷 Português (Brasil)</SelectItem>
                <SelectItem value="en">🇺🇸 English</SelectItem>
                <SelectItem value="es">🇪🇸 Español</SelectItem>
              </SelectContent>
            </Select>
          </SettingsCard>

          <SettingsCard
            title="Tema"
            description="Alternar entre modo claro e escuro"
            icon={Palette}
          >
            <div className="flex items-center gap-4">
              <Button
                variant={settings.theme === 'light' ? 'default' : 'outline'}
                size="sm"
                onClick={() => updateTheme('light')}
                className="flex-1"
              >
                <Sun className="h-4 w-4 mr-2" />
                Claro
              </Button>
              <Button
                variant={settings.theme === 'dark' ? 'default' : 'outline'}
                size="sm"
                onClick={() => updateTheme('dark')}
                className="flex-1"
              >
                <Moon className="h-4 w-4 mr-2" />
                Escuro
              </Button>
            </div>
          </SettingsCard>
        </div>

        {/* Notifications */}
        <SettingsCard
          title="Notificações"
          description="Gerencie como você recebe notificações"
          icon={Bell}
        >
          <div className="space-y-2">
            <SettingsSwitch
              label="Notificações Push"
              description="Receba notificações no seu dispositivo"
              checked={settings.notifications.push}
              onCheckedChange={() => toggleNotification('push')}
            />
            <SettingsSwitch
              label="Notificações por E-mail"
              description="Receba atualizações por e-mail"
              checked={settings.notifications.email}
              onCheckedChange={() => toggleNotification('email')}
            />
          </div>
        </SettingsCard>

        {/* Preferences */}
        <SettingsCard
          title="Preferências do Usuário"
          description="Personalize a interface e a experiência"
          icon={User}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Type className="h-4 w-4" />
                Tamanho da Fonte
              </label>
              <Select 
                value={settings.preferences.fontSize} 
                onValueChange={(value) => updateSetting('preferences', { fontSize: value as any })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Pequeno</SelectItem>
                  <SelectItem value="medium">Padrão</SelectItem>
                  <SelectItem value="large">Grande</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Layout className="h-4 w-4" />
                Layout da Interface
              </label>
              <Select 
                value={settings.preferences.layout} 
                onValueChange={(value) => updateSetting('preferences', { layout: value as any })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="compact">Compacta</SelectItem>
                  <SelectItem value="expanded">Expandida</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </SettingsCard>

        {/* Security */}
        <SettingsCard
          title="Conta & Segurança"
          description="Gerencie sua conta e configurações de segurança"
          icon={Shield}
        >
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Lock className="h-4 w-4 mr-2" />
              Alterar Senha
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Mail className="h-4 w-4 mr-2" />
              Atualizar E-mail
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Key className="h-4 w-4 mr-2" />
              Autenticação de 2 Fatores
            </Button>
          </div>
        </SettingsCard>

        {/* Integrations */}
        <SettingsCard
          title="Integrações"
          description="Conecte com outros serviços e plataformas"
          icon={Plug}
        >
          <div className="space-y-2">
            <SettingsSwitch
              label="Google"
              description="Conectar com Google Ads e Analytics"
              checked={settings.integrations.google}
              onCheckedChange={() => toggleIntegration('google')}
            />
            <SettingsSwitch
              label="Facebook"
              description="Integração com Facebook Business"
              checked={settings.integrations.facebook}
              onCheckedChange={() => toggleIntegration('facebook')}
            />
            <SettingsSwitch
              label="Instagram"
              description="Conectar conta do Instagram"
              checked={settings.integrations.instagram}
              onCheckedChange={() => toggleIntegration('instagram')}
            />
            <SettingsSwitch
              label="CRM Focus"
              description="Sistema de CRM integrado"
              checked={settings.integrations.crm}
              onCheckedChange={() => toggleIntegration('crm')}
            />
          </div>
        </SettingsCard>

        {/* About */}
        <SettingsCard
          title="Sobre o App"
          description="Informações da versão e políticas"
          icon={Info}
        >
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 rounded-lg bg-muted/20">
              <span className="text-sm text-foreground">Versão do App</span>
              <span className="text-sm text-muted-foreground">1.0.0</span>
            </div>
            <Separator className="bg-border/50" />
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-sm">
                <Eye className="h-4 w-4 mr-2" />
                Política de Privacidade
              </Button>
              <Button variant="ghost" className="w-full justify-start text-sm">
                <Shield className="h-4 w-4 mr-2" />
                Termos de Uso
              </Button>
            </div>
          </div>
        </SettingsCard>

      </div>
    </div>
  );
}