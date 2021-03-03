import React, {useState, useEffect} from 'react';

import {Game} from './components/Game';

import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {playAudio} from './utils';

const STORAGE = 'react-game/mute';

export type refElement = HTMLElement | null;

interface IFullScreenRef extends HTMLElement {
  msRequestFullscreen?: () => void;
  webkitRequestFullScreen?: () => void;
}

const App: React.FC = () => {
  const [fullScreenRef, setFullScreenRef] = useState<IFullScreenRef | null>(null);
  const [isMute, setIsMute] = useState<boolean>(false);

  useEffect(() => {
    const getStorage = localStorage.getItem(STORAGE);
    if (getStorage) setIsMute(JSON.parse(getStorage || ''));
  }, []);

  const setRef = (ref: refElement) => {
    setFullScreenRef(ref);
  };

  const handleBtnFullScreenClick = () => {
    const target: IFullScreenRef | null = fullScreenRef;
    if (target && target.requestFullscreen) target.requestFullscreen();
    if (target && target.webkitRequestFullScreen) target.webkitRequestFullScreen();
    if (target && target.msRequestFullscreen) target.msRequestFullscreen();
  };

  const handleBtnVolumeMuteClick = () => {
    if (isMute) playAudio('mute', isMute);
    setIsMute(!isMute);
    localStorage.setItem(STORAGE, JSON.stringify(!isMute));
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
