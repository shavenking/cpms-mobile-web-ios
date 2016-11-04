import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import App from './container/App'
import ProjectHome from './container/ProjectHome'
import { Router, Route, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import ProjectsContainer from './container/ProjectsContainer'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import RegisterPageContainer from './container/RegisterPageContainer'
import LoginPageContainer from './container/LoginPageContainer'

const middleware = [thunk];

const store = createStore(
    combineReducers(Object.assign({}, reducer, {
        routing: routerReducer
    })),
    applyMiddleware(...middleware)
)

const history = syncHistoryWithStore(hashHistory, store)

const UserAuthenticated = (nextState, replace, callback) => {
    const state = store.getState()

    if (!state.currentUser || !state.currentUser.authToken) {
        replace('/register')
    }

    callback()
}

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRedirect to="projects" />
                <Route path="projects" onEnter={UserAuthenticated}>
                    <IndexRoute component={ProjectsContainer} />
                    <Route path=":projectId" component={ProjectHome} />
                </Route>
                <Route path="register" component={RegisterPageContainer} />
                <Route path="login" component={LoginPageContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
