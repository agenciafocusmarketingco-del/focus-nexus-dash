import { useState, useEffect } from 'react';
import { notificationService } from '@/services/notificationService';

interface UserSettings {
  language: 'pt-BR' | 'en' | 'es';
  theme: 'dark' | 'light';
  notifications: {
    push: boolean;
    email: boolean;
  };
  preferences: {
    fontSize: 'small' | 'medium' | 'large';
    layout: 'compact' | 'expanded';
  };
  integrations: {
    google: boolean;
    facebook: boolean;
    instagram: boolean;
    crm: boolean;
  };
}

const defaultSettings: UserSettings = {
  language: 'pt-BR',
  theme: 'dark',
  notifications: {
    push: true,
    email: true,
  },
  preferences: {
    fontSize: 'medium',
    layout: 'expanded',
  },
  integrations: {
    google: false,
    facebook: false,
    instagram: false,
    crm: false,
  },
};

export function useSettings() {
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [isLoading, setIsLoading] = useState(true);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('focusSettings');
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.error('Error parsing saved settings:', error);
      }
    }
    setIsLoading(false);
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('focusSettings', JSON.stringify(settings));
    }
  }, [settings, isLoading]);

  const updateSetting = <K extends keyof UserSettings>(
    category: K,
    updates: Partial<UserSettings[K]>
  ) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...(prev[category] as object),
        ...updates,
      },
    }));
    
    notificationService.success('Configuração atualizada com sucesso');
  };

  const updateLanguage = (language: UserSettings['language']) => {
    setSettings(prev => ({ ...prev, language }));
    notificationService.success('Idioma alterado com sucesso');
  };

  const updateTheme = (theme: UserSettings['theme']) => {
    setSettings(prev => ({ ...prev, theme }));
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    notificationService.success(`Tema ${theme === 'dark' ? 'escuro' : 'claro'} ativado`);
  };

  const toggleNotification = (type: 'push' | 'email') => {
    const newValue = !settings.notifications[type];
    updateSetting('notifications', { [type]: newValue });
  };

  const toggleIntegration = (service: keyof UserSettings['integrations']) => {
    const newValue = !settings.integrations[service];
    updateSetting('integrations', { [service]: newValue });
  };

  return {
    settings,
    isLoading,
    updateSetting,
    updateLanguage,
    updateTheme,
    toggleNotification,
    toggleIntegration,
  };
}