import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jul', leads: 980, qualificados: 540, oportunidades: 210, fechados: 156, taxaConversao: 15.9 },
  { month: 'Ago', leads: 1120, qualificados: 630, oportunidades: 245, fechados: 189, taxaConversao: 16.8 },
  { month: 'Set', leads: 1340, qualificados: 750, oportunidades: 290, fechados: 220, taxaConversao: 16.4 },
  { month: 'Out', leads: 1480, qualificados: 840, oportunidades: 320, fechados: 245, taxaConversao: 16.5 },
  { month: 'Nov', leads: 1574, qualificados: 892, oportunidades: 345, fechados: 291, taxaConversao: 18.5 },
  { month: 'Dez', leads: 1680, qualificados: 950, oportunidades: 380, fechados: 315, taxaConversao: 18.7 },
];

export function CRMChart() {
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
            dataKey="leads" 
            fill="hsl(var(--primary))" 
            name="Leads"
            radius={[6, 6, 0, 0]}
            stroke="hsl(var(--primary))"
            strokeWidth={2}
          />
          <Bar 
            yAxisId="left"
            dataKey="qualificados" 
            fill="hsl(var(--success))" 
            name="Qualificados"
            radius={[6, 6, 0, 0]}
            stroke="hsl(var(--success))"
            strokeWidth={2}
          />
          <Bar 
            yAxisId="left"
            dataKey="fechados" 
            fill="#8884d8" 
            name="Fechados"
            radius={[6, 6, 0, 0]}
            stroke="#8884d8"
            strokeWidth={2}
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="taxaConversao" 
            stroke="#ff6600" 
            strokeWidth={4}
            name="Taxa Conversão (%)"
            dot={{ fill: '#ff6600', strokeWidth: 3, r: 6 }}
            activeDot={{ r: 8, stroke: '#ff6600', strokeWidth: 3 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}