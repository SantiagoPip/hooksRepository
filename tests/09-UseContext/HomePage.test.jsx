import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-UseContext/HomePage"
import { useContext } from "react"
import { UserContext } from "../../src/09-UseContext/context/UserContext"

describe('Pruebas en el <HomePage/>', () => { 
    const user = {
        id:1,
        name:'Tatiana'
    }
    
    test('debe de mostrar el componente sin el usuario', () => { 
        
        render(
        <UserContext.Provider value ={{user:null}}>
            <HomePage/>
        </UserContext.Provider>
        );
        const preTag= screen.getByLabelText('pre');//
        expect(preTag.innerHTML).toBe('null')
     })
     test('debe de mostrar el componente sin el usuario', () => { 
        
        render(
        <UserContext.Provider value ={{user}}>
            <HomePage/>
        </UserContext.Provider>
        );
        const preTag= screen.getByLabelText('pre');//
        expect(preTag.innerHTML).toContain(user.name)
     })
 })