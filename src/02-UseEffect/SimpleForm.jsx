import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username:'strider',
        email:'santiago@dev.com'
    })
    const {username,email} = formState;
    const onInputChange = ({target})=>{
         const {name,value} = target
        // console.log(name, target)
        setFormState({
            ...formState,
            [name]:value
        })

    }
    useEffect(() => {
        
    },[])
    useEffect(() => {
        //console.log('El form state cambio')
    },[formState])
    useEffect(() => {
       // console.log('El eial state cambio')
    },[email])
    
  return (<>
    <h1>Formulario simple</h1>
    <hr />
    <input type="text" className='form-control' placeholder='UserName'name='username'value={username} onChange={onInputChange}/>
    <input type="text" className='form-control mt-2' placeholder='santiago@dev.com'name='email'value={email} onChange={onInputChange} />
    {
        (username==='strider') && <Message/>
    }
  </>
  )
}
