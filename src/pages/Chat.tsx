import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { notificationService } from "@/services/notificationService";
import { 
  MessageCircle, 
  Send, 
  Paperclip,
  Search,
  Phone,
  Video,
  MoreVertical,
  Clock
} from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "Equipe Focus",
    lastMessage: "Relatório mensal está pronto para revisão",
    time: "10:30",
    unread: 2,
    online: true
  },
  {
    id: 2,
    name: "João - Designer",
    lastMessage: "Logo aprovado! Enviando versões finais",
    time: "09:45",
    unread: 0,
    online: true
  },
  {
    id: 3,
    name: "Ana - Social Media",
    lastMessage: "Posts agendados para a semana",
    time: "08:20",
    unread: 1,
    online: false
  },
  {
    id: 4,
    name: "Carlos - Dev",
    lastMessage: "Site em homologação. Link nos anexos",
    time: "Ontem",
    unread: 0,
    online: false
  }
];

const messages = [
  {
    id: 1,
    sender: "João - Designer",
    content: "Oi! Finalizei o novo layout do site. O que achou?",
    time: "09:30",
    isOwn: false
  },
  {
    id: 2,
    sender: "Você",
    content: "Ficou excelente! Pode prosseguir com a implementação.",
    time: "09:32",
    isOwn: true
  },
  {
    id: 3,
    sender: "João - Designer", 
    content: "Perfeito! Vou coordenar com o Carlos para o desenvolvimento.",
    time: "09:35",
    isOwn: false
  },
  {
    id: 4,
    sender: "João - Designer",
    content: "Logo aprovado! Enviando versões finais em SVG e PNG",
    time: "09:45",
    isOwn: false
  }
];

const Chat = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Comunicação</h1>
          <p className="text-muted-foreground">Central de mensagens e comunicação com a equipe</p>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              Conversas
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar conversas..." 
                className="pl-10 bg-secondary/20 border-border text-white placeholder:text-muted-foreground"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {conversations.map((conversation) => (
                <div 
                  key={conversation.id} 
                  className="p-4 hover:bg-secondary/20 cursor-pointer transition-colors border-b border-border last:border-b-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${conversation.online ? 'bg-success' : 'bg-muted'}`}></div>
                      <h4 className="font-medium text-white">{conversation.name}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{conversation.time}</span>
                      {conversation.unread > 0 && (
                        <Badge variant="default" className="bg-primary text-white text-xs px-2 py-0 min-w-[20px] h-5 rounded-full">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-2 bg-gradient-card border-border shadow-card flex flex-col">
          {/* Chat Header */}
          <CardHeader className="border-b border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-success"></div>
                <div>
                  <h3 className="font-semibold text-white">João - Designer</h3>
                  <p className="text-xs text-muted-foreground">Online agora</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="text-white border-border hover:bg-secondary/20"
                  onClick={() => notificationService.info("Funcionalidade de chamada será implementada em breve!")}
                >
                  <Phone className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="text-white border-border hover:bg-secondary/20"
                  onClick={() => notificationService.info("Funcionalidade de videochamada será implementada em breve!")}
                >
                  <Video className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="text-white border-border hover:bg-secondary/20">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[70%] ${message.isOwn ? 'order-2' : 'order-1'}`}>
                    {!message.isOwn && (
                      <p className="text-xs text-muted-foreground mb-1">{message.sender}</p>
                    )}
                    <div className={`p-3 rounded-lg ${
                      message.isOwn 
                        ? 'bg-gradient-primary text-white' 
                        : 'bg-secondary/20 text-white'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                      <div className="flex items-center gap-1 mt-1 justify-end">
                        <Clock className="h-3 w-3 opacity-70" />
                        <span className="text-xs opacity-70">{message.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Message Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-white border-border hover:bg-secondary/20">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input 
                placeholder="Digite sua mensagem..." 
                className="flex-1 bg-secondary/20 border-border text-white placeholder:text-muted-foreground"
              />
              <Button 
                size="sm" 
                className="bg-gradient-primary text-white hover:shadow-glow"
                onClick={() => notificationService.success("Mensagem enviada!")}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Iniciar Chat</h3>
            <p className="text-sm text-muted-foreground">Converse diretamente com a equipe</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <Video className="h-8 w-8 text-success mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Videochamada</h3>
            <p className="text-sm text-muted-foreground">Reunião online com a equipe</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer">
          <CardContent className="p-6 text-center">
            <Paperclip className="h-8 w-8 text-info mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Enviar Arquivo</h3>
            <p className="text-sm text-muted-foreground">Compartilhe documentos e imagens</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chat;