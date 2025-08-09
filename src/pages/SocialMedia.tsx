import { DashboardCard } from "@/components/DashboardCard";
import { SocialChart } from "@/components/SocialChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Eye,
  Heart,
  MessageCircle,
  Share,
  Users,
  TrendingUp,
  Image,
  Video,
  Plus
} from "lucide-react";
import { useSocialMetrics } from "@/hooks/useSocialMetrics";
import { useSocialPosts } from "@/hooks/useSocialPosts";
import LoadingSpinner from "@/components/LoadingSpinner";

/**
 * Returns the appropriate color classes based on post status.
 */
const getStatusColor = (status: string) => {
  switch (status) {
    case "Publicado":
      return "bg-success/20 text-success border-success/30";
    case "Agendado":
      return "bg-info/20 text-info border-info/30";
    case "Rascunho":
      return "bg-warning/20 text-warning border-warning/30";
    default:
      return "bg-secondary/20 text-white border-secondary/30";
  }
};

/**
 * Returns the appropriate color classes based on social platform.
 */
const getPlatformColor = (platform: string) => {
  switch (platform) {
    case "Instagram":
      return "bg-pink-500/20 text-pink-400 border-pink-500/30";
    case "Facebook":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "LinkedIn":
      return "bg-blue-600/20 text-blue-300 border-blue-600/30";
    case "TikTok":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    default:
      return "bg-secondary/20 text-white border-secondary/30";
  }
};

const SocialMedia = () => {
  const { metrics, loading: metricsLoading } = useSocialMetrics();
  const { posts, loading: postsLoading } = useSocialPosts();

  // Compute aggregated metrics
  const totalImpressions = metrics.reduce((acc, m) => acc + m.impressions, 0);
  const totalFollowers = metrics.reduce((acc, m) => acc + m.followers, 0);
  const averageEngagement =
    metrics.length > 0
      ? metrics.reduce((acc, m) => acc + m.engagementRate, 0) / metrics.length
      : 0;
  const totalPosts = posts.length;

  // Format values for display (convert to K where appropriate)
  const formatThousand = (value: number) =>
    value >= 1000 ? (value / 1000).toFixed(1) + "K" : value.toString();

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Social Media</h1>
          <p className="text-muted-foreground">
            Gerencie seu calendário editorial e engajamento
          </p>
        </div>
        <Button className="bg-gradient-primary text-white hover:shadow-glow">
          <Plus className="h-4 w-4 mr-2" />
          Novo Post
        </Button>
      </div>

      {/* Social Media KPIs */}
      {metricsLoading ? (
        <LoadingSpinner className="h-24" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardCard
            title="Alcance Total"
            value={formatThousand(totalImpressions)}
            description="Últimos 30 dias"
            icon={Eye}
            trend={{ value: 18.5, isPositive: true }}
          />
          <DashboardCard
            title="Engajamento"
            value={`${(averageEngagement * 100).toFixed(1)}%`}
            description="Taxa média"
            icon={Heart}
            trend={{ value: 12.3, isPositive: true }}
          />
          <DashboardCard
            title="Seguidores"
            value={formatThousand(totalFollowers)}
            description="Total"
            icon={Users}
            trend={{ value: 8.7, isPositive: true }}
          />
          <DashboardCard
            title="Posts Publicados"
            value={totalPosts.toString()}
            description="Total"
            icon={Calendar}
            trend={{ value: 5.2, isPositive: true }}
          />
        </div>
      )}

      {/* Platform Performance & Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-white">
              Performance por Plataforma
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span className="text-white font-medium">Instagram</span>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="text-muted-foreground">45.2K</span>
                  <span className="text-success">+12%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-medium">Facebook</span>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="text-muted-foreground">23.8K</span>
                  <span className="text-success">+8%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                  <span className="text-white font-medium">LinkedIn</span>
                </div>
                <div className="flex gap-4 text-sm">
                  <span className="text-muted-foreground">16.2K</span>
                  <span className="text-success">+15%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Chart */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Evolução do Engajamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SocialChart />
          </CardContent>
        </Card>

        {/* Content Types Breakdown */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-white">Tipos de Conteúdo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image className="h-4 w-4 text-primary" />
                  <span className="text-white">Imagens</span>
                </div>
                <span className="text-white font-medium">60%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Video className="h-4 w-4 text-success" />
                  <span className="text-white">Vídeos</span>
                </div>
                <span className="text-white font-medium">25%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-4 w-4 text-info" />
                  <span className="text-white">Stories</span>
                </div>
                <span className="text-white font-medium">15%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Calendar */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">
          Calendário Editorial
        </h2>
        <div className="space-y-4">
          {postsLoading ? (
            <LoadingSpinner className="h-20" />
          ) : posts.length === 0 ? (
            <div className="p-4 bg-secondary/20 rounded-lg text-muted-foreground">
              Nenhum post encontrado.
            </div>
          ) : (
            posts.map((post) => (
              <Card
                key={post.id}
                className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge
                          variant="outline"
                          className={getPlatformColor(post.platform)}
                        >
                          {post.platform}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={getStatusColor(post.status)}
                        >
                          {post.status}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {post.type}
                        </Badge>
                      </div>
                      <p className="text-white mb-3">{post.content}</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Agendado para: {post.scheduledFor}
                      </p>

                      {post.status === "Publicado" && (
                        <div className="flex gap-6">
                          <div className="flex items-center gap-2">
                            <Heart className="h-4 w-4 text-pink-400" />
                            <span className="text-sm text-white">
                              {post.engagement.likes}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MessageCircle className="h-4 w-4 text-blue-400" />
                            <span className="text-sm text-white">
                              {post.engagement.comments}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Share className="h-4 w-4 text-green-400" />
                            <span className="text-sm text-white">
                              {post.engagement.shares}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-white border-border hover:bg-secondary/20"
                      >
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-white border-border hover:bg-secondary/20"
                      >
                        Editar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
