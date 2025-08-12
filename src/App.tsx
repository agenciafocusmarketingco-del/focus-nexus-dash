import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { AuthGuard } from "@/components/AuthGuard";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects"; 
import IdentidadeVisual from "./pages/IdentidadeVisual";
import FocusEstudios from "./pages/FocusEstudios";
import TrafficAds from "./pages/TrafficAds";
import SocialMedia from "./pages/SocialMedia";
import Development from "./pages/Development";
import CRM from "./pages/CRM";
import Reports from "./pages/Reports";
import Performance from "./pages/Performance";
import Chat from "./pages/Chat";
import FocusExperience from "./pages/FocusExperience";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthGuard>
          <SidebarProvider defaultOpen={true}>
          <div className="min-h-screen flex w-full bg-background">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
                <div className="flex items-center h-full px-6">
                  <SidebarTrigger className="mr-4" />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-foreground">Dashboard Focus</h2>
                    <p className="text-sm text-muted-foreground">Acompanhe seus projetos em tempo real</p>
                  </div>
                </div>
              </header>
              <main className="flex-1 p-6">
                <Routes>
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/focus-estudios" element={<FocusEstudios />} />
                  <Route path="/traffic" element={<TrafficAds />} />
                  <Route path="/identidade-visual" element={<IdentidadeVisual />} />
                  <Route path="/performance" element={<Performance />} />
                  <Route path="/focus-experience" element={<FocusExperience />} />
                  <Route path="/settings" element={<NotFound />} />
                  <Route path="/help" element={<NotFound />} />
                  <Route path="/social" element={<SocialMedia />} />
                  <Route path="/development" element={<Development />} />
                  <Route path="/crm" element={<CRM />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/chat" element={<Chat />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
         </SidebarProvider>
        </AuthGuard>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
