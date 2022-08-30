import React, { Component } from 'react'

const Todo=(props)=><li onClick={() => props.deletetodo(props.todo)}>{props.todo}</li>;
function Task(props) {
    
    return (
        <div style={{textAlign:"center",backgroundColor:"white",width:"55%",position:"relative",left:"25%"}}>
        <ul style={{fontSize:"20px",fontWeight:"bold",listStyle: "none"}}>
        {props.todos.map(todo=>(
          <Todo todo={todo} key={todo} deletetodo={props.deletetodo}/>
        ))}
        </ul>
        </div>
        
      )
      
}


export default Task