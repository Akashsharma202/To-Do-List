import React, {useState } from 'react'


export default function Main(props){
  const [text,setText]=useState("")

  const handleOnChange=(event)=>{
    setText(event.target.value)
   }  
   function handleOnClick(event){
    event.preventDefault();
     props.addtodo(text);
     setText("")
   }
    return (
      <div>
          <div className='container' style={{textAlign:"center",backgroundColor:"purple",width:"55%",position:"relative",left:"25%",height:"160px"}}>
            <h1 style={{paddingTop:"30px"}}>My To Do List</h1>
            <div style={{display:"flex"}}>
            <input type="text" style={{width:"60%",height:"30px",fontSize:"15px",position:"relative",left:"15%"}} placeholder="Title..." value={text} onChange={handleOnChange}></input>
            <button type='submit' style={{position:"relative",left:"15%"}} onClick={handleOnClick}>Add</button>
            </div>
          </div>
         
      </div>
    )
}

