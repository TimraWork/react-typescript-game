import React, {useState} from 'react';
import {Container} from '@material-ui/core';
import './assets/style/main.scss';

import {Stat} from './containers/pages/Stat';
import {Game} from './components/Game';

import {Header} from './components/Header';
import {Footer} from './components/Footer';

import {Switch, Route} from 'react-router-dom';
import {refElement} from './types';

interface IFullScreenRef extends HTMLElement {
  msRequestFullscreen?: () => void;
  webkitRequestFullScreen?: () => void;
  mozRequestFullScreen?: () => void;
}

const App: React.FC = () => {
  const [fullScreenRef, setFullScreenRef] = useState<refElement>(null);

  const setRef = (ref: refElement) => {
    setFullScreenRef(ref);
  };

  const handleBtnFullScreenClick = () => {
    const target: IFullScreenRef = fullScreenRef;
    if (target && target.requestFullscreen) target.requestFullscreen();
    if (target && target.webkitRequestFullScreen) target.webkitRequestFullScreen();
    if (target && target.msRequestFullscreen) target.msRequestFullscreen();
    if (target && target.mozRequestFullScreen) target.mozRequestFullScreen();
  };

  return (
    <>
      <Header onBtnFullScreenClick={handleBtnFullScreenClick} />
      <Container maxWidth="xl">
        <Switch>
          <Route exact path="/">
            <Game innerRef={setRef} />
          </Route>
          <Route exact path="/stat" component={Stat} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default App;
