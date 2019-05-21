import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Root } from './components/root';
import { createBrowserHistory } from 'history';
import './main.css';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#fc8736',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const history = createBrowserHistory();

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router history={history} basename="/">
        <Route path="/" component={Root} />
      </Router>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));
