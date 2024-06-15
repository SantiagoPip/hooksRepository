import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"
import { act } from "react-dom/test-utils"

describe('Pruebas en el useForm', () => {
    const initialForm = {
        name:'Tatiana',
        email:'tatiana@gmail.com'
    } 
    test('debe de regresar los valores pro defecto', () => { 
        const {result} = renderHook(()=>useForm(initialForm))
        expect(result.current).toEqual({
            name:initialForm.name,
            email:initialForm.email,
            formState:initialForm,
            onInputChange:expect.any(Function),
            onResetForm:expect.any(Function)
        });
     })
     test('Debe de cambiar el nombre del formulario', () => { 
        const newValue = 'Juan'
        const {result} = renderHook(()=>useForm(initialForm))
        const {onInputChange} = result.current
        act(()=>{
            onInputChange({target:{name:'name',value:newValue}})
        })
        expect(result.current.name).toBe(newValue)
        expect(result.current.formState.name).toBe(newValue)
      })
      test('debe realizar el reset del formulario', () => { 
        const newValue = 'Juan'
        const {result} = renderHook(()=>useForm(initialForm))
        const {onInputChange,onResetForm} = result.current
        act(()=>{
            onResetForm()
            onInputChange({target:{name:'name',value:newValue}})
        })
        expect(result.current.name).toBe(newValue)
        expect(result.current.formState.name).toBe(newValue)
       })
 })