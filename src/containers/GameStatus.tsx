import React, {FC, useEffect, useState} from 'react';
import {getWinner, playAudio} from '../utils';

interface IProps {
  squares: Array<string | null>;
  xIsNext: boolean;
  isMute: boolean;
  winner: string | null;
  isTie: boolean;
}

const Status = {
  START: 'Start the game',
  CONTINUE: 'Next: ',
  endProperties: {
    WINNER: 'Winner: ',
    TIE: 'TIE'
  }
};

export const GameStatus: FC<IProps> = ({squares, xIsNext, isMute, winner, isTie}) => {
  const [status, setStatus] = useState<string>(Status.START);

  useEffect(() => {
    const isGameStarted = !!squares.filter((el) => el).length;

    if (!isGameStarted) {
      setStatus(Status.START);
    } else {
      setStatus(`${Status.CONTINUE} ${xIsNext ? 'X' : '0'}`);
    }
  }, [squares, xIsNext]);

  useEffect(() => {
    if (winner) {
      setStatus(Status.endProperties.WINNER);
      playAudio('win', isMute, 1500);
    } else if (isTie) {
      setStatus(Status.endProperties.TIE);
      playAudio('tie', isMute, 2000);
    }
  }, [winner, isTie]);

  return (
    <div className={`status ${winner || isTie ? 'status--win' : ''} ${xIsNext || status === Status.START ? 'status--nextX' : ''}`}>
      {status} {winner}
    </div>
  );
};
