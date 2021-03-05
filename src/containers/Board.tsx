import React, {FC, useEffect, useState} from 'react';
import {Button} from '@material-ui/core';
import {Square} from '../components/Square';
import {fillArray, getWinner, playAudio} from '../utils';
import {GameStatus} from './GameStatus';

interface IProps {
  isMute: boolean;
}

const STORAGE = 'react-game/squares';

export const Board: FC<IProps> = ({isMute}) => {
  const [squares, setSquares] = useState<Array<string | null>>(fillArray);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [isTie, setIsTie] = useState<boolean>(false);

  useEffect(() => {
    const getStorage = localStorage.getItem(STORAGE);
    if (getStorage) setSquares(JSON.parse(getStorage || ''));
  }, []);

  useEffect(() => {
    const winner = getWinner(squares)?.winner || null;
    if (winner) {
      setWinner(winner);
    } else {
      setWinner(null);
    }

    const isGameTie = !!(squares.filter((el) => el).length === 9);
    setIsTie(isGameTie);
  }, [squares]);

  const handleSquareClick = (i: number) => {
    const array = squares.slice();

    if (getWinner(array) || squares[i]) return;
    array[i] = xIsNext ? 'X' : 'O';

    localStorage.setItem(STORAGE, JSON.stringify(array));

    setSquares(array);
    setXIsNext(!xIsNext);
    playAudio(xIsNext ? 'cross' : 'zero', isMute);
  };

  const handleNewGameClick = () => {
    setSquares(fillArray);
    setWinner(null);
    setIsTie(false);
    setXIsNext(true);
    localStorage.removeItem(STORAGE);
  };

  return (
    <>
      <GameStatus squares={squares} xIsNext={xIsNext} isMute={isMute} winner={winner} isTie={isTie} />
      <div className={`board ${winner || isTie ? 'board--disabled' : ''}`}>
        {squares.map((el, idx) => {
          return (
            <Square
              key={idx}
              value={el}
              isWinner={getWinner(squares)?.idxs.includes(idx) || null}
              setActive={() => handleSquareClick(idx)}
            />
          );
        })}
      </div>
      {(winner || isTie) && (
        <Button className="btn-new-game" variant="contained" onClick={handleNewGameClick}>
          new game
        </Button>
      )}
    </>
  );
};
