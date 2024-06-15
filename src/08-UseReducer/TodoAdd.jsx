import React from 'react'
import { useForm } from '../hooks'

export const TodoAdd = ({handleNewTodo}) => {
  const {description, onInputChange,onResetForm} = useForm({
    description:'',

  })
  const onFormSubmit = (event)=>{
    event.preventDefault()
    if(description.lenght<=1) return;
    const newTodo ={
        id:new Date().getTime(),
        description,
        done:false
    }
    handleNewTodo(newTodo)
  }

  return (
    <form onSubmit={onFormSubmit}>
    <input type="text" placeholder='Que hay pa hacer?' className='form-control'name='description' value={description} onChange={onInputChange}/>
    <button type='submit' className='btn btn-outline-primary mt-1'>
        Agregar
    </button>
</form>
  )
}
