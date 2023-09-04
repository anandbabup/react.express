import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'


function randomColor() {
  return `#${Math.random()
    .toString(16)
    .substr(-6)}`
}

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.body.style.backgroundColor = randomColor()
  },[])

  return (
    <button
      onClick={() => {
        setCount(count + 1)
      }}
    >
      Click HERE to increment: {count}
    </button>
  )
}


export default App;
