import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-UseReducer/TodoItem"

describe('Pruebas en el <TodoItem/>', () => { 
    const todoItem = {
        id:1,
        description:'Piedra del alma',
        done:false
    }
    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()
    beforeEach(()=>jest.clearAllMocks())
    test('debe de mostrar el Todo Pendiente de completar', () => { 
        render(<TodoItem
             todoItem = {todoItem}
             onToggleTodo={onToggleTodoMock}
             onDeleteTodo={onDeleteTodoMock}/>)
        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
     })
     test('debe de mostrar el Todo completad', () => { 
        todoItem.done = true
        render(<TodoItem
             todoItem = {todoItem}
             onToggleTodo={onToggleTodoMock}
             onDeleteTodo={onDeleteTodoMock}/>)
    
        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
     })
     test('debe de llamar el ToggleTodo cuando se hace click', () => { 
        render(<TodoItem
             todoItem = {todoItem}
             onToggleTodo={onToggleTodoMock}
             onDeleteTodo={onDeleteTodoMock}/>)
    
        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todoItem.id)
     })
     test('debe de llamar el delete todo', () => { 
        render(<TodoItem
             todoItem = {todoItem}
             onToggleTodo={onToggleTodoMock}
             onDeleteTodo={onDeleteTodoMock}/>)
    
        const deleteBottom = screen.getByRole('button')
        fireEvent.click(deleteBottom);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todoItem.id)
     })
 })