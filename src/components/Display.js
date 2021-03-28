import '../css/Display.css';

const Display = (props) => {
  const getDisplay = (secs) => {
    const mins = Math.floor(secs / 60);
    const minsPad = mins <= 9 ? `0${mins}` : mins;
    const rem = secs % 60;
    const remPad = rem <= 9 ? `0${rem}` : rem;
    const display = `${minsPad}:${remPad}`;
    return display;
  };

  return (
    <div className="display">
      <div id="timer-label">{props.label}</div>
      <h1 id="time-left">{getDisplay(props.timeLeft)}</h1>
      <audio id="beep" src="./audio/beep.wav" preload="auto"></audio>
    </div>
  )
};

export default Display;