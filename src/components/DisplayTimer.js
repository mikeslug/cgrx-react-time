import React, { useState, useRef, useEffect } from "react";

const Timer = (props) => {
  const [timer, setTimer] = useState(0);
  const increment = useRef(null);

  const handleStart = () => {
    if (props.startTime) {
      setTimer(props.startTime);
    }
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  useEffect(() => {
    handleStart();
  }, []);

  return (
    <div className="app">
      <div className="stopwatch-card">
        <p>{formatTime()}</p>
      </div>
    </div>
  );
};

export default Timer;
