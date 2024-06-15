import React from 'react'
import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useEffect } from 'react'
import { useTodos } from '../hooks/useTodos'



export const TodoApp = () => {
    const {todos, todosCount,handleDeleteTodo,pendingTodosCount,handleNewTodo,handleToggleTodo} = useTodos()
    useEffect(() => {//Permite estar atento de los cambios en el local storage
        localStorage.setItem('todos',JSON.stringify(todos)||[])
    }, [todos])   
    
  return (
    <>
    <h1>TodoApp{todosCount} <small>Pendientes:{pendingTodosCount}</small></h1>
    <hr />
    <div className='row'>
        <div className='col-7'>
            <TodoList todos = {todos} 
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo = {handleToggleTodo}/>
        </div>
    </div>
    <div className='col-5'>
        <h4>Agregar Todo</h4>
        <hr />
        <TodoAdd handleNewTodo = {handleNewTodo}/>
    </div>
    </>
  )
}
