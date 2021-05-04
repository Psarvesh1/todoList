import React, {useState} from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <div>
      <TodoForm inputText = {inputText} setInputText = {setInputText} todos = {todos} setTodos = {setTodos}/>
      <TodoList todos = {todos} setTodos = {setTodos}/>
    </div>
  )
}

export default App
