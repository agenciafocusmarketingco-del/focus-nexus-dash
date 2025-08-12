import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  BarChart3,
  Briefcase,
  Calendar,
  Globe,
  MessageCircle,
  Palette,
  Settings,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
  LogOut
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

// Import the Focus logo
import focusLogo from "@/assets/focus-logo.png";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { notificationService } from "@/services/notificationService";
import { Button } from "@/components/ui/button";

const principalItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Identidade Visual", url: "/identidade-visual", icon: Palette },
  { title: "Focus Estudios", url: "/focus-estudios", icon: Video },
  { title: "Tráfego Pago", url: "/traffic", icon: Target },
  { title: "Social Media", url: "/social", icon: Calendar },
  { title: "Sites & Sistemas", url: "/development", icon: Globe },
  { title: "CRM & Automação", url: "/crm", icon: Zap },
];

const analyticsItems = [
  { title: "Relatórios", url: "/reports", icon: TrendingUp },
  { title: "Performance", url: "/performance", icon: BarChart3 },
];

const supportItems = [
  { title: "Comunicação", url: "/chat", icon: MessageCircle },
  { title: "Focus Experience", url: "/focus-experience", icon: Users },
  { title: "Configurações", url: "/settings", icon: Settings },
  { title: "Ajuda", url: "/help", icon: Users },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { profile } = useProfile();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-primary text-white font-medium shadow-glow" 
      : "hover:bg-secondary/50 transition-all duration-200 text-white";

  const handleLogout = async () => {
    const loadingToast = notificationService.loading("Fazendo logout...");
    const error = await signOut();
    notificationService.dismiss(loadingToast);
    
    if (error) {
      notificationService.error("Erro ao fazer logout", error.message);
    } else {
      notificationService.success("Logout realizado com sucesso!");
      navigate("/auth");
    }
  };

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} border-r border-border bg-gradient-dark`}>
      <SidebarContent className="p-4">
        {/* Logo and Client Info */}
        <div className="mb-8 px-2">
          {!collapsed ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img src={focusLogo} alt="Focus Logo" className="w-10 h-10 rounded-lg" />
                <h1 className="text-2xl font-bold text-white">
                  Focus
                </h1>
              </div>
              {profile?.client && (
                <div className="bg-white/10 p-2 rounded-lg">
                  <p className="text-xs text-muted-foreground">Cliente</p>
                  <p className="text-sm font-medium text-white truncate">{profile.client.name}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-center">
              <img src={focusLogo} alt="Focus Logo" className="w-8 h-8 rounded-lg" />
            </div>
          )}
        </div>

        {/* Principal Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className={`${collapsed ? "hidden" : "block"} text-white text-xs uppercase tracking-wider mb-2`}>
            Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {principalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className={`h-5 w-5 ${collapsed ? "mx-auto" : "mr-3"} ${isActive(item.url) ? "text-white" : "text-white"}`} />
                      {!collapsed && <span className="font-medium text-white">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Analytics Navigation */}
        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className={`${collapsed ? "hidden" : "block"} text-white text-xs uppercase tracking-wider mb-2`}>
            Analytics
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {analyticsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className={`h-5 w-5 ${collapsed ? "mx-auto" : "mr-3"} text-white`} />
                      {!collapsed && <span className="font-medium text-white">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Support Navigation */}
        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className={`${collapsed ? "hidden" : "block"} text-white text-xs uppercase tracking-wider mb-2`}>
            Suporte
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-10">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className={`h-5 w-5 ${collapsed ? "mx-auto" : "mr-3"} text-white`} />
                      {!collapsed && <span className="font-medium text-white">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Rating Button */}
        <div className="mt-8 px-2">
          <button className="w-full text-left text-white hover:bg-white/10 p-2 rounded-lg transition-colors">
            {!collapsed ? (
              <span className="text-sm">⭐ Avaliar Atendimento</span>
            ) : (
              <span className="flex justify-center">⭐</span>
            )}
          </button>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start text-white hover:bg-white/10 hover:text-white"
        >
          <LogOut className={`h-4 w-4 ${collapsed ? "mx-auto" : "mr-2"}`} />
          {!collapsed && <span>Sair</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}