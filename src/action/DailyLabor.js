export const createDailyLabor = (projectId, constructionDailyId, formData) => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch(`/api/projects/${projectId}/construction-dailies/${constructionDailyId}/labors`, {
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

export const getDailyLaborList = (projectId, constructionDailyId) => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch(`/api/projects/${projectId}/construction-dailies/${constructionDailyId}/labors`, {
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
