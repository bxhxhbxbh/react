import { createStore, combineReducers } from 'redux'

import cartReduce from './reduce/cartReduce'
import noticeReduce from './reduce/noticeReduce'

const rootReduce = combineReducers({
    cartReduce,
    noticeReduce
})

export default createStore(rootReduce)