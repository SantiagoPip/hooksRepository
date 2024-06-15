const initialState = [{
    id:1,
    todo:'Recolectar la gema del alma',
    done:false
}]

 const todoReducer = (state = initialState,action={})=>{
//ACTION = como quiero que cambie el estado
//Siempre debe regresar un estado
if(action.type === '[TODO] add todo')
    return [...state, action.payload]
 }

 let todos = todoReducer()
const newTodo = {
    id:2,
    todo:'Recolectar la piedra de poder',
    done:false
}
const addTodoAction = {
    type:'[TODO] add todo',
    payload:newTodo,  //Lo que va en la accion  
}
todos = todoReducer(todos,addTodoAction);
console.log({state:todos})
