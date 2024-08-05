import { Paper, Typography, Box, Button } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', earnings: 4000, expenses: 2400 },
  { name: 'Feb', earnings: 3000, expenses: 1398 },
  { name: 'Mar', earnings: 9800, expenses: 2000 },
  { name: 'Apr', earnings: 3908, expenses: 2780 },
  { name: 'May', earnings: 4800, expenses: 1890 },
  { name: 'Jun', earnings: 3800, expenses: 2390 },
];

function TotalProfitWidget() {
  return (
    <Paper sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" gutterBottom>Total Profit</Typography>
      <Box sx={{ flexGrow: 1, minHeight: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="earnings" fill="#00C49F" />
            <Bar dataKey="expenses" fill="#ff814a" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">$842.98</Typography>
        <Button variant="contained" color="primary">View Report</Button>
      </Box>
    </Paper>
  );
}

export default TotalProfitWidget;