import { supabase } from '@/integrations/supabase/client';
import { notificationService } from './notificationService';

/**
 * Service for handling authentication operations
 */
export const authService = {
  /**
   * Sign up a new user
   */
  signUp: async (email: string, password: string, metadata?: { firstName?: string; lastName?: string }) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata,
          emailRedirectTo: `${window.location.origin}/`
        }
      });

      if (error) throw error;

      notificationService.success(
        "Conta criada!", 
        "Verifique seu email para confirmar sua conta"
      );

      return { data, error: null };
    } catch (error: any) {
      notificationService.error(
        "Erro no cadastro", 
        error.message || "Tente novamente"
      );
      return { data: null, error };
    }
  },

  /**
   * Sign in user
   */
  signIn: async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      notificationService.success("Login realizado!", "Bem-vindo de volta");
      return { data, error: null };
    } catch (error: any) {
      notificationService.error(
        "Erro no login", 
        error.message || "Verifique suas credenciais"
      );
      return { data: null, error };
    }
  },

  /**
   * Sign out user
   */
  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      notificationService.success("Logout realizado", "Até mais!");
      return { error: null };
    } catch (error: any) {
      notificationService.error("Erro no logout", error.message);
      return { error };
    }
  },

  /**
   * Reset password
   */
  resetPassword: async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      });

      if (error) throw error;

      notificationService.success(
        "Email enviado!", 
        "Verifique sua caixa de entrada para redefinir sua senha"
      );

      return { error: null };
    } catch (error: any) {
      notificationService.error(
        "Erro ao enviar email", 
        error.message || "Tente novamente"
      );
      return { error };
    }
  },

  /**
   * Update password
   */
  updatePassword: async (newPassword: string) => {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) throw error;

      notificationService.success(
        "Senha atualizada!", 
        "Sua senha foi alterada com sucesso"
      );

      return { error: null };
    } catch (error: any) {
      notificationService.error(
        "Erro ao atualizar senha", 
        error.message || "Tente novamente"
      );
      return { error };
    }
  },

  /**
   * Update user email
   */
  updateEmail: async (newEmail: string) => {
    try {
      const { error } = await supabase.auth.updateUser({
        email: newEmail
      });

      if (error) throw error;

      notificationService.success(
        "Email atualizado!", 
        "Confirme o novo email para finalizar a alteração"
      );

      return { error: null };
    } catch (error: any) {
      notificationService.error(
        "Erro ao atualizar email", 
        error.message || "Tente novamente"
      );
      return { error };
    }
  }
};