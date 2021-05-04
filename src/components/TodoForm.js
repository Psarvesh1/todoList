import React from 'react'

const TodoForm = ({inputText, setInputText, todos, setTodos}) => {
    const handleChange = (event) => {
        setInputText(event.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                id: Math.random() * 1000,
                name: inputText,
                completed: false
            }
        ])
        setInputText('')
    }
    return (
        <div>
            <form>
            <input type ="text" value = {inputText} onChange = {handleChange} placeholder = "enter your task"/>
            <button onClick = {handleClick}>Add</button>
            </form>
        </div>
    )
}

export default TodoForm
