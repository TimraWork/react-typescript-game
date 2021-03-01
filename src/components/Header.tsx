import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {Logo} from './parts/Logo';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

interface IProps {
  onBtnFullScreenClick: () => void;
}

export const Header: React.FC<IProps> = ({onBtnFullScreenClick}) => {
  return (
    <header>
      <Logo />
      <IconButton onClick={onBtnFullScreenClick}>
        <FullscreenIcon />
      </IconButton>
    </header>
  );
};
