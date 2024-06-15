import { fireEvent, render, screen } from "@testing-library/react"
import { MultiplesCustomHooks } from "../../src/03-Examples/MultiplesCustomHooks"
import { useCounter, useFetch } from "../../src/hooks"
jest.mock('../../src/hooks/useFetch.js')
jest.mock('../../src/hooks/useCounter.js')
describe('Pruebas en <MultiplesCustomHooks/>', () => { 
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter:1,
        increment:mockIncrement
    });

    beforeEach(()=>{
        jest.clearAllMocks()
    })
    test('Debe de mostrar el componente por defecto', () => { 
        useFetch.mockReturnValue({
            data:null,
            isLoading:true,
            hasError:null
        })
        render(<MultiplesCustomHooks/>)
        screen.debug()
        expect(screen.getByText('Loading...'));
        const nextButton = screen.getByRole('button',{name:'Next quote'})
        expect(nextButton.disabled).toBeTruthy();
     })
     test('Debe de mostar un quote', () => { 
        useFetch.mockReturnValue({
            data:[{author:'Fernando',quote:'Hola Mundo'}],
            isLoading:false,
            hasError:null
        })

        render(<MultiplesCustomHooks/>)
        screen.debug()
        expect(screen.getByText('Hola Mundo')).toBeTruthy();

      })
      test('Debe llamar la funcion de incrementar', () => { 
       
     
        useFetch.mockReturnValue({
            data:[{author:'Fernando',quote:'Hola Mundo'}],
            isLoading:false,
            hasError:null
        });
        render(<MultiplesCustomHooks/>)
        const nextButton = screen.getByRole('button',{name:'Next quote'})
        fireEvent.click(nextButton);    
        expect(mockIncrement).toHaveBeenCalled();
       })
 })