import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {
  const {user,setuser} = useContext(UserContext)

  return (
    <><h1>LoginPage</h1>
      <hr/>
      <pre aria-label='pre'>
        {JSON.stringify(user,null,3)}
      </pre>
      <button className='btn btn-primary'
      onClick={()=>setuser({id:123,name:"santiago",email:'santiago@gmail.com'})}>
        Establecer Usuario
      </button>
    </>
  )
}
