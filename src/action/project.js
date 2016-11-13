import {PROJECTS_RECEIVED, PROJECT_CREATED} from '../constant/actionType'
import formSerialize from 'form-serialize'

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

export const createProject = (form) => {
    return (
        (dispatch, getState) => {
            const { authToken } = getState().currentUser

            return window.fetch(`/api/projects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify(formSerialize(form, { hash: true }))
            }).then(rep => rep.json()).then(project => {
                dispatch({
                    type: PROJECT_CREATED,
                    project
                })

                return project
            })
        }
    )
}
