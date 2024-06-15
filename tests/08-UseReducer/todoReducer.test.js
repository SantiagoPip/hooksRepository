import { todoReducer } from "../../src/08-UseReducer/todoReducer"

describe('Pruebas en el TodoReducer', () => { 
    const initialState = [{
        id:1,
        description:'Demo Todo',
        done:false
    }]
    test('debe regresar el estado inicial', () => { 
        const newState = todoReducer(initialState,{})
        expect(newState).toBe(initialState);

     })
     test('debe de agregar un todo', () => { 
        const action = {
            type:'[TODO] Add Todo',
            payload:{
                id:2,
                description:'Nuevo Todo #2',
                done:false
            }
        }
        const newState = todoReducer(initialState,action)
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload)
      })
      test('debe de eliminar un todo', () => { 
        const action = {
            type:'[TODO] Remove todo',
            payload:1
        }
        const newState = todoReducer(initialState,action)
        expect(newState.length).toBe(0);
      })
      test('debe de realizar el Toggle del todo', () => { 
        const action = {
            type:'[TODO] Toggle todo',
            payload:1
        }
        const newState = todoReducer(initialState,action)
        expect(newState[0].done).toBe(true);
      })
 })