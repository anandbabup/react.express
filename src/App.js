import {useEffect, useState} from 'react'
import './App.css';
import Todo from './Todo';

function App() {
  const [todo, setTodo] = useState(["Eat"]);
  const [newTodo, setNewTodo] = useState();
 
  const addTask = (e)=> {
     e.preventDefault();
     setTodo([...todo, newTodo]);
  }

  useEffect(()=>{

  },[todo])
  
  return (
    <div className="todoapp stack-large">
      <h1>Todo App</h1>
      <form onSubmit={addTask}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          onChange={(event) =>
            setNewTodo(event.target.value)
          }
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <Todo items={todo}></Todo>
    </div>
  );
}

export default App;
