import React from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'
import { useState } from 'react'
import { useMemo } from 'react'


const hevyStuff = (iterationNumber = 100)=>{
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahi vamos...')
        
    }
    return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {
    const {counter,increment} = useCounter(10)
    const [show, setShow] = useState(true)
    const memorizedValue = useMemo(()=>hevyStuff(counter),[counter])
    return (
    <>
    <h1>Counter: <small>{counter}</small></h1>
    <hr />
    <h4>{memorizedValue}</h4>
    <button className='btn btn-primary' onClick={()=>increment()}>
        +1
    </button>
    <button className='btn btn-outline-primary' onClick={()=>setShow(!show)}>
        show/hide {JSON.stringify(show)}
    </button>
    </>
  )
}
