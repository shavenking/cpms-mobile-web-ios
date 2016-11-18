import {
    REGISTER_USER_SUCCESS,
    LOGIN_USER_SUCCESS,
} from 'constant/ActionType'

export const currentUser = (state = {
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
