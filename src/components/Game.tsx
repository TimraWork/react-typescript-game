import React from 'react';
import {Board} from '../containers/pages/Board';

export const Game = () => {
  const refGame = React.useRef(null);
  return (
    <div className="game" ref={refGame}>
      <div className="game--board">
        <h1 className="game--title">Tic-Tac-Toe</h1>
        <Board />
      </div>
    </div>
  );
};
