import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Dashboard from './components/Dashboard';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1ea896',
    },
    secondary: {
      main: '#ff7043',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;