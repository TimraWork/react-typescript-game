import React, {FC} from 'react';

// key={idx} value={el} setActive

interface IProps {
  value: string;
  isWinner: boolean | null;
  setActive: () => void;
}

const Circle: FC = () => (
  <svg className="circle">
    <circle r="20" cx="24" cy="24" stroke="#009688" strokeWidth="5" fill="none" strokeLinecap="round"></circle>
  </svg>
);

const Cross: FC = () => (
  <svg className="cross">
    <line className="first" x1="5" y1="5" x2="40" y2="40" stroke="#606060" strokeWidth="5" strokeLinecap="round"></line>
    <line className="second" x1="40" y1="5" x2="5" y2="40" stroke="#606060" strokeWidth="5" strokeLinecap="round"></line>
  </svg>
);

export const Square: FC<IProps> = ({value, isWinner, setActive}) => {
  console.log(isWinner);
  return (
    <button className={`square ${isWinner ? 'square--winner' : ''}`} onClick={setActive}>
      {value === 'O' && <Circle />}
      {value === 'X' && <Cross />}
    </button>
  );
};
