import React, {useState} from 'react'

function Form ({addTodo, getTodosFromServer}) {
    const [todo, setTodo] = useState('')
    return <div>
        <input onChange={(e)=> setTodo(e.target.value)} value={todo}/>
        <button onClick={()=> addTodo(todo)}>Add todo</button>
        <button onClick={()=> getTodosFromServer()}>Add todos from server</button>
    </div>
}

export default Form
