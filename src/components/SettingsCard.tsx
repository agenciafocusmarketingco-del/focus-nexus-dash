import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface SettingsCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function SettingsCard({ 
  title, 
  description, 
  icon: Icon, 
  children, 
  className = '' 
}: SettingsCardProps) {
  return (
    <Card className={`border-border/50 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300 ${className}`}>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg text-foreground flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
      </CardContent>
    </Card>
  );
}