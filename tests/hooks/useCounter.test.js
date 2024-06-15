import { renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"
import { act } from "react-dom/test-utils"

describe('Pruebas en el Use Counter', () => { 
    test('Debe retornar los valores por defecto', () => { 
        const {result}= renderHook(()=>useCounter())
        const {counter,decrement,increment,reset} = result.current
        expect(counter).toBe(1)
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))

     })
     test('Debe de generar el counter con el valor de 100', () => { 
        const {result}= renderHook(()=>useCounter(100))
        const {counter} = result.current
        expect(counter).toBe(100)
      })
      test('debe de incrementar el contador', () => { 
        const {result}= renderHook(()=>useCounter())
        const {counter,increment} = result.current
        act(()=>{
            increment()
        })
        expect(result.current.counter).toBe(2)
       })
       test('debe de decrementar el contador', () => { 
        const {result}= renderHook(()=>useCounter())
        const {counter,decrement} = result.current
        act(()=>{
            decrement()
        })
        expect(result.current.counter).toBe(0)
       })
       test('debe de reset el contador', () => { 
        const {result}= renderHook(()=>useCounter(100))
        const {counter,reset,increment} = result.current
        act(()=>{
            increment()
            reset()
        })
        expect(result.current.counter).toBe(0)
       })
 })    