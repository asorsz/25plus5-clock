import { useState } from 'react';
import '../css/Timer.css';
import Controls from './Controls';
import Display from './Display';

function Timer() {
  const [playing, setPLaying] = useState(false)
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const handlePlusMinusClick = (e) => {
    if (e.target.id === 'break-decrement') setBreakLength(
      breakLength > 1 ? breakLength - 1 : 1);
    if (e.target.id === 'break-increment') setBreakLength(breakLength + 1);
    if (e.target.id === 'session-decrement') setSessionLength(
      sessionLength > 1 ? sessionLength - 1 : 1);
    if (e.target.id === 'session-increment') setSessionLength(sessionLength + 1);

  };

  return (
    <div className="timer">
      <Controls playing={playing} breakLength={breakLength} sessionLength={sessionLength} handlePlusMinusClick={handlePlusMinusClick}/>
      <Display />
  </div>
  );
}

export default Timer;
