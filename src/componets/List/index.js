import {connect} from 'react-redux'
import List from './List'

const mapStateToProps = ({todos}) => ({
        todos
    })

export default connect(mapStateToProps)(List)
