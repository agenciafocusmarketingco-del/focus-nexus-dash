import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', roas: 3.2, impressoes: 120000, cliques: 2400, conversoes: 180 },
  { name: 'Fev', roas: 3.8, impressoes: 145000, cliques: 2900, conversoes: 220 },
  { name: 'Mar', roas: 4.1, impressoes: 168000, cliques: 3360, conversoes: 275 },
  { name: 'Abr', roas: 4.5, impressoes: 192000, cliques: 3840, conversoes: 320 },
  { name: 'Mai', roas: 4.8, impressoes: 215000, cliques: 4300, conversoes: 385 },
];

export function TrafficChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
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
          <Area 
            type="monotone" 
            dataKey="roas" 
            stroke="hsl(var(--primary))" 
            strokeWidth={4}
            fill="hsl(var(--primary))"
            fillOpacity={0.4}
          />
          <Area 
            type="monotone" 
            dataKey="conversoes" 
            stroke="hsl(var(--success))" 
            strokeWidth={3}
            fill="hsl(var(--success))"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}