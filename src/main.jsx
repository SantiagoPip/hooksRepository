import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterApp } from './01-UseState/CounterApp'
import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook'
import { SimpleForm } from './02-UseEffect/SimpleForm'
import { FormWithCustomHook } from './02-UseEffect/FormWithCustomHook'
import { MultiplesCustomHooks } from './03-Examples/MultiplesCustomHooks'
import { FocusScreen } from './04-UseRef/FocusScreen'
import { Layout } from './05-UseLayoutEffect/Layout'
import { Memorize } from './06-Memos/Memorize'
import { MemoHook } from './06-Memos/MemoHook'
import { CallBackHook } from './06-Memos/CallBackHook'
import { Padre } from './07-Tarea/Padre'
import './08-UseReducer/intro-reducer'
import { TodoApp } from './08-UseReducer/TodoApp'
import { MainApp } from './09-UseContext/MainApp'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
  </BrowserRouter>
)
