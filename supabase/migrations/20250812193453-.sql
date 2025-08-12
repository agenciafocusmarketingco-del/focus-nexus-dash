-- Fix security warnings by updating function search paths
CREATE OR REPLACE FUNCTION public.get_current_user_client_id()
RETURNS uuid
LANGUAGE sql
SECURITY DEFINER
STABLE
SET search_path = 'public'
AS $$
  SELECT client_id FROM public.profiles WHERE id = auth.uid();
$$;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  -- For now, assign to a default client (you can modify this logic)
  INSERT INTO public.profiles (id, client_id, first_name, last_name)
  VALUES (
    NEW.id,
    (SELECT id FROM public.clients ORDER BY created_at LIMIT 1), -- Default client
    NEW.raw_user_meta_data ->> 'first_name',
    NEW.raw_user_meta_data ->> 'last_name'
  );
  RETURN NEW;
END;
$$;