import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos =[],onDeleteTodo,onToggleTodo}) => {

  return (
    <ul className='list-group'>
    {
        todos.map(todo =>(
            <TodoItem key={todo.id} todoItem = {todo} 
            onDeleteTodo = {onDeleteTodo}
            onToggleTodo={onToggleTodo}/>
        ))
    }
</ul>
  )
}
