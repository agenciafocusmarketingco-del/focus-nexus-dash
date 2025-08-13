import { useState, useEffect } from 'react';
import { requestNotificationPermission, sendNotification } from '@/utils/pwa';

export function usePWA() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const installApp = async () => {
    if (!installPrompt) return false;
    
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setInstallPrompt(null);
      setIsInstallable(false);
      return true;
    }
    
    return false;
  };

  const enableNotifications = async () => {
    return await requestNotificationPermission();
  };

  const notify = (title: string, options?: NotificationOptions) => {
    sendNotification(title, options);
  };

  return {
    isOnline,
    isInstallable,
    installApp,
    enableNotifications,
    notify
  };
}