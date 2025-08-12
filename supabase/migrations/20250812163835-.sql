-- Drop existing policies that allow NULL owner access
DROP POLICY IF EXISTS "owner_can_select_kpis" ON public.kpi_performance;
DROP POLICY IF EXISTS "owner_can_modify_kpis" ON public.kpi_performance;

-- Create secure policies that only allow access to owned records (no NULL access)
CREATE POLICY "Users can only view their own KPIs" 
ON public.kpi_performance 
FOR SELECT 
USING (owner = auth.uid());

CREATE POLICY "Users can modify their own KPIs" 
ON public.kpi_performance 
FOR ALL 
USING (owner = auth.uid()) 
WITH CHECK (owner = auth.uid());

-- Add a function to assign ownership when creating new KPI records
CREATE OR REPLACE FUNCTION public.ensure_kpi_ownership()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.owner IS NULL THEN
    NEW.owner := auth.uid();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically assign ownership
DROP TRIGGER IF EXISTS ensure_kpi_ownership_trigger ON public.kpi_performance;
CREATE TRIGGER ensure_kpi_ownership_trigger
  BEFORE INSERT ON public.kpi_performance
  FOR EACH ROW EXECUTE FUNCTION public.ensure_kpi_ownership();