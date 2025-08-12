-- First, update all NULL owner values to a default admin user
-- Note: In production, you should assign these to specific users based on your business logic
UPDATE public.kpi_performance 
SET owner = (SELECT id FROM auth.users LIMIT 1)
WHERE owner IS NULL;

-- Now secure the table by making owner NOT NULL with default
ALTER TABLE public.kpi_performance 
ALTER COLUMN owner SET NOT NULL,
ALTER COLUMN owner SET DEFAULT auth.uid();

-- Drop existing policies that allow NULL owner access
DROP POLICY IF EXISTS "owner_can_select_kpis" ON public.kpi_performance;
DROP POLICY IF EXISTS "owner_can_modify_kpis" ON public.kpi_performance;

-- Create new secure policies that only allow access to owned records
CREATE POLICY "Users can only view their own KPIs" 
ON public.kpi_performance 
FOR SELECT 
USING (owner = auth.uid());

CREATE POLICY "Users can modify their own KPIs" 
ON public.kpi_performance 
FOR ALL 
USING (owner = auth.uid()) 
WITH CHECK (owner = auth.uid());