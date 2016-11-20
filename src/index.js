import {render} from 'react-dom'
import {store, history, getRoute} from 'config'

const requireAuth = (nextState, replace, callback) => {
    const {currentUser: {authToken}} = store.getState()

    if (!authToken) {
        replace('/login')
    }

    callback()
}

render(
    getRoute({store, history, requireAuth}),
    document.getElementById('root')
)
