import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function TopBar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Marketing Dashboard
        </Typography>
        <Button color="inherit" sx={{ mr: 2 }}>Manage dashboard</Button>
        <Button variant="contained" color="secondary" sx={{ mr: 2 }}>
          Create new dashboard
        </Button>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ mr: 1 }}>
            Hello, Stephanie!
          </Typography>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;