/**
 * Service for handling communication actions
 */

export const communicationService = {
  /**
   * Opens WhatsApp with a pre-filled message
   */
  openWhatsApp: (phoneNumber: string = "5511999999999", message: string = "Olá! Gostaria de falar sobre meus projetos.") => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  },

  /**
   * Opens email client with pre-filled content
   */
  sendEmail: (
    email: string = "contato@focusmarketing.com.br", 
    subject: string = "Contato - Dashboard Focus", 
    body: string = "Olá,\n\nGostaria de entrar em contato sobre..."
  ) => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const mailtoUrl = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    window.open(mailtoUrl, '_self');
  },

  /**
   * Opens calendar scheduling (could integrate with Calendly, Google Calendar, etc.)
   */
  scheduleeMeeting: (calendarUrl: string = "https://calendly.com/focusmarketing") => {
    window.open(calendarUrl, '_blank');
  },

  /**
   * Downloads a weekly report
   */
  downloadWeeklyReport: () => {
    // Simulate report download - in a real app, this would call an API
    const reportData = {
      period: "Semana de " + new Date().toLocaleDateString(),
      leads: 847,
      conversions: 156,
      roas: 4.2,
      revenue: "R$ 48.700",
      campaigns: [
        { name: "Black Friday", performance: "Excelente", roas: 5.2 },
        { name: "Natal 2024", performance: "Bom", roas: 3.8 },
        { name: "Ano Novo", performance: "Regular", roas: 2.9 }
      ]
    };

    const jsonData = JSON.stringify(reportData, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio-semanal-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  /**
   * Downloads any file with given filename and type
   */
  downloadFile: (filename: string, fileType: string) => {
    // Simulate file download for any file type
    const link = document.createElement('a');
    link.href = '#';
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(`Downloading ${filename} (${fileType})`);
  }
};