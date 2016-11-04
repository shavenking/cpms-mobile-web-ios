import {PROJECTS_RECEIVED, REGISTER_USER_SUCCESS} from '../constant/actionType'

const projects = (state = [], action) => {
    switch (action.type) {
        case PROJECTS_RECEIVED:
            return action.projects
        default:
            return state
    }
}

const currentUser = (state = {
    id: '',
    authToken: ''
}, action) => {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return Object.assign({}, state, {
                id: action.id,
                authToken: action.authToken
            })
        default:
            return state
    }
}

export default { projects, currentUser }
