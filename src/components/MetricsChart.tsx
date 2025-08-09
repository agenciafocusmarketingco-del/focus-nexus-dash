import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', leads: 250, vendas: 180 },
  { name: 'Fev', leads: 350, vendas: 280 },
  { name: 'Mar', leads: 500, vendas: 400 },
  { name: 'Abr', leads: 680, vendas: 520 },
  { name: 'Mai', leads: 800, vendas: 680 },
];

export function MetricsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="name" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
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
          <Line 
            type="monotone" 
            dataKey="leads" 
            stroke="hsl(var(--primary))" 
            strokeWidth={5}
            dot={{ fill: 'hsl(var(--primary))', strokeWidth: 3, r: 6 }}
            activeDot={{ r: 8, stroke: 'hsl(var(--primary))', strokeWidth: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}