import React from 'react';
import {Board} from '../containers/Board';
import {refElement} from '../types';

interface IProps {
  innerRef: (ref: refElement) => void;
  isMute: boolean;
}

export const Game: React.FC<IProps> = ({innerRef, isMute}) => {
  return (
    <div className="game" ref={innerRef}>
      <div className="game--board">
        <h1 className="game--title">Tic-Tac-Toe</h1>
        <Board isMute={isMute} />
      </div>
    </div>
  );
};
