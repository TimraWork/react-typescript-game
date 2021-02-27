import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

export function BtnFullScreen() {
  const FullscreenIconClickHandler = () => {
    const target = document.querySelector<HTMLElement>('.game');
    if (target && target.requestFullscreen) target.requestFullscreen();
    // mozilla proposal
    // if (target && target.webkitRequestFullScreen) target.webkitRequestFullScreen();
    // // Webkit (works in Safari and Chrome Canary)
    // if (target && target.mozRequestFullScreen) target.mozRequestFullScreen();
  };

  return (
    <IconButton onClick={FullscreenIconClickHandler}>
      <FullscreenIcon />
    </IconButton>
  );
}
