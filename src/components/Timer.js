import { useEffect, useState, useRef } from 'react';
import '../css/Timer.css';
import Controls from './Controls';
import Display from './Display';

const Timer = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerType, setTimerType] = useState('Session');
  const [seconds, setSeconds] = useState(sessionLength * 60);
  const [playing, setPlaying] = useState(false);
  const [then, setThen] = useState(null);
  const interval = useRef(null);

  const reset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimerType('Session');
    setSeconds(1500);
    setPlaying(false);
    setThen(null);
    const beep = document.getElementById('beep');
    beep.pause();
    beep.currentTime = 0;
  };
    
  const handlePlusMinusClick = (e) => {
    if (playing) return;
    if (e.target.id === 'break-decrement') setBreakLength(
      breakLength > 1 ? breakLength - 1 : 1
    );
    if (e.target.id === 'break-increment') setBreakLength(
      breakLength < 60 ? breakLength + 1 : 60
    );
    if (e.target.id === 'session-decrement') setSessionLength(
      sessionLength > 1 ? sessionLength - 1 : 1
    );
    if (e.target.id === 'session-increment') setSessionLength(
      sessionLength < 60 ? sessionLength + 1 : 60
    );
  };

  const startStop = () => {
    setPlaying(!playing);
  };

  const playBeep = () => {
    const beep = document.getElementById('beep');
    beep.currentTime = 0;
    beep.play();  
  };

  useEffect(() => {
    if (playing) {
      setThen(Date.now() + (seconds * 1000));
    } else {
      setThen(null)
    }
  }, [playing])

  useEffect(() => {
    clearInterval(interval.current);
    if (then) interval.current = setInterval(() => updateTimer(), 1000);
  }, [then])

  const updateTimer = () => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft === 0) playBeep();

    if (secondsLeft < 0 && timerType === 'Session') {
      setTimerType('Break');
      setSeconds(breakLength * 60);
      setThen(Date.now() + (breakLength * 60 * 1000)); 
    } else if (secondsLeft < 0 && timerType === 'Break') {
      setTimerType('Session');
      setSeconds(sessionLength * 60);
      setThen(Date.now() + (sessionLength * 60 * 1000)); 
    } else {
      setSeconds(secondsLeft);
    }
  };

  useEffect(() => {
    if (!playing) setSeconds(sessionLength * 60);
  }, [sessionLength]);

  return (
    <div className="timer">
      <Controls playing={playing} breakLength={breakLength} sessionLength={sessionLength} handlePlusMinusClick={handlePlusMinusClick} startStop={startStop} reset={reset}/>
      <Display label={timerType} timeLeft={seconds}/>
  </div>
  );
}

export default Timer;
