import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import { todosReducer } from './todos-reducer'
import { uiReducer } from './ui-reducer';

const reducer = combineReducers({
	todos: todosReducer,
	ui: uiReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
