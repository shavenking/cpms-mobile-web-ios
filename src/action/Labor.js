export const createLabor = (formData) => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch('/api/labors', {
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

export const getLaborList = () => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch('/api/labors', {
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

