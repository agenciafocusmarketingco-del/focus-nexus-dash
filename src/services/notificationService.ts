import { toast } from "sonner";

/**
 * Service for handling notifications and user feedback
 */

export const notificationService = {
  /**
   * Show success notification
   */
  success: (message: string, description?: string) => {
    toast.success(message, {
      description,
      duration: 4000,
    });
  },

  /**
   * Show error notification
   */
  error: (message: string, description?: string) => {
    toast.error(message, {
      description,
      duration: 5000,
    });
  },

  /**
   * Show info notification
   */
  info: (message: string, description?: string) => {
    toast.info(message, {
      description,
      duration: 4000,
    });
  },

  /**
   * Show warning notification
   */
  warning: (message: string, description?: string) => {
    toast.warning(message, {
      description,
      duration: 4000,
    });
  },

  /**
   * Show loading notification
   */
  loading: (message: string) => {
    return toast.loading(message);
  },

  /**
   * Dismiss notification
   */
  dismiss: (toastId: string | number) => {
    toast.dismiss(toastId);
  }
};