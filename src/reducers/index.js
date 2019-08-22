import {combineReducers} from 'redux'
import { connectRouter } from 'connected-react-router'
import todos from './todos'
import filter from './filter'

export default (history)=> combineReducers(
    {
        router: connectRouter(history),
        todos,
        filter
    }
)
