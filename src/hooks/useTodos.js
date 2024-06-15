import { useReducer } from "react";
import { todoReducer } from "../08-UseReducer/todoReducer";

    const initialState = [{
        id:new Date().getTime(),
        description:'Recolectar la piedra del alma',
        done:false
        },
        {
            id:new Date().getTime()*3,
            description:'Recolectar la piedra del poder',
            done:false
        },
    
    ]
    const init = ( )=>{
        return JSON.parse(localStorage.getItem('todos')||[])
    }
    
export const useTodos = () => {
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState,init);

    const handleNewTodo = (todo)=>{
        const action = {
            type:'[TODO] Add Todo',
            payload:todo
        }
        dispatchTodo(action)
    }
    const handleDeleteTodo = (id)=>{
        const action = {
            type:"[TODO] Remove todo",
            payload:id
        }
        dispatchTodo(action)
    }
    const handleToggleTodo = (id)=>{
        console.log('Hol')
        const action ={
            type:'[TODO] Toggle todo',
            payload:id
        }
        dispatchTodo(action)
    }
    return {
        todosCount:todos.length,
        pendingTodosCount:todos.filter(todo=>!todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todos
    }
}
