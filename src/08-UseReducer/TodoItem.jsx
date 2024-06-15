import React from 'react'

export const TodoItem = ({todoItem,onDeleteTodo,onToggleTodo}) => {

  return (
    <li key ={todoItem.id} className='list-group-item d-flex justify-content-between'>
    <span
     className= {`align-self-center ${todoItem.done && 'text-decoration-line-through'}`}
     onClick={()=>onToggleTodo(todoItem.id)}
     aria-label='span'
     >{todoItem.description}
     </span>
    <button className='btn btn-danger' onClick={()=>onDeleteTodo(todoItem.id)}>Borrar</button>
</li>
  )
}
