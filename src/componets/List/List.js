import React from 'react'

export default function List (props) {
    console.log('props', props)
    return <ul>
        {props.todos.map(({title, id})=> <li key={id}>{title}</li>)}
    </ul>
}
