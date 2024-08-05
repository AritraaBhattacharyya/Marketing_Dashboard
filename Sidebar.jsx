import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AppsIcon from '@mui/icons-material/Apps';
import PaymentIcon from '@mui/icons-material/Payment';
import ChatIcon from '@mui/icons-material/Chat';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const menuItems = [
  { text: 'Home', icon: <HomeIcon/> },
  { text: 'Supporters', icon: <PeopleIcon /> },
  { text: 'Apps', icon: <AppsIcon /> },
  { text: 'Payments', icon: <PaymentIcon /> },
  { text: 'Communicate', icon: <ChatIcon /> },
  { text: 'Reports', icon: <BarChartIcon /> },
  { text: 'Notifications', icon: <NotificationsIcon /> },
  { text: 'Settings', icon: <SettingsIcon /> },
  { text: 'Log out', icon: <ExitToAppIcon /> },
];

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box'
        
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;