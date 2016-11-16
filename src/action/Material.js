export const createMaterial = (formData) => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch('/api/materials', {
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

export const getMaterialList = () => {
    return (
        (dispatch, getState) => {
            const {authToken} = getState().currentUser

            return window.fetch('/api/materials', {
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

