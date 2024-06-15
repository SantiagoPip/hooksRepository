import React, { useState } from 'react'
import { UserContext } from './UserContext'
const user = {
    id:123,
    name:'Santiago Moreno',
    email:'santiago.dev@gmail.com'
}
export const UserProvider = ({children}) => {
    const [user, setuser] = useState()
    
  return (
    <UserContext.Provider value={{user,setuser}}>{children}</UserContext.Provider>
  )
}
