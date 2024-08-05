import { Box, Grid } from '@mui/material';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import QuickStats from './QuickStats';
import EarningsWidget from './EarningsWidget';
import OrdersWidget from './OrdersWidget';
import ProfitWidget from './ProfitWidget';
import ActivityWidget from './ActivityWidget';
import TotalProfitWidget from './TotalProfitWidget';

function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <TopBar />
        <QuickStats />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <EarningsWidget />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <OrdersWidget />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <ProfitWidget />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <ActivityWidget />
          </Grid>
          <Grid item xs={12} md={9}>
            <TotalProfitWidget />
          </Grid>
          <Grid item xs={12} md={4}>
            {/* This empty grid item will push the TotalProfitWidget to the left */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;