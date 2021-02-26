import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';
import App from './App';

import {Stat} from './containers/pages/Stat';

import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import {Provider} from 'react-redux';
import {Game} from './components/Game';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <App>
          <Switch>
            <Route exact path="/" component={Game} />
            <Route exact path="/stat" component={Stat} />
          </Switch>
        </App>
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
