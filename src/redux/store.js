import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleWare from 'redux-promise-middleware'
import userReducer from './userReducer'
import productsReducer from './productsReducer'

const rootReducer = combineReducers({
  userReducer,
  productsReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleWare))