import { Paper, Typography, Box } from '@mui/material';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Total Sales', value: 2315 },
  { name: 'Total Orders', value: 1700 },
];

const COLORS = ['#00C49F', '#ff814a'];

function EarningsWidget() {
  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>Earnings</Typography>
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}

export default EarningsWidget;