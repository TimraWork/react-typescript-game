import {Button} from '@material-ui/core';
import React, {FC, useState} from 'react';
import {Square} from '../../components/Square';

// Board - first child
export const Board: FC = () => {
  const [squares, setSquares] = useState<Array<string>>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [isTie, setIsTie] = useState<boolean>(false);

  const getWinner = (squares: Array<string | null>) => {
    const winnerLines = [
      // horizontal indexes
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // vertical indexes
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonal indexes
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winnerLines.length; i++) {
      const [firstIdx, secondIdx, thirdIdx] = winnerLines[i];
      // prettier-ignore
      if (squares[firstIdx] &&
        squares[firstIdx] === squares[secondIdx] &&
        squares[firstIdx] === squares[thirdIdx])
      {
        return squares[firstIdx];
      }
    }
    return null;
  };

  const getStatus = (winner: string | null, xIsNext: boolean) => {
    let status;
    if (winner) {
      status = 'Победитель: ' + winner;
    } else if (isTie) {
      status = 'Ничья: !!';
    } else {
      status = 'Следующий: ' + (xIsNext ? 'X' : '0');
    }

    return status;
  };

  const handleClick = (i: number) => {
    const array: Array<string> = squares.slice();

    if (getWinner(array) || squares[i]) {
      return;
    }
    array[i] = xIsNext ? 'X' : 'O';

    // if (this.audio) {
    //   this.audio.pause();
    // }
    // this.audio = new Audio('audio_url');
    // this.audio.play();

    const audioUrl = xIsNext ? 'https://timra.ru/portfolio/audio/cross.mp3' : 'https://timra.ru/portfolio/audio/zero.mp3';
    const audio = new Audio(audioUrl);
    audio.volume = 0.1;
    audio.play();

    setSquares(array);
    setXIsNext(!xIsNext);
    setWinner(getWinner(array));
    setIsTie(array.filter((el) => el).length === 9);
  };

  const handlePlayAgain = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setIsTie(false);
  };

  return (
    <>
      <div className={winner || isTie ? 'status status--win' : 'status'}>&nbsp;{getStatus(getWinner(squares), xIsNext)}</div>
      <div className={winner || isTie ? 'board board--disabled' : 'board'}>
        {squares.map((el, idx) => {
          return <Square key={idx} value={el} setActive={() => handleClick(idx)} />;
        })}
      </div>
      {(winner || isTie) && (
        <Button variant="contained" onClick={handlePlayAgain}>
          Play again
        </Button>
      )}
    </>
  );
};
