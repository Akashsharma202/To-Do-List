
import './App.css';
import Main from './Components/Main';
import Task from './Components/Task';
import React, { Component, useState } from 'react'


function App() {
const [todos,setTodos]=useState([])
const addtodo = (todo) => {
  setTodos(todos.concat([todo]));
};
const deletetodo=(value)=>{
      setTodos(todos.filter(todo => todo !== value));
}

  return (
    <div className='form'>
      
      <Main addtodo={addtodo}/>
      <Task  todos={todos} deletetodo={deletetodo}/>

    </div>
  );
}

export default App;
