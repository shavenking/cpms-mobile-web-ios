import { combineReducers } from 'redux'
import {PROJECTS_RECEIVED} from '../constant/actionType'

const projects = (state = [], action) => {
    switch (action.type) {
        case PROJECTS_RECEIVED:
            return action.projects
        default:
            return state
    }
}

export default combineReducers({
    projects
})
