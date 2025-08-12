-- Create clients/companies table
CREATE TABLE public.clients (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  active boolean NOT NULL DEFAULT true
);

-- Enable RLS on clients table
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

-- Create profiles table to link users to clients
CREATE TABLE public.profiles (
  id uuid NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  client_id uuid NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
  first_name text,
  last_name text,
  role text DEFAULT 'user',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on profiles table
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Add client_id to existing tables
ALTER TABLE public.projects ADD COLUMN client_id uuid REFERENCES public.clients(id);
ALTER TABLE public.reports ADD COLUMN client_id uuid REFERENCES public.clients(id);
ALTER TABLE public.kpi_performance ADD COLUMN client_id uuid REFERENCES public.clients(id);
ALTER TABLE public.campaigns ADD COLUMN client_id uuid REFERENCES public.clients(id);
ALTER TABLE public.social_posts ADD COLUMN client_id uuid REFERENCES public.clients(id);

-- Create function to get current user's client_id
CREATE OR REPLACE FUNCTION public.get_current_user_client_id()
RETURNS uuid
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT client_id FROM public.profiles WHERE id = auth.uid();
$$;

-- Create function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
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

-- Create trigger for new users
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Update RLS policies for multi-tenant access

-- Clients policies
CREATE POLICY "Users can view their own client"
ON public.clients FOR SELECT
USING (id = public.get_current_user_client_id());

-- Profiles policies
CREATE POLICY "Users can view their own profile"
ON public.profiles FOR SELECT
USING (id = auth.uid());

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE
USING (id = auth.uid());

-- Update existing table policies to use client_id

-- Projects policies (replace existing ones)
DROP POLICY IF EXISTS "authenticated_users_can_select_own_projects" ON public.projects;
DROP POLICY IF EXISTS "owner_can_modify_projects" ON public.projects;

CREATE POLICY "Users can view projects from their client"
ON public.projects FOR SELECT
USING (client_id = public.get_current_user_client_id());

CREATE POLICY "Users can modify projects from their client"
ON public.projects FOR ALL
USING (client_id = public.get_current_user_client_id())
WITH CHECK (client_id = public.get_current_user_client_id());

-- Reports policies (replace existing ones)
DROP POLICY IF EXISTS "authenticated_users_can_select_own_reports" ON public.reports;
DROP POLICY IF EXISTS "owner_can_modify_reports" ON public.reports;

CREATE POLICY "Users can view reports from their client"
ON public.reports FOR SELECT
USING (client_id = public.get_current_user_client_id());

CREATE POLICY "Users can modify reports from their client"
ON public.reports FOR ALL
USING (client_id = public.get_current_user_client_id())
WITH CHECK (client_id = public.get_current_user_client_id());

-- KPI Performance policies (replace existing ones)
DROP POLICY IF EXISTS "Users can only view their own KPIs" ON public.kpi_performance;
DROP POLICY IF EXISTS "Users can modify their own KPIs" ON public.kpi_performance;

CREATE POLICY "Users can view KPIs from their client"
ON public.kpi_performance FOR SELECT
USING (client_id = public.get_current_user_client_id());

CREATE POLICY "Users can modify KPIs from their client"
ON public.kpi_performance FOR ALL
USING (client_id = public.get_current_user_client_id())
WITH CHECK (client_id = public.get_current_user_client_id());

-- Campaigns policies (replace existing ones)
DROP POLICY IF EXISTS "authenticated_users_can_select_own_campaigns" ON public.campaigns;
DROP POLICY IF EXISTS "owner_can_modify_campaigns" ON public.campaigns;

CREATE POLICY "Users can view campaigns from their client"
ON public.campaigns FOR SELECT
USING (client_id = public.get_current_user_client_id());

CREATE POLICY "Users can modify campaigns from their client"
ON public.campaigns FOR ALL
USING (client_id = public.get_current_user_client_id())
WITH CHECK (client_id = public.get_current_user_client_id());

-- Social Posts policies (replace existing ones)
DROP POLICY IF EXISTS "authenticated_users_can_select_own_social_posts" ON public.social_posts;
DROP POLICY IF EXISTS "owner_can_modify_social_posts" ON public.social_posts;

CREATE POLICY "Users can view social posts from their client"
ON public.social_posts FOR SELECT
USING (client_id = public.get_current_user_client_id());

CREATE POLICY "Users can modify social posts from their client"
ON public.social_posts FOR ALL
USING (client_id = public.get_current_user_client_id())
WITH CHECK (client_id = public.get_current_user_client_id());

-- Insert some sample clients
INSERT INTO public.clients (name, slug) VALUES 
('Focus Marketing Digital', 'focus-marketing'),
('Cliente Demo A', 'cliente-demo-a'),
('Cliente Demo B', 'cliente-demo-b');

-- Update existing records to assign them to the first client (for migration purposes)
UPDATE public.projects SET client_id = (SELECT id FROM public.clients ORDER BY created_at LIMIT 1) WHERE client_id IS NULL;
UPDATE public.reports SET client_id = (SELECT id FROM public.clients ORDER BY created_at LIMIT 1) WHERE client_id IS NULL;
UPDATE public.kpi_performance SET client_id = (SELECT id FROM public.clients ORDER BY created_at LIMIT 1) WHERE client_id IS NULL;
UPDATE public.campaigns SET client_id = (SELECT id FROM public.clients ORDER BY created_at LIMIT 1) WHERE client_id IS NULL;
UPDATE public.social_posts SET client_id = (SELECT id FROM public.clients ORDER BY created_at LIMIT 1) WHERE client_id IS NULL;