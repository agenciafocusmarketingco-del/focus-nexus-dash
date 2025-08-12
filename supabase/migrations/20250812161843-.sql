-- Secure KPI performance data by removing public access
-- Update the owner column to be NOT NULL with a default value
ALTER TABLE public.kpi_performance 
ALTER COLUMN owner SET NOT NULL,
ALTER COLUMN owner SET DEFAULT auth.uid();

-- Drop existing policies that allow NULL owner access
DROP POLICY IF EXISTS "owner_can_select_kpis" ON public.kpi_performance;

-- Create new secure policy that only allows access to owned records
CREATE POLICY "Users can only view their own KPIs" 
ON public.kpi_performance 
FOR SELECT 
USING (owner = auth.uid());

-- Recreate the modify policy to ensure it's correct
DROP POLICY IF EXISTS "owner_can_modify_kpis" ON public.kpi_performance;

CREATE POLICY "Users can modify their own KPIs" 
ON public.kpi_performance 
FOR ALL 
USING (owner = auth.uid()) 
WITH CHECK (owner = auth.uid());