import React from 'react';
import ReactDOM from 'react-dom';
import {theme} from './theme';

import './assets/style/main.scss';
import {ThemeProvider, CssBaseline} from '@material-ui/core';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);