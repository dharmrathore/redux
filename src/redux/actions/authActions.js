

export const loginSuccess = (userDate) =>({
    type: 'LOGIN_SUCCESS',
    payload: userDate
})

export const logout = () => ({
    type: 'LOGOUT'
})