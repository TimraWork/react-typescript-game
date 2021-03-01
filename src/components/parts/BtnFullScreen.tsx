import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
interface IProps {
  onBtnFullScreenClick: () => void;
}

export const BtnFullScreen: React.FC<IProps> = ({onBtnFullScreenClick}) => {
  return (
    <IconButton onClick={onBtnFullScreenClick}>
      <FullscreenIcon />
    </IconButton>
  );
};
