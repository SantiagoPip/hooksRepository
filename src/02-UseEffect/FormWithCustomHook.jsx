import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
    const {formState,onInputChange,username,email,password,onResetForm} = useForm({
        username:'',
        email:'',
        password:''
    });
    //const {username,email,password} = formState

  const onSetForm = ()=>{
    onResetForm()
  }
  return (<>
    <h1>Formulario con custom hook</h1>
    <hr />
    <input type="text" className='form-control' placeholder='UserName'name='username'value={username} onChange={onInputChange}/>
    <input type="text" className='form-control mt-2' placeholder='santiago@dev.com'name='email'value={email} onChange={onInputChange} />
    <input type="password" className='form-control mt-2' placeholder='Contrasena'name='password'value={password} onChange={onInputChange} />
    <button className='btn btn-primary mt-1' onClick={onSetForm}  >Borrar</button>
  </>
  )
}
