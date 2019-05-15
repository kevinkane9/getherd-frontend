import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Root from './components/root';
import './main.css';

const theme = createMuiTheme({
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

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <Root />
        </MuiThemeProvider>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));
