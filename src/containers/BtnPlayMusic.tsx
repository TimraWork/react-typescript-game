import React, {useState, useRef} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';

export const BtnPlayMusic: React.FC = () => {
  const [isMusicPlayed, setIsMusicPlayed] = useState<boolean>(true);
  const refMusic = useRef<HTMLAudioElement>(null);

  const handleMusicToggleClick = () => {
    setIsMusicPlayed(!isMusicPlayed);

    if (!refMusic.current) {
      return;
    }

    if (!isMusicPlayed) {
      refMusic.current.defaultMuted = true;
      refMusic.current.muted = true;
    } else {
      refMusic.current.defaultMuted = false;
      refMusic.current.muted = false;
    }
  };

  return (
    <>
      <IconButton onClick={handleMusicToggleClick}>{!isMusicPlayed ? <MusicOffIcon /> : <MusicNoteIcon />}</IconButton>
      {!isMusicPlayed && <audio autoPlay loop ref={refMusic} src="https://timra.ru/portfolio/audio/music.mp3" />}
    </>
  );
};
