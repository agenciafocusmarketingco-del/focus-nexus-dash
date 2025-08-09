// Service for handling automations such as sending WhatsApp, email or SMS notifications.
// These functions currently log actions and should be replaced with real integrations.

export interface AutomationPayload {
  phone: string;
  email?: string;
  name: string;
}

/**
 * Send a welcome message via WhatsApp to a new lead or customer.
 * Replace the console.log with an actual call to WhatsApp Business API or a provider such as Twilio.
 */
export async function sendWelcomeWhatsApp({ phone, name }: AutomationPayload) {
  console.log(`Sending WhatsApp welcome message to ${name} at ${phone}`);
  // Return a stubbed response for now
  return { success: true };
}

/**
 * Send a welcome email to a new lead or customer.
 * Replace this stub with integration to an email provider like SendGrid or Mailgun.
 */
export async function sendWelcomeEmail({ email, name }: AutomationPayload) {
  if (!email) {
    throw new Error('Email address is required to send a welcome email');
  }
  console.log(`Sending welcome email to ${name} at ${email}`);
  return { success: true };
}

/**
 * Schedule an automation for a future time.
 * This could be used for follow-up messages or drip campaigns.
 * Store the schedule in Supabase and rely on serverless functions or CRON jobs to trigger it.
 */
export async function scheduleAutomation(triggerTime: Date, payload: AutomationPayload) {
  console.log(
    `Scheduling automation for ${payload.name} at ${triggerTime.toISOString()} with phone ${payload.phone}`,
  );
  return { success: true };
}
