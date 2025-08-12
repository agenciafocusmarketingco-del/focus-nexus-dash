-- Insert sample data for testing (these will have owner set to a test user ID)
-- You'll need to replace this with your actual user ID once you authenticate

-- Sample projects
INSERT INTO public.projects (name, service, progress, status, deadline, owner) VALUES
('Website Redesign', 'Desenvolvimento Web', 75, 'Em Progresso', '2024-12-15', '00000000-0000-0000-0000-000000000001'),
('Social Media Campaign', 'Marketing Digital', 90, 'Em Progresso', '2024-11-30', '00000000-0000-0000-0000-000000000001'),
('E-commerce Platform', 'Desenvolvimento', 60, 'Em Progresso', '2025-01-20', '00000000-0000-0000-0000-000000000001'),
('Brand Identity', 'Design', 100, 'Concluído', '2024-10-15', '00000000-0000-0000-0000-000000000001'),
('Mobile App Development', 'Desenvolvimento', 30, 'Em Progresso', '2025-02-28', '00000000-0000-0000-0000-000000000001');

-- Sample reports
INSERT INTO public.reports (title, description, status, author, owner) VALUES
('Relatório Mensal - Performance', 'Análise detalhada da performance de novembro', 'Pronto', 'Focus Estúdios', '00000000-0000-0000-0000-000000000001'),
('Análise de Tráfego Pago', 'Resultados das campanhas do último trimestre', 'Pronto', 'Focus Estúdios', '00000000-0000-0000-0000-000000000001'),
('Social Media Analytics', 'Métricas das redes sociais', 'Processando', 'Focus Estúdios', '00000000-0000-0000-0000-000000000001'),
('Relatório de Conversões', 'Análise de conversões das últimas 4 semanas', 'Pronto', 'Focus Estúdios', '00000000-0000-0000-0000-000000000001');

-- Sample KPI performance data
INSERT INTO public.kpi_performance (kpi, value, period, owner) VALUES
('ROI', 4.2, 'Novembro 2024', '00000000-0000-0000-0000-000000000001'),
('Taxa de Conversão', 3.8, 'Novembro 2024', '00000000-0000-0000-0000-000000000001'),
('CAC (Custo por Aquisição)', 85.50, 'Novembro 2024', '00000000-0000-0000-0000-000000000001'),
('LTV (Lifetime Value)', 1250.00, 'Novembro 2024', '00000000-0000-0000-0000-000000000001'),
('Taxa de Retenção', 78.9, 'Novembro 2024', '00000000-0000-0000-0000-000000000001');

-- Sample campaigns
INSERT INTO public.campaigns (external_id, account_id, name, platform, status, impressions, clicks, conversions, cost_micros, owner) VALUES
('camp_001', 'acc_123', 'Black Friday Campaign', 'google_ads', 'ENABLED', 45000, 1800, 72, 350000000, '00000000-0000-0000-0000-000000000001'),
('camp_002', 'acc_123', 'Holiday Season Promo', 'google_ads', 'ENABLED', 38000, 1520, 61, 290000000, '00000000-0000-0000-0000-000000000001'),
('camp_003', 'acc_123', 'Brand Awareness', 'facebook_ads', 'ENABLED', 52000, 2080, 94, 420000000, '00000000-0000-0000-0000-000000000001'),
('camp_004', 'acc_123', 'Retargeting Campaign', 'google_ads', 'ENABLED', 28000, 1400, 56, 210000000, '00000000-0000-0000-0000-000000000001');

-- Sample social posts
INSERT INTO public.social_posts (title, platform, status, scheduled_at, owner) VALUES
('Lançamento do novo produto', 'Instagram', 'Publicado', '2024-11-15 10:00:00'::timestamptz, '00000000-0000-0000-0000-000000000001'),
('Dicas de marketing digital', 'LinkedIn', 'Agendado', '2024-12-01 14:30:00'::timestamptz, '00000000-0000-0000-0000-000000000001'),
('Behind the scenes', 'Instagram', 'Rascunho', null, '00000000-0000-0000-0000-000000000001'),
('Case de sucesso cliente', 'Facebook', 'Publicado', '2024-11-20 16:00:00'::timestamptz, '00000000-0000-0000-0000-000000000001');