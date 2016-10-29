import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import App from './container/App'
import ProjectHome from './container/ProjectHome'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ProjectsContainer from './container/ProjectsContainer'

const middleware = [thunk];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ProjectsContainer} />
                <Route path="projects/:projectId" component={ProjectHome} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
