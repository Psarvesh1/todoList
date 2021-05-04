import React from 'react'

const Todo = ({name, todos, setTodos, todo}) => {

    const handleCheck = () => {
        setTodos(todos.map(el => {
            if(el.id === todo.id){
                return{
                    ...el, completed: !todo.completed
                }
            }
            return el
        }))
    }

    const handleDelete = () => {
        console.log(todo)
        setTodos(todos.filter(el => el.id !== todo.id ))
    }

    return (
        <div>
            <h3 className = {todo.completed ? 'strike' : ''}>{name}</h3>
            <button onClick = {handleCheck}>Check</button>
            <button onClick = {handleDelete}>Delete</button>
        </div>
    )
}

export default Todo
