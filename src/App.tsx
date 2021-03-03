import React, {useState} from 'react';

import {Game} from './components/Game';

import {Header} from './components/Header';
import {Footer} from './components/Footer';

import {refElement} from './types';
import {playAudio} from './utils';

interface IFullScreenRef extends HTMLElement {
  msRequestFullscreen?: () => void;
  webkitRequestFullScreen?: () => void;
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
  };

  const handleBtnVolumeMuteClick = () => {
    if (isMute) playAudio('mute', isMute);
    setIsMute(!isMute);
  };

  const handleFullscreenExitClick = () => {
    if (document.fullscreenElement) document.exitFullscreen();
  };

  return (
    <>
      <Header isMute={isMute} onBtnFullScreenClick={handleBtnFullScreenClick} onBtnVolumeMuteClick={handleBtnVolumeMuteClick} />
      <Game isMute={isMute} innerRef={setRef} handleFullscreenExitClick={handleFullscreenExitClick} />
      <Footer />
    </>
  );
};

export default App;
