import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createMuiTheme} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import Main from './components/Main';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'HKGroteskRegular'
    ].join(','),
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Main/>
        </div>
      </ThemeProvider>
  );
}

export default App;
