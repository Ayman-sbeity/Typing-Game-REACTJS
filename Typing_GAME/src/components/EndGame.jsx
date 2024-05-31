/* eslint-disable react/prop-types */

const EndGame = ({ score, onGame }) => {
  const isMoreWrongThanRight = score.wrong > score.right;
  const isMoreRightThanWrong = score.right > score.wrong;

  return (
    <div className="endGame">
      <div className="result">
        {isMoreWrongThanRight && (
          <div className="message">Oops! Good luck next time!</div>
        )}
        {isMoreRightThanWrong && (
          <div className="message success">Great job! Keep it up!</div>
        )}
        <div className="score-section">
          <div className="title">Right Words</div>
          <div className="number">{score.right}</div>
          <div className="title">Wrong Words</div>
          <div className="number wrong">{score.wrong}</div>
        </div>
      </div>
      <button className="btnPlay" onClick={onGame}>
        Play Game Again
      </button>
    </div>
  );
};

export default EndGame;
