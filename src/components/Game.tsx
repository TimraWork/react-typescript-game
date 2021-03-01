import React from 'react';
import {Board} from '../containers/pages/Board';
import {refElement} from '../types';

interface IProps {
  innerRef: (ref: refElement) => void;
}

export const Game: React.FC<IProps> = ({innerRef}) => {
  return (
    <div className="game" ref={innerRef}>
      <div className="game--board">
        <h1 className="game--title">Tic-Tac-Toe</h1>
        <Board />
      </div>
    </div>
  );
};
