import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Building, Globe, Mail, Phone, MapPin, Users, Settings } from 'lucide-react';
import { useProfile } from '@/hooks/useProfile';
import { supabase } from '@/integrations/supabase/client';
import { notificationService } from '@/services/notificationService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const organizationSchema = z.object({
  name: z.string().min(2, 'Nome da organização deve ter pelo menos 2 caracteres'),
  slug: z.string().min(2, 'Slug deve ter pelo menos 2 caracteres'),
});

type OrganizationFormData = z.infer<typeof organizationSchema>;

export default function OrganizationSettings() {
  const { profile, loading } = useProfile();
  const [isUpdating, setIsUpdating] = useState(false);

  const form = useForm<OrganizationFormData>({
    resolver: zodResolver(organizationSchema),
    defaultValues: {
      name: profile?.client?.name || '',
      slug: profile?.client?.slug || '',
    },
  });

  const onSubmit = async (data: OrganizationFormData) => {
    if (!profile?.client?.id) return;

    setIsUpdating(true);
    
    try {
      const { error } = await supabase
        .from('clients')
        .update({
          name: data.name,
          slug: data.slug,
        })
        .eq('id', profile.client.id);

      if (error) throw error;

      notificationService.success('Configurações da organização atualizadas com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar organização:', error);
      notificationService.error('Erro ao atualizar configurações da organização');
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!profile?.client) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground">Informações da organização não encontradas</p>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Configurações da Organização
        </h1>
        <p className="text-muted-foreground">
          Gerencie as configurações e informações da sua organização
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            Geral
          </TabsTrigger>
          <TabsTrigger value="members" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Membros
          </TabsTrigger>
          <TabsTrigger value="advanced" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Avançado
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card className="border-border/50 bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                Informações Básicas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Nome da Organização</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-background/50 border-border focus:border-primary transition-colors"
                            placeholder="Nome da sua organização"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Slug da Organização</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-background/50 border-border focus:border-primary transition-colors"
                            placeholder="slug-da-organizacao"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4 pt-4 border-t border-border/50">
                    <h3 className="text-lg font-semibold text-foreground">Status da Organização</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-muted-foreground">Status</Label>
                        <div className="p-3 bg-muted/50 rounded-md border">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-2 bg-success rounded-full"></div>
                            <p className="text-foreground font-medium">Ativo</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-muted-foreground">Data de Criação</Label>
                        <div className="p-3 bg-muted/50 rounded-md border">
                          <p className="text-foreground font-medium">
                            {new Date().toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isUpdating}
                    className="w-full md:w-auto bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
                  >
                    {isUpdating ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"></div>
                        Atualizando...
                      </>
                    ) : (
                      'Salvar Alterações'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Members Tab */}
        <TabsContent value="members" className="space-y-6">
          <Card className="border-border/50 bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Membros da Organização
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold">
                        {profile.first_name?.[0]}{profile.last_name?.[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {profile.first_name} {profile.last_name}
                      </p>
                      <p className="text-sm text-muted-foreground capitalize">
                        {profile.role}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Você
                  </div>
                </div>
                
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    Funcionalidade de gerenciamento de membros será implementada em breve
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Advanced Settings */}
        <TabsContent value="advanced" className="space-y-6">
          <Card className="border-border/50 bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Configurações Avançadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <h3 className="font-semibold text-destructive mb-2">Zona de Perigo</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Estas ações são irreversíveis. Tenha cuidado.
                  </p>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    disabled
                    className="opacity-50"
                  >
                    Deletar Organização
                  </Button>
                </div>

                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    Configurações avançadas serão implementadas em breve
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}