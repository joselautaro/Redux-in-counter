import React, { useState } from 'react'

export const TodoList = () => {

    const [todos, setTodos] = useState([])

    const [todo, setTodo] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()

        // Ahora hacemos el formato de nuestra tarea

        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            completed: false,
        }
        // Concatenamos en el estado setTodos, todos los todos con la funcion spread operator
        setTodos([...todos, newTodo])
        setTodo("")
    }

    const deleteTodo = (id) =>{
        const updatedTodos = todos.filter ((todo) => todo.id !== id)
        setTodos(updatedTodos)
    }

   

  return (
    <div className='div-container'>
        <h2>Nuestras  tareas</h2>
        <h3>Ingrese tares aquí</h3>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='Ingrese tarea aquí'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type='submit'>➕</button>
        </form>
        {
            todos.map((todo) =>(
                <div key={todo.id}>
                    {todo.text}{""}
                    
                    <button onClick={() => deleteTodo(todo.id)}>❌</button>
                </div>
            ))
        }

    </div>
  )
}
