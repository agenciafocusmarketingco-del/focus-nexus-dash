import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', engajamento: 4.2, alcance: 12.5, seguidores: 8.3 },
  { name: 'Fev', engajamento: 5.1, alcance: 15.2, seguidores: 9.1 },
  { name: 'Mar', engajamento: 6.8, alcance: 18.9, seguidores: 12.4 },
  { name: 'Abr', engajamento: 7.2, alcance: 22.1, seguidores: 15.8 },
  { name: 'Mai', engajamento: 8.7, alcance: 28.4, seguidores: 18.2 },
];

export function SocialChart() {
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
            dataKey="engajamento" 
            stroke="hsl(var(--primary))" 
            strokeWidth={5}
            dot={{ fill: 'hsl(var(--primary))', strokeWidth: 3, r: 6 }}
            activeDot={{ r: 8, stroke: 'hsl(var(--primary))', strokeWidth: 3 }}
          />
          <Line 
            type="monotone" 
            dataKey="alcance" 
            stroke="hsl(var(--success))" 
            strokeWidth={4}
            dot={{ fill: 'hsl(var(--success))', strokeWidth: 3, r: 5 }}
            activeDot={{ r: 7, stroke: 'hsl(var(--success))', strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="seguidores" 
            stroke="#8884d8" 
            strokeWidth={4}
            dot={{ fill: '#8884d8', strokeWidth: 3, r: 5 }}
            activeDot={{ r: 7, stroke: '#8884d8', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}