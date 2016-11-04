import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED
} from '../constant/actionType'

export const registerUser = ({email, password, passwordConfirmation}) => {
    return (
        (dispatch) => {
            // start spinner or something...

            setTimeout(() => {
                dispatch({
                    type: REGISTER_USER_SUCCESS,
                    authToken: 'token',
                    id: '1'
                    // should fetch user profile as well
                })
            }, 500)
        }
    )
}
