import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import authReducer from './auth'
import userReducer from './user'

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer
})

const middlewares = [thunk, logger]

/**
 * TODO: Do not log redux actions if it is in produciton
 *
 * if (ENV !== 'production') {
 *  middlewares.push(logger);
  }
*/

export default createStore(reducers, applyMiddleware(...middlewares))
