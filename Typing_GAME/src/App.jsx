import { useEffect, useState } from "react";
import Home from "./components/Home.jsx";
import PlayGame from "./components/playGame.jsx";
import EndGame from "./components/EndGame.jsx";

const App = () => {
  const [statusGame, setStatusGame] = useState(null);
  const [score, setScore] = useState({ right: 0, wrong: 0 });
  const [timeRemaining, setTimeRemaining] = useState(60);

  useEffect(() => {
    if (statusGame === "playGame") {
      setScore({ right: 0, wrong: 0 });
      setTimeRemaining(60);
    }
  }, [statusGame]);

  const handleChangeStatusGame = (status) => {
    setStatusGame(status);
  };

  const handleChangeScore = (type) => {
    setScore((prevScore) => ({
      ...prevScore,
      [type]: prevScore[type] + 1,
    }));
  };

  const handleGameEnd = () => {
    setStatusGame("EndGame");
  };

  let layout;
  switch (statusGame) {
    case "playGame":
      layout = (
        <PlayGame
          onChangeScore={handleChangeScore}
          timeRemaining={timeRemaining}
          score={score}
          onGameEnd={handleGameEnd}
        />
      );
      break;
    case "EndGame":
      layout = <EndGame score={score} onGame={handleChangeStatusGame} />;
      break;
    default:
      layout = <Home onGame={handleChangeStatusGame} />;
      break;
  }

  return <div>{layout}</div>;
};

export default App;
