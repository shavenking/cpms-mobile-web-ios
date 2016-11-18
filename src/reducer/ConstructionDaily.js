import {
    CONSTRUCTION_DAILY_LIST_RECEIVED,
    CONSTRUCTION_DAILY_CREATED
} from 'constant/ActionType'

export const constructionDailies = (state = [], action) => {
    switch (action.type) {
        case CONSTRUCTION_DAILY_LIST_RECEIVED:
            return action.constructionDailies
        case CONSTRUCTION_DAILY_CREATED:
        default:
            return state
    }
}
