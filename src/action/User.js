import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    LOGIN_USER_SUCCESS
} from '../constant/actionType'

export const registerUser = ({name, email, password, passwordConfirmation}) => {
    return (
        (dispatch) => {
            return window.fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    password_confirmation: passwordConfirmation
                })
            }).then((rep) => {
                return rep.json()
            }).then((data) => {
                dispatch({
                    type: REGISTER_USER_SUCCESS,
                    authToken: data.token
                })
            })
        }
    )
}

export const loginUser = ({email, password}) => {
    return (
        (dispatch) => {
            return window.fetch(`/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then((rep) => {
                return rep.json()
            }).then((data) => {
                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    authToken: data.token
                })
            })
        }
    )
}
