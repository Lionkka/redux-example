// Actions
export const ADD_TODO = 'ADD_TODO'
export const ADD_TODOS_BULK = 'ADD_TODOS_BULK'
export const REMOVE_TODO = 'REMOVE_TODO'


export const addTodo = (text) => dispatch => {
    console.log(text, dispatch)
    dispatch({
        type: ADD_TODO,
        payload: text
    })
}

export const getTodosFromServer = () => async dispatch => {
    dispatch({
        type: 'setLoader',
        payload: true
    })
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=> res.json())
    dispatch({
        type: ADD_TODOS_BULK,
        payload: todos
    })
    dispatch({
        type: 'setLoader',
        payload: false
    })
}
