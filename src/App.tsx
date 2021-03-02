import React, {useState} from 'react';

import {Game} from './components/Game';

import {Header} from './components/Header';
import {Footer} from './components/Footer';

import {refElement} from './types';
import {playAudio} from './containers/pages/utils';

interface IFullScreenRef extends HTMLElement {
  msRequestFullscreen?: () => void;
  webkitRequestFullScreen?: () => void;
  mozRequestFullScreen?: () => void;
}

const App: React.FC = () => {
  const [fullScreenRef, setFullScreenRef] = useState<refElement>(null);
  const [isMute, setIsMute] = useState<boolean>(false);

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

  const handleBtnVolumeMuteClick = () => {
    if (isMute) playAudio('mute', isMute);
    setIsMute(!isMute);
  };

  return (
    <>
      <Header onBtnFullScreenClick={handleBtnFullScreenClick} onBtnVolumeMuteClick={handleBtnVolumeMuteClick} isMute={isMute} />
      <Game innerRef={setRef} isMute={isMute} />
      <Footer />
    </>
  );
};

export default App;
