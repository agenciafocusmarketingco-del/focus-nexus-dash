-- Fix security vulnerability: Remove public access to confidential business data

-- First, let's see what data has null owners
-- We'll need to assign these to a system user or make them inaccessible

-- Update campaigns with null owners - for now, we'll make them inaccessible by removing the null condition
-- In a real scenario, you'd want to assign them to appropriate users

-- Drop the permissive policies that allow null owner access
DROP POLICY IF EXISTS "owner_can_select_campaigns" ON public.campaigns;
DROP POLICY IF EXISTS "owner_can_select_projects" ON public.projects;
DROP POLICY IF EXISTS "owner_can_select_reports" ON public.reports;
DROP POLICY IF EXISTS "owner_can_select_social_posts" ON public.social_posts;

-- Create secure policies that only allow authenticated users to see their own data
CREATE POLICY "authenticated_users_can_select_own_campaigns" 
ON public.campaigns 
FOR SELECT 
TO authenticated
USING (owner = auth.uid());

CREATE POLICY "authenticated_users_can_select_own_projects" 
ON public.projects 
FOR SELECT 
TO authenticated
USING (owner = auth.uid());

CREATE POLICY "authenticated_users_can_select_own_reports" 
ON public.reports 
FOR SELECT 
TO authenticated
USING (owner = auth.uid());

CREATE POLICY "authenticated_users_can_select_own_social_posts" 
ON public.social_posts 
FOR SELECT 
TO authenticated
USING (owner = auth.uid());

-- Keep the existing modification policies as they are already secure
-- They only allow users to modify their own data

-- Add triggers to automatically assign ownership for new records
CREATE OR REPLACE FUNCTION public.ensure_campaigns_ownership()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.owner IS NULL THEN
    NEW.owner := auth.uid();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

CREATE OR REPLACE FUNCTION public.ensure_projects_ownership()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.owner IS NULL THEN
    NEW.owner := auth.uid();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

CREATE OR REPLACE FUNCTION public.ensure_reports_ownership()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.owner IS NULL THEN
    NEW.owner := auth.uid();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

CREATE OR REPLACE FUNCTION public.ensure_social_posts_ownership()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.owner IS NULL THEN
    NEW.owner := auth.uid();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- Create triggers
DROP TRIGGER IF EXISTS ensure_campaigns_ownership_trigger ON public.campaigns;
CREATE TRIGGER ensure_campaigns_ownership_trigger
  BEFORE INSERT ON public.campaigns
  FOR EACH ROW EXECUTE FUNCTION public.ensure_campaigns_ownership();

DROP TRIGGER IF EXISTS ensure_projects_ownership_trigger ON public.projects;
CREATE TRIGGER ensure_projects_ownership_trigger
  BEFORE INSERT ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.ensure_projects_ownership();

DROP TRIGGER IF EXISTS ensure_reports_ownership_trigger ON public.reports;
CREATE TRIGGER ensure_reports_ownership_trigger
  BEFORE INSERT ON public.reports
  FOR EACH ROW EXECUTE FUNCTION public.ensure_reports_ownership();

DROP TRIGGER IF EXISTS ensure_social_posts_ownership_trigger ON public.social_posts;
CREATE TRIGGER ensure_social_posts_ownership_trigger
  BEFORE INSERT ON public.social_posts
  FOR EACH ROW EXECUTE FUNCTION public.ensure_social_posts_ownership();