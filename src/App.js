import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react'

const ThemeContext = React.createContext()

function Title() {
  const theme = useContext(ThemeContext)
  const style = {
    background: theme.primary,
    color: theme.text,
  }

  return <h1 style={style}>Title</h1>
}

function Nested() {
  return <Title />
}

function NestedTwice() {
  return <Nested />
}

function App() {
  const theme = {
    primary: 'darkgreen',
    text: 'white'
  }

  return (
    <ThemeContext.Provider value={theme}>
      <NestedTwice />
    </ThemeContext.Provider>
  )
}


export default App;
