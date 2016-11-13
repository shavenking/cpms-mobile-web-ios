import {
    PROJECTS_RECEIVED,
    PROJECT_CREATED,
    REGISTER_USER_SUCCESS,
    LOGIN_USER_SUCCESS,
    CONSTRUCTION_DAILY_LIST_RECEIVED,
    CONSTRUCTION_DAILY_CREATED
} from '../constant/actionType'

const projects = (state = [], action) => {
    switch (action.type) {
        case PROJECTS_RECEIVED:
            return action.projects
        case PROJECT_CREATED:
        default:
            return state
    }
}

const currentUser = (state = {
    authToken: ''
}, action) => {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
        case LOGIN_USER_SUCCESS:
            return Object.assign({}, state, {
                authToken: action.authToken
            })
        default:
            return state
    }
}

const constructionDailies = (state = [], action) => {
    switch (action.type) {
        case CONSTRUCTION_DAILY_LIST_RECEIVED:
            return action.constructionDailies
        case CONSTRUCTION_DAILY_CREATED:
        default:
            return state
    }
}

export default { projects, currentUser, constructionDailies }
