export const fillArray = () => Array(9).fill(null);

export const getWinner = (squares: Array<string | null>) => {
  // prettier-ignore
  const winnerLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal indexes
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical indexes
      [0, 4, 8], [2, 4, 6] // diagonal indexes
    ];

  for (let i = 0; i < winnerLines.length; i++) {
    const [firstIdx, secondIdx, thirdIdx] = winnerLines[i];
    // prettier-ignore
    if (squares[firstIdx] &&
        squares[firstIdx] === squares[secondIdx] &&
        squares[firstIdx] === squares[thirdIdx])
      {
        return {winner: squares[firstIdx], idxs: [firstIdx, secondIdx, thirdIdx]};
      }
  }

  return null;
};

export const playAudio = (audioName: string, isMute: boolean, timeout?: number) => {
  if (!isMute) {
    const audioUrl = `https://timra.ru/portfolio/audio/${audioName}.mp3`;
    const audio: HTMLAudioElement = new Audio(audioUrl);
    audio.volume = 0.1;
    setTimeout(function () {
      audio.play();
    }, timeout);
  }
};
