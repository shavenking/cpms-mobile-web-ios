import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import reducer from 'reducer'

const middleware = [thunk];

export const store = createStore(
    combineReducers(Object.assign({}, reducer, {
        routing: routerReducer
    })),
    applyMiddleware(...middleware)
)

export const history = syncHistoryWithStore(hashHistory, store)

export getRoute from './route'
