/* eslint-disable no-unused-vars */
import { useState } from 'react';
import CounterSection from './components/Counter';
import ResetSection from './components/Reset';
import Header from './components/Header';

setTimeout(() => {
  document.querySelector('.reset-btn').disabled = true;
}, 1);

export default function Counter() {
  const [value, setValue] = useState(0);

  const decreaseValue = () => {
    document.querySelector('.reset-btn').disabled = false;
    setValue(value - 1);
  }

  const increaseValue = () => {
    document.querySelector('.reset-btn').disabled = false;
    setValue(value + 1);
  }

  function countedValue() {
    return value >= 10 || value < 0 ? disableCounterButton() : value;
  }

  const resetValue = () => {
    for (let btn of counterBtn) {
      btn.disabled = false;
    }

    document.querySelector('.reset-btn').disabled = true;
    setValue(0);
  }

  const counterBtn = document.querySelectorAll('.count-btn');
  
  function disableCounterButton() {
    for (let btn of counterBtn) {
      btn.disabled = true;
    }
    document.querySelector('.reset-btn').disabled = false;
    return 'Done!';
  }

  return (
    <>
      <div className="header">
        <Header title={'Counter App 🧮'}/>
      </div>
      <div className="counter">
        <CounterSection value={countedValue()} onDecrease={decreaseValue} onIncrease={increaseValue}/>
      </div>
      <div className="reset">
        <ResetSection onReset={resetValue}/>
      </div>
    </>
  )
}


