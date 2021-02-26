import React, {FC} from 'react';

// key={idx} value={el} setActive

interface IProps {
  value: string;
  setActive: () => void;
}

const Circle: FC = () => (
  <svg className="circle">
    <circle r="20" cx="24" cy="24" stroke="#606060" stroke-width="5" fill="none" stroke-linecap="round"></circle>
  </svg>
);

const Cross: FC = () => (
  <svg className="cross">
    <line className="first" x1="5" y1="5" x2="40" y2="40" stroke="#606060" stroke-width="5" stroke-linecap="round"></line>
    <line className="second" x1="40" y1="5" x2="5" y2="40" stroke="#606060" stroke-width="5" stroke-linecap="round"></line>
  </svg>
);

export const Square: FC<IProps> = ({value, setActive}) => {
  return (
    <button className="square" onClick={setActive}>
      {value === 'O' && <Circle />}
      {value === 'X' && <Cross />}
    </button>
  );
};
