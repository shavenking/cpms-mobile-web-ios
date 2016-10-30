import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import App from './container/App'
import ProjectHome from './container/ProjectHome'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ProjectsContainer from './container/ProjectsContainer'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const middleware = [thunk];

const store = createStore(
    combineReducers(Object.assign({}, reducer, {
        routing: routerReducer
    })),
    applyMiddleware(...middleware)
)

const history = syncHistoryWithStore(hashHistory, store)

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={ProjectsContainer} />
                <Route path="projects/:projectId" component={ProjectHome} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
