import '../css/Controls.css';
import { AiFillPlusCircle, AiFillMinusCircle, AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi'

const Controls = (props) => {
  return (
    <div id="control-banner">
      <div className="control-section">
        <div id="break-label">Break Length</div>
        <div className="controls">
          <button
            id="break-decrement"
            className="plus-minus"
            onClick={(e) => props.handlePlusMinusClick(e)}
          ><AiFillMinusCircle /></button>
          <div id="break-length">{props.breakLength}</div>
          <button
            id="break-increment"
            className="plus-minus"
            onClick={(e) => props.handlePlusMinusClick(e)}
          ><AiFillPlusCircle /></button>
        </div> 
      </div>
      <div className="control-section">
        <div className="controls">
          <button id="start_stop" className="play-pause-reset" onClick={() => props.startStop()}>
            {props.playing ? <AiFillPauseCircle /> : <AiFillPlayCircle />}            
          </button>
          <button id="reset" className="play-pause-reset" onClick={() => props.reset()}><BiReset /></button>
        </div>
      </div>
      <div className="control-section">
      <div id="session-label">Session Length</div>
        <div className="controls">
          <button
            id="session-decrement"
            className="plus-minus"
            onClick={(e) => props.handlePlusMinusClick(e)}
          ><AiFillMinusCircle /></button>
          <div id="session-length">{props.sessionLength}</div>
          <button
            id="session-increment"
            className="plus-minus"
            onClick={(e) => props.handlePlusMinusClick(e)}
          ><AiFillPlusCircle /></button>
        </div>
      </div>
    </div>
  )
};

export default Controls;