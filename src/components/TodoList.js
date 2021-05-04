import React from 'react'
import Todo from './Todo'
const TodoList = ({ todos, setTodos }) => {
    console.log(todos)
    return (
        <div>
            {todos.map((todo) => (
                <Todo name={todo.name} key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
            )
            )}
        </div>
    )
}

export default TodoList


