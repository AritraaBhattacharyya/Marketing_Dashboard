import { Paper, Typography, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', orders: 4000 },
  { name: 'Feb', orders: 3000 },
  { name: 'Mar', orders: 5000 },
  { name: 'Apr', orders: 4500 },
  { name: 'May', orders: 6000 },
];

function OrdersWidget() {
  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" gutterBottom>Orders</Typography>
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="orders" fill="#ff814a" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}

export default OrdersWidget;