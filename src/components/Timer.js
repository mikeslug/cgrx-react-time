import React, { useState, useRef, useEffect } from "react";

const Timer = (props) => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const increment = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    props.timerActive();
  };

  const handlePause = () => {
    clearInterval(increment.current);
    setIsPaused(false);
    props.timerInactive();
    // console.log("timer is paused at: ", timer);
  };

  const handleResume = () => {
    setIsPaused(true);
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    setIsActive(true);
    props.timerActive();
  };

  useEffect(() => {
    props.getTimer(timer);
  }, [timer]);

  useEffect(() => {
    handleReset();
  }, [props.formSubmitted]);

  const handleReset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
    props.timerInactive();
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="app">
      <div className="stopwatch-card">
        <p>{formatTime()}</p>
        <div className="buttons">
          {!isActive && !isPaused ? (
            <button onClick={handleStart}>Start</button>
          ) : isPaused ? (
            <button onClick={handlePause}>Pause</button>
          ) : (
            <button onClick={handleResume}>Resume</button>
          )}
          <button onClick={handleReset} disabled={!isActive}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
