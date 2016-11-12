import {PROJECTS_RECEIVED} from '../constant/actionType'

export const getAllProjects = () => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch(`/api/projects`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                }
            }).then((rep) => {
                return rep.json()
            }).then((data) => {
                dispatch({
                    type: PROJECTS_RECEIVED,
                    projects: data.projects
                })
            })
        }
    )
}
