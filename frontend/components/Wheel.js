import React from 'react'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'
import { connect } from 'react-redux'


export function Wheel(props) {
  const { moveClockwise, moveCounterClockwise } = props;

  const handleClockwise = (index) => {
    // 5 index places max
    let currentIndex = index === 5 ? 0 : index + 1;
    moveClockwise(currentIndex)
  }

  const handleCounterClockwise = (index) => {
    let currentIndex = index === 0 ? 5 : index - 1;
    moveCounterClockwise(currentIndex)
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${props.wheel === 0 ? 'active' : ''}`} style={{ "--i": 0 }}>{props.wheel === 0 ? 'B' : ''}</div>
        <div className={`cog ${props.wheel === 1 ? 'active' : ''}`} style={{ "--i": 1 }}>{props.wheel === 1 ? 'B' : ''}</div>
        <div className={`cog ${props.wheel === 2 ? 'active' : ''}`} style={{ "--i": 2 }}>{props.wheel === 2 ? 'B' : ''}</div>
        <div className={`cog ${props.wheel === 3 ? 'active' : ''}`} style={{ "--i": 3 }}>{props.wheel === 3 ? 'B' : ''}</div>
        <div className={`cog ${props.wheel === 4 ? 'active' : ''}`} style={{ "--i": 4 }}>{props.wheel === 4 ? 'B' : ''}</div>
        <div className={`cog ${props.wheel === 5 ? 'active' : ''}`} style={{ "--i": 5 }}>{props.wheel === 5 ? 'B' : ''}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={() => handleCounterClockwise(props.wheel)} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={() => handleClockwise(props.wheel)} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

export default connect(state => state, {moveClockwise, moveCounterClockwise})(Wheel)