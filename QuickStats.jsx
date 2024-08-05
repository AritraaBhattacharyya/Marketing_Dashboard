import { Grid, Paper, Typography } from '@mui/material';

const stats = [
  { title: 'Total Cost', value: '$31,868' },
  { title: 'Total Sales', value: '$66,053' },
  { title: 'This Week', value: '$35,000,00' },
  { title: 'Revenue', value: '$63,00k' },
  { title: 'Last payment', value: '$1250' },
];

function QuickStats() {
  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      {stats.map((stat) => (
        <Grid item xs={12} sm={6} md={2.4} key={stat.title}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">{stat.title}</Typography>
            <Typography variant="h4">{stat.value}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default QuickStats;