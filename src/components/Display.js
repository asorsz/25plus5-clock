import '../css/Display.css';

const Display = (props) => {
  return (
    <div className="display">
      <div id="timer-label">{props.label}</div>
      <h1 id="time-left">{props.timeLeft}</h1>
    </div>
  )
};

export default Display;