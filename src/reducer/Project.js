import {
    PROJECTS_RECEIVED,
    PROJECT_CREATED,
} from 'constant/ActionType'

export const projects = (state = [], action) => {
    switch (action.type) {
        case PROJECTS_RECEIVED:
            return action.projects
        case PROJECT_CREATED:
        default:
            return state
    }
}
