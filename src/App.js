import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(4);

  function decrementCount() {
    setCount(count - 1);
  }

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className='App'>
      <button className='btn' onClick={decrementCount} >-</button>
      <span>{count}</span>
      <button className='btn' onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
