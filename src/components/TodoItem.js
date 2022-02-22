import React from 'react'
export default function TodoItem({todo,onDelete}) {
    return (
        <div className='container length border1'>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className='btn  btn-sm color' onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
