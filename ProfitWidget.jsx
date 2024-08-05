import { Paper, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', profit: 4000 },
  { name: 'Feb', profit: 3000 },
  { name: 'Mar', profit: 5000 },
  { name: 'Apr', profit: 4500 },
  { name: 'May', profit: 6000 },
];

function ProfitWidget() {
  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>Profit</Typography>
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="profit" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}

export default ProfitWidget;