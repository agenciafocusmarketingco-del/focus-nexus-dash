import React from 'react';
import { Building, User, Settings, LogOut } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface UserContextHeaderProps {
  organizationName: string;
  userName: string;
  avatarUrl?: string;
  onOrganizationSettingsClick?: () => void;
  onLogoutClick?: () => void;
}

export function UserContextHeader({
  organizationName,
  userName,
  avatarUrl,
  onOrganizationSettingsClick,
  onLogoutClick
}: UserContextHeaderProps) {
  // Get user initials from name
  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg bg-card hover:bg-accent transition-colors">
          <Building className="h-4 w-4 text-muted-foreground" />
          
          <span className="font-medium text-foreground">{organizationName}</span>
          
          <div className="h-4 border-l border-border" />
          
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center ring-2 ring-primary/20">
            {avatarUrl ? (
              <img 
                src={avatarUrl} 
                alt={userName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">
                  {getUserInitials(userName)}
                </span>
              </div>
            )}
          </div>
          
          <span className="font-medium text-foreground">{userName}</span>
        </button>
      </PopoverTrigger>
      
      <PopoverContent 
        className="w-64 p-0 bg-card border-border shadow-lg" 
        align="end"
        sideOffset={8}
      >
        <div className="py-2">
          <button 
            onClick={() => window.location.href = '/profile'}
            className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-accent transition-colors"
          >
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">Minha Conta</span>
          </button>
          
          <button 
            onClick={onOrganizationSettingsClick}
            className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-accent transition-colors"
          >
            <Settings className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">Configurações da Organização</span>
          </button>
          
          <div className="border-t border-border my-2" />
          
          <button 
            onClick={onLogoutClick}
            className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-accent transition-colors"
          >
            <LogOut className="h-4 w-4 text-destructive" />
            <span className="text-destructive">Sair</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}