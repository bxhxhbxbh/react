import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from "redux-logger"
import thunk from "redux-thunk"

import cartReduce from './reduce/cartReduce'
import noticeReduce from './reduce/noticeReduce'

const rootReduce = combineReducers({
    cartReduce,
    noticeReduce
})

export default createStore(rootReduce, applyMiddleware(logger, thunk))