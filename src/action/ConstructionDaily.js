import {CONSTRUCTION_DAILY_LIST_RECEIVED, CONSTRUCTION_DAILY_CREATED} from 'constant/ActionType'
import formSerialize from 'form-serialize'

export const getWorksByConstructionDaily = (projectId, constructionDailyId) => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch(`/api/projects/${projectId}/construction-dailies/${constructionDailyId}/works`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                }
            }).then(rep => rep.json()).then(data => {
                return data
            })
        }
    )
}

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

export const createConstructionDaily = (projectId, form) => {
    const formData = Object.assign({}, formSerialize(form, { hash: true }), {
        // defaults
        'weather_morning': '',
        'weather_afternoon': '',
        'rule_4': false,
        'safety_note': '',
        'validate_note': '',
        'subcontractor_note': '',
        'important_note': ''
    })

    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch(`/api/projects/${projectId}/construction-dailies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify(formData)
            }).then((rep) => {
                return rep.json()
            }).then(data => {
                dispatch({
                    type: CONSTRUCTION_DAILY_CREATED,
                    constructionDaily: data.constructionDaily
                })

                return data
            })
        }
    )
}

export const createConstructionDailyWork = (projectId, constructionDailyId, formData) => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch(`/api/projects/${projectId}/construction-dailies/${constructionDailyId}/works`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify(formData)
            }).then((rep) => {
                return rep.json()
            })
        }
    )
}
