import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
    const {counter,increment,decrement,reset} =useCounter();
  return (
      <>
      <h1>Counter con hook:{counter}</h1>
      <hr />
      <button className='bt btn-priary' onClick={()=>increment(2)}>+1</button>
      <button className='bt btn-priary' onClick={reset}>Reset</button>
      <button className='bt btn-priary'onClick={()=>decrement(3)}>-1</button>
    </>

  )
}
