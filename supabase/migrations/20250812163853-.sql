-- Fix the function search path security issue
CREATE OR REPLACE FUNCTION public.ensure_kpi_ownership()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.owner IS NULL THEN
    NEW.owner := auth.uid();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';