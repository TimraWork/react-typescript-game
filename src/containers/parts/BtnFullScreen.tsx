import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
interface FsDocument extends HTMLElement {
  msRequestFullscreen?: () => void;
  webkitRequestFullScreen?: () => void;
  mozRequestFullScreen?: () => void;
}

export function BtnFullScreen() {
  const FullscreenIconClickHandler = () => {
    const target = document.querySelector<FsDocument>('.game');
    if (target && target.requestFullscreen) target.requestFullscreen();
    if (target && target.webkitRequestFullScreen) target.webkitRequestFullScreen();
    if (target && target.msRequestFullscreen) target.msRequestFullscreen();
  };

  return (
    <IconButton onClick={FullscreenIconClickHandler}>
      <FullscreenIcon />
    </IconButton>
  );
}
