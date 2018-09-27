import { AUTH_ID_TOKEN } from '../../config/constants'

export const setUserToken = token => localStorage.setItem(AUTH_ID_TOKEN, token)

export const removeUserToken = () => localStorage.removeItem(AUTH_ID_TOKEN)

export const getUserToken = () => localStorage.getItem(AUTH_ID_TOKEN)
