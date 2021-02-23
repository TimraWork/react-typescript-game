import React, {FC, useState} from 'react';

interface IProps {
  value: string;
  setActive: () => void;
}

// Square
export const Square: FC<IProps> = ({value, setActive}) => {
  return (
    <button className="square" onClick={() => setActive()}>
      {value}
    </button>
  );
};

// Board - first child
export const Board = () => {
  const status = 'Next player: X';
  const [squares, setSquares] = useState<Array<string>>(Array(9).fill(null));

  const handleClick = (i: number) => {
    const array: Array<string> = squares.slice();
    array[i] = 'X';
    setSquares(array);
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((el, idx) => {
          return <Square key={idx} value={el} setActive={() => handleClick(idx)} />;
        })}
      </div>
    </div>
  );
};

// Game - parent
export const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};
