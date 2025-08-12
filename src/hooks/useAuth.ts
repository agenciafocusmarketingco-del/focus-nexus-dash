import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User, Session } from '@supabase/supabase-js';

/**
 * Hook para lidar com autenticação usando Supabase Auth.
 * Retorna o usuário atual e funções para login e logout.
 */
export function useAuth() {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Clear auth state on sign out
        if (event === 'SIGNED_OUT') {
          setUser(null);
          setSession(null);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

/**
 * Faz cadastro com e-mail e senha.
 */
const signUp = async (email: string, password: string, metadata?: { first_name?: string; last_name?: string }) => {
  const redirectUrl = `${window.location.origin}/`;
  
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: redirectUrl,
      data: metadata
    }
  });
  return { error };
};

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

  return { user, session, signIn, signUp, signOut };
}