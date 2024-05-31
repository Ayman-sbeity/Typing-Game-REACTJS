/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// import backgroundImage from "../assets/ea8b264f-429a-44e6-8cf8-7c680b7f6850.jpeg";

const PlayGame = ({ onChangeScore, timeRemaining, score, onGameEnd }) => {
  const defaultData = "component state props lifecycle hook context reducer jsx virtualdom reactdom middleware router api server client express async await promise callback module export import package dependency environment variable node yarn npm babel webpack cli middleware restful json schema graphql mutation subscription algorithm binary compiler data structure database encryption framework git hardware interface library logic loop machine learning method object-oriented programming parameter polymorphism protocol query recursion refactor repository script software sprint syntax thread transaction variable virtual reality web service widget";
  const [dataTyping, setDataTyping] = useState([]);
  const [textTyping, setTextTyping] = useState({
    value: "",
    position: 0,
  });
  const [timerStarted, setTimerStarted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(timeRemaining);

  useEffect(() => {
    const addWord = (quantity = 10) => {
      const arrayDefaultDB = defaultData.split(" ");
      const dataTypingTest = [];
      for (let index = 0; index < quantity; index++) {
        const random = Math.floor(Math.random() * arrayDefaultDB.length);
        dataTypingTest.push({
          value: arrayDefaultDB[random],
          status: null,
        });
      }
      setDataTyping(prevData => [...prevData, ...dataTypingTest]);
    };

    if (dataTyping.length === 0) {
      addWord();
    }
  }, [dataTyping.length, defaultData]);

  useEffect(() => {
    if (timerStarted) {
      const timerInterval = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerInterval);
            onGameEnd();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [timerStarted, onGameEnd]);

  const handleChangeTyping = (e) => {
    if (!timerStarted) {
      setTimerStarted(true);
    }

    const valueInput = e.target.value;
    if (valueInput.includes(" ")) {
      checkResult();
    } else {
      setTextTyping({
        ...textTyping,
        value: valueInput,
      });
    }
  };

  const checkResult = () => {
    const wordCheck = dataTyping[textTyping.position].value;
    const newStatus = textTyping.value.trim() === wordCheck ? "correct" : "incorrect";

    const newDataTyping = dataTyping.map((item, index) =>
      index === textTyping.position ? { ...item, status: newStatus } : item
    );

    setDataTyping(newDataTyping);

    const nextPosition = textTyping.position + 1;

    if (nextPosition >= dataTyping.length) {
      addMoreWords();
      setTextTyping({
        value: "",
        position: nextPosition,
      });
    } else {
      setTextTyping({
        value: "",
        position: nextPosition,
      });
    }

    if (onChangeScore) {
      onChangeScore(newStatus === "correct" ? 'right' : 'wrong');
    }
  };

  const addMoreWords = () => {
    const arrayDefaultDB = defaultData.split(" ");
    const dataTypingTest = [];
    for (let index = 0; index < 20; index++) {
      const random = Math.floor(Math.random() * arrayDefaultDB.length);
      dataTypingTest.push({
        value: arrayDefaultDB[random],
        status: null,
      });
    }
    setDataTyping(prevData => [...prevData, ...dataTypingTest]);
  };

  console.log(dataTyping);

  return (
    <div style={{backgroundColor: "#989593e0" , backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px' }}>

        <div className="time">Time Remaining: {remainingTime}s</div>
        <div className="score">Right: {score.right} | Wrong: {score.wrong}</div>
   
      <div className="playing" style={{ fontSize: '20px', margin: '20px', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', maxHeight: '70vh', overflow: 'auto' }}>
        <ul className="list" style={{ listStyleType: 'none', padding: 0 }}>
          {dataTyping.map((item, index) => (
            <li key={index} className={`list-item ${item.status}`} style={{ marginBottom: '10px' }}>
              {item.value}
            </li>
          ))}
        </ul>
      </div>
      <input
        type="text"
        value={textTyping.value}
        onChange={handleChangeTyping}
        style={{ fontSize: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px' }}
      />
    </div>
  );
};

export default PlayGame;
