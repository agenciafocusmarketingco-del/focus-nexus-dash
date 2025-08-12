-- Check existing clients first
SELECT * FROM clients;

-- Create profiles for existing users using the existing client
INSERT INTO profiles (id, client_id, first_name, last_name, role)
VALUES 
  ('d59705fb-1c52-4ce6-9477-31f629336cc7', (SELECT id FROM clients WHERE slug = 'focus-marketing' LIMIT 1), 'Gabriel', 'Sbrana', 'admin'),
  ('286295fe-0e1f-4fe5-b6ff-a6dcd1866aa2', (SELECT id FROM clients WHERE slug = 'focus-marketing' LIMIT 1), 'Adriano', 'Barros', 'admin')
ON CONFLICT (id) DO UPDATE SET
  client_id = EXCLUDED.client_id,
  first_name = EXCLUDED.first_name,
  last_name = EXCLUDED.last_name,
  role = EXCLUDED.role;