import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Dez', receita: 42000, leads: 680, roas: 3.8, projetos: 8 },
  { month: 'Jan', receita: 48700, leads: 847, roas: 4.2, projetos: 12 },
  { month: 'Fev', receita: 52300, leads: 920, roas: 4.5, projetos: 15 },
  { month: 'Mar', receita: 58900, leads: 1120, roas: 4.8, projetos: 18 },
  { month: 'Abr', receita: 63400, leads: 1285, roas: 5.1, projetos: 22 },
  { month: 'Mai', receita: 69800, leads: 1456, roas: 5.4, projetos: 25 },
];

export function ReportsChart() {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            yAxisId="left"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px'
            }}
          />
          <Legend />
          <Bar 
            yAxisId="left"
            dataKey="receita" 
            fill="hsl(var(--primary))" 
            name="Receita (R$)"
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            yAxisId="left"
            dataKey="leads" 
            fill="hsl(var(--success))" 
            name="Leads"
            radius={[4, 4, 0, 0]}
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="roas" 
            stroke="#8884d8" 
            strokeWidth={3}
            name="ROAS"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}