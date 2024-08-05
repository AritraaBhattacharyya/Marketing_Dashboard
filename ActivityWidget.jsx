import { Paper, Typography, List, ListItem, ListItemText, ListItemIcon, Box } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const activities = [
  { text: 'Nick Mark mentioned Sara Smith in New Post', time: '11 JUL 8:10 PM' },
  { text: 'The Post Name was removed by Nick Mark', time: '11 JUL 9:10 PM' },
  { text: 'Patrick Sullivan Published a New Post', time: '12 JUL 10:10 PM' },
  { text: '240+ users have subscribed to Newsletter #1', time: '18 JUL 8:10 PM' },
  { text: 'The Post Name was suspended by Nick Mark', time: '11 JUL 4:10 PM' },
];

function ActivityWidget({ sx }) {
  return (
    <Paper sx={{ p: 6, height: '200%', display: 'flex', flexDirection: 'column', ...sx }}>
      <Typography variant="h3" gutterBottom>Activity Overview</Typography>
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        <List>
          {activities.map((activity, index) => (
            <ListItem key={index} dense>
              <ListItemIcon>
                <FiberManualRecordIcon color="secondary" fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary={activity.text} 
                secondary={activity.time}
                primaryTypographyProps={{ variant: 'body2' }}
                secondaryTypographyProps={{ variant: 'caption' }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
}

export default ActivityWidget;