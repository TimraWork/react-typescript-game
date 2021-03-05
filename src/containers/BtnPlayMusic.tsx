import React, {useState, useRef, useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicOffIcon from '@material-ui/icons/MusicOff';

const MUSIC_URL = 'https://timra.ru/portfolio/audio/music.mp3';
const STORAGE = 'react-game/playMusic';

export const BtnPlayMusic: React.FC = () => {
  const [isMusicPlayed, setIsMusicPlayed] = useState<boolean>(true);
  const refMusic = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!refMusic.current) {
      return;
    }

    if (isMusicPlayed) {
      refMusic.current.defaultMuted = false;
      refMusic.current.muted = false;
    } else {
      refMusic.current.defaultMuted = true;
      refMusic.current.muted = true;
    }
  }, [isMusicPlayed]);

  useEffect(() => {
    const getStorage = localStorage.getItem(STORAGE);
    if (getStorage) setIsMusicPlayed(JSON.parse(getStorage || ''));
  }, []);

  const handleMusicToggleClick = () => {
    setIsMusicPlayed(!isMusicPlayed);
    localStorage.setItem(STORAGE, JSON.stringify(!isMusicPlayed));
  };

  return (
    <>
      <IconButton onClick={handleMusicToggleClick}>{isMusicPlayed ? <MusicOffIcon /> : <MusicNoteIcon />}</IconButton>
      {isMusicPlayed && <audio autoPlay loop ref={refMusic} src={MUSIC_URL} />}
    </>
  );
};
