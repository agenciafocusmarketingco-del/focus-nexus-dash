import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { notificationService } from "@/services/notificationService";

interface FloatingActionButtonProps {
  onClick?: () => void;
  label?: string;
}

export function FloatingActionButton({ 
  onClick, 
  label = "Novo Projeto" 
}: FloatingActionButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      notificationService.info("Novo projeto", "Funcionalidade em desenvolvimento");
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-primary text-white shadow-glow hover:shadow-elegant transition-all duration-300 z-50"
      size="lg"
    >
      <Plus className="h-6 w-6" />
      <span className="sr-only">{label}</span>
    </Button>
  );
}