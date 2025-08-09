import { Clock, CheckCircle, AlertCircle, Users } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "success",
    title: "Campanha de Facebook Ads aprovada",
    description: "3 anúncios foram publicados com sucesso",
    time: "2 horas atrás",
    icon: CheckCircle
  },
  {
    id: 2,
    type: "pending",
    title: "Revisão de identidade visual",
    description: "Aguardando aprovação do logotipo",
    time: "4 horas atrás",
    icon: Clock
  },
  {
    id: 3,
    type: "team",
    title: "Reunião de alinhamento",
    description: "Equipe definiu próximos passos do projeto",
    time: "1 dia atrás",
    icon: Users
  },
  {
    id: 4,
    type: "warning",
    title: "Meta de conversões",
    description: "Atenção: performance abaixo do esperado",
    time: "2 dias atrás",
    icon: AlertCircle
  }
];

const getActivityColor = (type: string) => {
  switch (type) {
    case "success": return "text-success";
    case "warning": return "text-warning";
    case "pending": return "text-info";
    case "team": return "text-primary";
    default: return "text-muted-foreground";
  }
};

export function ActivityTimeline() {
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={activity.id} className="flex items-start space-x-3 group">
          <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center ${getActivityColor(activity.type)}`}>
            <activity.icon className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {activity.title}
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
            <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
          </div>
          {index < activities.length - 1 && (
            <div className="absolute left-4 mt-8 w-px h-4 bg-border"></div>
          )}
        </div>
      ))}
    </div>
  );
}