export const createDailyMaterial = (projectId, constructionDailyId, formData) => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch(`/api/projects/${projectId}/construction-dailies/${constructionDailyId}/materials`, {
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

export const getDailyMaterialList = (projectId, constructionDailyId) => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch(`/api/projects/${projectId}/construction-dailies/${constructionDailyId}/materials`, {
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
