import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const color = count % 5 === 0 ? 'red' : 'blue'

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

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
