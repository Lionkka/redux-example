import { ADD_TODO, REMOVE_TODO, ADD_TODOS_BULK} from '../actions/todo'
let generatedId = 0
const initState = []
export default function todoApp(state = initState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, {
                    title: action.payload,
                    id: generatedId++
                }]
        }
        case ADD_TODOS_BULK: {
            return [...state, ...action.payload]
        }
        case REMOVE_TODO: {
            const index = state.findIndex(({id})=> id === action.payload)
            const newState = state.slice()
            newState.splice(index, 1)
            return newState
        }
        default: return state
    }
}
