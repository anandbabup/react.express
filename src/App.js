import logo from './logo.svg';
import './App.css';
import React, { useState, memo, useCallback, useEffect } from 'react'

const Logger = memo((props) => {
  props.log()
  return null
})

function App() {
  const [count, setCount] = useState(0)
  const count5 = Math.floor(count / 5)

  const memoizedFunction = useCallback(() => {
    console.log('useCallback')
  }, [count5])

  const normalFunction = () => {
    console.log('normal')
  }

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment {count}
      </button>
      <Logger log={memoizedFunction} />
      <Logger log={normalFunction} />
    </>
  )
}


export default App;
