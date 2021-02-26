import React from 'react';
import {Board} from '../containers/pages/Board';

export const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <h1>Tic-Tac-Toe</h1>
        <Board />
      </div>
    </div>
  );
};
