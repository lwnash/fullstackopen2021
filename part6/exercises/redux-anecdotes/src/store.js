import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer';
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  anecdote: anecdoteReducer,
  notification: notificationReducer,
  filterField: filterReducer
})

const store = createStore(reducer, composeWithDevTools())

export default store
