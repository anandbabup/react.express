import logo from './logo.svg';
import './App.css';
import React, { useState, memo, useMemo } from 'react'


const Heading = memo(({ style, title }) => {
  console.log('Rendered:', title)

  return <h1 style={style}>{title}</h1>
})

function App() {
  const [count, setCount] = useState(0)

  const normalStyle = {
    backgroundColor: 'teal',
    color: 'white',
  }

  const memoizedStyle = useMemo(() => {
    return {
      backgroundColor: 'red',
      color: 'white',
    }
  }, [])

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment {count}
      </button>
      <Heading style={memoizedStyle} title="Memoized" />
      <Heading style={normalStyle} title="Normal" />
    </>
  )
}


export default App;
