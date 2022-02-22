import React from 'react'
import { useState } from 'react'
export default function AddTodo(props) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(!title||!desc){
            alert("Title or description cannot beblank")
        }
        else{
            props.addTodo(title,desc);
        }
    }
    return (
        <div className='container my-3 '>
            <h3 className='text-center'>Add a Todo</h3>
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label big"> Todo Title: </label>
    <input type="text"  value={title} onChange={(e)=>{setTitle(e.target.value)}}  className="htmlForm-control lamba" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label big ">Description: </label>
    <input type="text" value={desc}   onChange={(e)=>{setDesc(e.target.value)}}className="htmlForm-control lamba" id="desc"/>
  </div>
  <button type='submit' className='btn  color'>Add Todo</button>
  </form>
        </div>
    )
}
