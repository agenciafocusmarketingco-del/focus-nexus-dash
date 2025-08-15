import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface SettingsSwitchProps {
  label: string;
  description?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
}

export function SettingsSwitch({ 
  label, 
  description, 
  checked, 
  onCheckedChange, 
  disabled = false 
}: SettingsSwitchProps) {
  return (
    <div className="flex items-center justify-between space-x-4 p-3 rounded-lg hover:bg-muted/30 transition-colors">
      <div className="flex-1 space-y-1">
        <Label 
          htmlFor={label} 
          className="text-sm font-medium text-foreground cursor-pointer"
        >
          {label}
        </Label>
        {description && (
          <p className="text-xs text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      <Switch
        id={label}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className="data-[state=checked]:bg-success data-[state=unchecked]:bg-muted"
      />
    </div>
  );
}