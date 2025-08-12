-- Allow users to update their client organization data
CREATE POLICY "Users can update their own client organization" 
ON public.clients 
FOR UPDATE 
USING (id = get_current_user_client_id())
WITH CHECK (id = get_current_user_client_id());