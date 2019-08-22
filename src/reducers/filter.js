import { SET_VISIBILITY_FILTER, VisibilityFilters} from '../actions/filter'
let generatedId = 0
const initialState = {
    filter: ''
}
export default function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return {filter: action.payload}
        default:
            return state
    }
}
