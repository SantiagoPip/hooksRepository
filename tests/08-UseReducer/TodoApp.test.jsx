import { render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-UseReducer/TodoItem"
import { useTodos } from "../../src/hooks/useTodos";
import { TodoApp } from "../../src/08-UseReducer/TodoApp";
jest.mock('../../src/hooks/useTodos')
describe('Pruebas en <TodoApp/>', () => { 

    useTodos.mockReturnValue({
        todosCount:1,
        pendingTodosCount:1,
        handleNewTodo:jest.fn(),
        handleDeleteTodo:jest.fn(),
        handleToggleTodo:jest.fn(),
        todos:[
            {id:1,description:'Todo #1',done:false},
            {id:1,description:'Todo #2',done:true}
        ]
    })

    test('Debe de mostrar el componente correctamente', () => { 
        render(<TodoApp/>);
        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
     })
 })