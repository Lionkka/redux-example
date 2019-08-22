import {connect} from 'react-redux'
import Form from './Form'
import { addTodo , getTodosFromServer } from '../../actions/todo'

const mapDispatchToProps = ({
        addTodo,
        getTodosFromServer
    })

export default connect(null, mapDispatchToProps)(Form)
