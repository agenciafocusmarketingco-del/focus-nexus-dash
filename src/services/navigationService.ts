/**
 * Service for handling navigation actions
 */

export const navigationService = {
  /**
   * Navigate to a specific page
   */
  navigateTo: (path: string, navigate: (path: string) => void) => {
    navigate(path);
  },

  /**
   * Open external link in new tab
   */
  openExternal: (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  },

  /**
   * Navigate to specific dashboard sections
   */
  goToProjects: (navigate: (path: string) => void) => {
    navigate('/projects');
  },

  goToReports: (navigate: (path: string) => void) => {
    navigate('/reports');
  },

  goToTraffic: (navigate: (path: string) => void) => {
    navigate('/traffic');
  },

  goToSocial: (navigate: (path: string) => void) => {
    navigate('/social');
  },

  goToCRM: (navigate: (path: string) => void) => {
    navigate('/crm');
  },

  goToPerformance: (navigate: (path: string) => void) => {
    navigate('/performance');
  }
};