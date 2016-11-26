export const createDailyAppliance = (projectId, constructionDailyId, formData) => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch(`/api/projects/${projectId}/construction-dailies/${constructionDailyId}/appliances`, {
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

export const getDailyApplianceList = (projectId, constructionDailyId) => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch(`/api/projects/${projectId}/construction-dailies/${constructionDailyId}/appliances`, {
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
