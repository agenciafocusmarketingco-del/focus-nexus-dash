import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

/**
 * Hook para lidar com autenticação usando Supabase Auth.
 * Retorna o usuário atual e funções para login e logout.
 */
export function useAuth() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Recupera a sessão atual, se existir
    const getSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (!error) {
        setUser(session?.user ?? null);
      }
    };
    getSession();

    // Escuta mudanças de estado de autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  /**
   * Faz login com e-mail e senha.
   */
  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return error;
  };

  /**
   * Faz logout do usuário.
   */
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return error;
  };

  return { user, signIn, signOut };
}