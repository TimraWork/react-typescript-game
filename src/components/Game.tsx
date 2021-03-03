import {IconButton} from '@material-ui/core';
import React from 'react';
import {Board} from '../containers/Board';
import {refElement} from '../types';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
interface IProps {
  innerRef: (ref: refElement) => void;
  isMute: boolean;
  handleFullscreenExitClick: () => void;
}

export const Game: React.FC<IProps> = ({innerRef, isMute, handleFullscreenExitClick}) => {
  return (
    <div className="game" ref={innerRef}>
      <IconButton className="FullscreenExitIcon" onClick={handleFullscreenExitClick}>
        <FullscreenExitIcon />
      </IconButton>

      <div className="game--board">
        <h1 className="game--title">Tic-Tac-Toe</h1>
        <Board isMute={isMute} />
      </div>
    </div>
  );
};
