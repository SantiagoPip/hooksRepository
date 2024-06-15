import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-UseContext/context/UserContext"
import { LoginPage } from "../../src/09-UseContext/LoginPage"

describe('Preubas en <LoginPage/>', () => { 
    test('Debe de mostrar el componente sin el usuario', () => { 
        render(<UserContext.Provider value={{user:null}}>
            <LoginPage/> 
        </UserContext.Provider>)
        const preTag= screen.getByLabelText('pre');//
        expect(preTag.innerHTML).toBe('null')
     })
     test('Debe de llamar el setUser cuando se hace click al setUser', () => {
        const setUserMock =jest.fn();

        render(<UserContext.Provider value={{user:null,setuser:setUserMock}}>
            <LoginPage/> 
        </UserContext.Provider>)
        const button= screen.getByRole('button');//
        fireEvent.click(button);
        expect(setUserMock).toHaveBeenCalledWith({"id":123,"name":"Tatiana","email":'tatiana@gmail.com'})
      })
 })