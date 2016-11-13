import { CONSTRUCTION_DAILY_LIST_RECEIVED } from '../constant/actionType'
import formSerialize from 'form-serialize'

export const getConstructionDailyList = (projectId) => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch(`/api/projects/${projectId}/construction-dailies`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                }
            }).then((rep) => {
                return rep.json()
            }).then((data) => {
                dispatch({
                    type: CONSTRUCTION_DAILY_LIST_RECEIVED,
                    constructionDailies: data.constructionDailies
                })
            })
        }
    )
}
