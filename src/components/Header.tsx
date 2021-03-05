import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {Logo} from './parts/Logo';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import {BtnPlayMusic} from '../containers/BtnPlayMusic';

interface IProps {
  onBtnFullScreenClick: () => void;
  onBtnVolumeMuteClick?: () => void;
  isMute: boolean;
}

export const Header: React.FC<IProps> = ({onBtnFullScreenClick, onBtnVolumeMuteClick, isMute}) => {
  return (
    <header>
      <Logo />

      <IconButton onClick={onBtnFullScreenClick}>
        <FullscreenIcon />
      </IconButton>

      <BtnPlayMusic />

      <IconButton onClick={onBtnVolumeMuteClick}>{!isMute ? <VolumeOffIcon /> : <VolumeUpIcon />}</IconButton>
    </header>
  );
};
