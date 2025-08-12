-- First, let's check if we have clients
INSERT INTO clients (id, name, slug, active) 
VALUES 
  ('550e8400-e29b-41d4-a716-446655440000', 'Focus Marketing', 'focus-marketing', true)
ON CONFLICT (id) DO UPDATE SET 
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  active = EXCLUDED.active;

-- Create profiles for existing users
INSERT INTO profiles (id, client_id, first_name, last_name, role)
VALUES 
  ('d59705fb-1c52-4ce6-9477-31f629336cc7', '550e8400-e29b-41d4-a716-446655440000', 'Gabriel', 'Sbrana', 'admin'),
  ('286295fe-0e1f-4fe5-b6ff-a6dcd1866aa2', '550e8400-e29b-41d4-a716-446655440000', 'Adriano', 'Barros', 'admin')
ON CONFLICT (id) DO UPDATE SET
  client_id = EXCLUDED.client_id,
  first_name = EXCLUDED.first_name,
  last_name = EXCLUDED.last_name,
  role = EXCLUDED.role;

-- Fix the trigger function to properly handle new users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY definer set search_path = 'public'
AS $$
declare
  default_client_id uuid := '550e8400-e29b-41d4-a716-446655440000';
begin
  insert into public.profiles (id, client_id, first_name, last_name, role)
  values (
    new.id, 
    default_client_id,
    coalesce(new.raw_user_meta_data ->> 'first_name', split_part(new.email, '@', 1)),
    new.raw_user_meta_data ->> 'last_name',
    'user'
  );
  return new;
exception
  when others then
    raise log 'Error in handle_new_user: %', SQLERRM;
    return new;
end;
$$;