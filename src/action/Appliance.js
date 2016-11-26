export const createAppliance = (formData) => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch('/api/appliances', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify(formData)
            }).then(rep => rep.json())
        }
    )
}

export const getApplianceList = () => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch('/api/appliances', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                }
            }).then((rep) => {
                return rep.json()
            })
        }
    )
}

