import React, {useState, useRef} from 'react';
import IconButton from '@material-ui/core/IconButton';
import {Logo} from './parts/Logo';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';

interface IProps {
  onBtnFullScreenClick: () => void;
  onBtnVolumeMuteClick?: () => void;
  isMute: boolean;
}

export const Header: React.FC<IProps> = ({onBtnFullScreenClick, onBtnVolumeMuteClick, isMute}) => {
  const [isMusicPlayed, setIsMusicPlayed] = useState<boolean>(true);
  const refVideo = useRef<HTMLAudioElement>(null);

  const handleMusicClick = () => {
    setIsMusicPlayed(!isMusicPlayed);

    if (!refVideo.current) {
      return;
    }

    if (!isMusicPlayed) {
      refVideo.current.defaultMuted = true;
      refVideo.current.muted = true;
    } else {
      refVideo.current.defaultMuted = false;
      refVideo.current.muted = false;
    }
  };

  return (
    <header>
      <Logo />

      <IconButton onClick={onBtnFullScreenClick}>
        <FullscreenIcon />
      </IconButton>

      <IconButton onClick={handleMusicClick}>{!isMusicPlayed ? <MusicOffIcon /> : <MusicNoteIcon />}</IconButton>
      {!isMusicPlayed && <audio autoPlay loop ref={refVideo} src="https://timra.ru/portfolio/audio/music.mp3" />}

      <IconButton onClick={onBtnVolumeMuteClick}>{!isMute ? <VolumeOffIcon /> : <VolumeUpIcon />}</IconButton>
    </header>
  );
};
