import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  Zap
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
  useSidebar,
} from "@/components/ui/sidebar";

// Import the Focus logo
import focusLogo from "@/assets/focus-logo.png";

const mainItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Projetos", url: "/projects", icon: Briefcase },
  { title: "Branding", url: "/branding", icon: Palette },
  { title: "Tráfego Pago", url: "/ads", icon: Target },
  { title: "Social Media", url: "/social", icon: Calendar },
  { title: "Sites & Sistemas", url: "/development", icon: Globe },
  { title: "CRM & Automação", url: "/crm", icon: Zap },
];

const secondaryItems = [
  { title: "Relatórios", url: "/reports", icon: TrendingUp },
  { title: "Equipe", url: "/team", icon: Users },
  { title: "Comunicação", url: "/chat", icon: MessageCircle },
  { title: "Configurações", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-primary text-white font-medium shadow-glow" 
      : "hover:bg-secondary/50 transition-all duration-200 text-white";

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} border-r border-border bg-gradient-dark`}>
      <SidebarContent className="p-4">
        {/* Logo */}
        <div className="mb-8 px-2">
          {!collapsed ? (
            <div className="flex items-center gap-3">
              <img src={focusLogo} alt="Focus Logo" className="w-10 h-10 rounded-lg" />
              <h1 className="text-2xl font-bold text-white">
                Focus
              </h1>
            </div>
          ) : (
            <div className="flex justify-center">
              <img src={focusLogo} alt="Focus Logo" className="w-8 h-8 rounded-lg" />
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className={`${collapsed ? "hidden" : "block"} text-white text-xs uppercase tracking-wider mb-2`}>
            Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainItems.map((item) => (
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

        {/* Secondary Navigation */}
        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className={`${collapsed ? "hidden" : "block"} text-white text-xs uppercase tracking-wider mb-2`}>
            Outros
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {secondaryItems.map((item) => (
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
      </SidebarContent>
    </Sidebar>
  );
}