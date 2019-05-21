import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: { main: '#fd7314' },
    secondary: { main: '#020241' },
  },
  overrides: {
    MuiButton: {
      root: {
        fontFamily: "'Montserrat', sans-serif",
      }
    },
    MuiSwitch: {
      switchBase: {
        height: 30,
      }
    },
  }
});