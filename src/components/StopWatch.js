import React from 'react';
import { Timer } from 'react-countdown-clock-timer';
import "../pages/game.css"

const StopWatch = (props) => {

      return (
        <div className='timer-container'>
          <div className="_new-game">
            <p>Time</p>
            <Timer
              durationInSeconds={20}
              formatted={true}
              isPaused={props.isStarted}
              showPauseButton={false}
              showResetButton={false}
              
              onStart = {()=> {
                console.log('Triggered when the timer starts')
              }}
              onPause = {(remainingDuration)=> {
                console.log('Triggered when the timer is paused', remainingDuration)
              }}
              onFinish = {()=> {
                console.log('Triggered when the timer finishes')
                props.onFailure()
              }}
              onReset = {(remainingDuration)=> {
                console.log('Triggered when the timer is reset', remainingDuration)
                props.onReplay()
              }}
              onResume = {(remainingDuration)=> {
                console.log('Triggered when the timer is resumed', remainingDuration)
              }}
            />
          </div>
      </div>
      )
}

export default StopWatch