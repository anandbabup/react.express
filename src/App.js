import logo from './logo.svg';
import './App.css';
import React from 'react'

function Title({ theme }) {
  const style = {
    background: theme.primary,
    color: theme.text,
  }

  return <h1 style={style}>Title</h1>
}

function Nested({ theme }) {
  return <Title theme={theme} />
}

function NestedTwice({ theme }) {
  return <Nested theme={theme} />
}

function App() {
  const theme = {
    primary: 'dodgerblue',
    text: 'white',
  }

  return <NestedTwice theme={theme} />
}


export default App;
