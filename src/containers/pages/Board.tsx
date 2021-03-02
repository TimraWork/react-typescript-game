import React, {FC, useEffect, useState} from 'react';
import {Button} from '@material-ui/core';
import {Square} from '../../components/Square';
import {getWinner, getStatus, playAudio} from './utils';

interface IProps {
  isMute: boolean;
}

export const Board: FC<IProps> = ({isMute}) => {
  const [squares, setSquares] = useState<Array<string>>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<null | Object>(null);
  const [isTie, setIsTie] = useState<boolean>(false);

  useEffect(() => {
    const winnerEl = getWinner(squares)?.winner || null;
    setWinner(winnerEl);

    if (winnerEl) setIsTie(false);
  }, [squares, xIsNext]);

  const handleClick = (i: number) => {
    const array: Array<string> = squares.slice();

    if (getWinner(array) || squares[i]) return;
    array[i] = xIsNext ? 'X' : 'O';

    setSquares(array);
    setXIsNext(!xIsNext);

    const audioName = xIsNext ? 'cross' : 'zero';
    playAudio(audioName, isMute);

    setIsTie(array.filter((el) => el).length === 9);
  };

  const handlePlayAgain = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setIsTie(false);
  };

  useEffect(() => {
    setTimeout(function () {
      if (winner && !isTie) playAudio('win', isMute);
    }, 2000);
  }, [isTie, winner]);

  useEffect(() => {
    console.log(isTie, winner);
    setTimeout(function () {
      if (isTie) playAudio('tie', isMute);
    }, 1500);
  }, [isTie]);

  return (
    <>
      <div className={`status ${winner || isTie ? 'status--win' : ''} ${xIsNext ? 'status--nextX' : ''}`}>
        &nbsp; {getStatus(getWinner(squares)?.winner || null, xIsNext, isTie)}
      </div>
      <div className={winner || isTie ? 'board  board--disabled' : 'board'}>
        {squares.map((el, idx) => {
          return <Square key={idx} value={el} isWinner={getWinner(squares)?.idxs.includes(idx) || null} setActive={() => handleClick(idx)} />;
        })}
      </div>
      {(winner || isTie) && (
        <Button className="btn-new-game" variant="contained" onClick={handlePlayAgain}>
          new game
        </Button>
      )}
    </>
  );
};
