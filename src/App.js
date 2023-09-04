import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect } from 'react'

function App() {
  const intervalRef = useRef()
  const [count, setCount] = useState(0)

  useEffect(() => {
    intervalRef.current = setInterval(() => setCount(count => count + 1), 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <>
      <div style={{ fontSize: 120 }}>{count}</div>
      <button
        onClick={() => {
          clearInterval(intervalRef.current)
        }}
      >
        Stop
      </button>
    </>
  )
}


export default App;
