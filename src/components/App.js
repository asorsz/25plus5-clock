import '../css/App.css';

function App() {
  return (
    <div className="timer">
    <div className="timer__controls">
        <button data-time="20" className="timer__button">20 Secs</button>
        <button data-time="300" className="timer__button">Work 5</button>
        <button data-time="900" className="timer__button">Quick 15</button>
        <button data-time="1200" className="timer__button">Snack 20</button>
        <button data-time="3600" className="timer__button">Lunch Break</button>
        <form name="customForm" id="custom">
          <input type="text" name="minutes" placeholder="Enter Minutes" />
        </form>
    </div>
    <div className="display">
      <h1 className="display__time-left">0</h1>
      <p className="display__end-time"></p>
    </div>
  </div>
  );
}

export default App;
