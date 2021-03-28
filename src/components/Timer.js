import { useEffect, useState } from 'react';
import '../css/Timer.css';
import Controls from './Controls';
import Display from './Display';

const Timer = () => {
  const getDisplay = (secs) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    const remPad = rem <= 9 ? `0${rem}` : rem;
    const display = `${mins}:${remPad}`;
    return display;
  };

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timer, setTimer] = useState({
    type: 'Session',
    seconds: sessionLength * 60,
    display: getDisplay(sessionLength * 60),
    playing: false,
  });

  const reset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimer({
      type: 'Session',
      seconds: sessionLength * 60,
      display: getDisplay(sessionLength * 60),
      playing: false,
    })
  };
    
  const handlePlusMinusClick = (e) => {
    if (timer.playing) return;
    if (e.target.id === 'break-decrement') setBreakLength(
      breakLength > 1 ? breakLength - 1 : 1
    );
    if (e.target.id === 'break-increment') setBreakLength(breakLength + 1);
    if (e.target.id === 'session-decrement') setSessionLength(
      sessionLength > 1 ? sessionLength - 1 : 1
    );
    if (e.target.id === 'session-increment') setSessionLength(sessionLength + 1);
  };

  useEffect(() => {
    if (!timer.playing) setTimer({
      ...timer,
      seconds: sessionLength * 60,
      display: getDisplay(sessionLength * 60),
    })
  }, [sessionLength])

  return (
    <div className="timer">
      <Controls playing={timer.playing} breakLength={breakLength} sessionLength={sessionLength} handlePlusMinusClick={handlePlusMinusClick} reset={reset}/>
      <Display label={timer.type} timeLeft={timer.display}/>
  </div>
  );
}

export default Timer;
