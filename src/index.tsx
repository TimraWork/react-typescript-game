import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {theme} from './theme';
import './assets/style/main.scss';

import App from './App';

import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import {Provider} from 'react-redux';
import {ThemeProvider, CssBaseline} from '@material-ui/core';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
