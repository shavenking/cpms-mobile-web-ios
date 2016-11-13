export const getWorkList = () => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch(`/api/works`, {
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

export const createWork = (formData) => {
    return (
        (dispatch, getState) => {
            const { authToken } = getState().currentUser

            return window.fetch(`/api/works`, {
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
