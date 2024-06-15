import React from 'react'
import { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef = useRef();//Permite mantener una referencia aunque cambie
    const onClick = ()=>{
        console.log(inputRef)
    }
  return (
    <>
    <h1>Focus Screen</h1>
    <hr />
    <input type="text"
    placeholder='Ingrese su nombre'
    className='form-control'
    ref={inputRef} />
    <button className='btn btn-primary mt-2' onClick={onClick}>
        setFocus
    </button>

    </>
  )
}
