import {PROJECTS_RECEIVED} from '../constant/actionType'

export const getAllProjects = () => {
    return (
        (dispatch) => {
            setTimeout(() => {
                dispatch({
                    type: PROJECTS_RECEIVED,
                    projects: [
                        {id: '1', name: 'A'},
                        {id: '2', name: 'B'},
                    ]
                })
            }, 500)
        }
    )
}
