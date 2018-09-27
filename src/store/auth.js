import Api from '../config/api'
import { getUserById } from './user'
import { setUserToken, removeUserToken } from '../utils/helpers/login'

export const Types = {
  LOGIN_USERNAME: 'auth/LOGIN_USERNAME',
  LOGIN_USERNAME_SUCCESS: 'auth/LOGIN_USERNAME_SUCCESS',
  LOGIN_USERNAME_FAILURE: 'auth/LOGIN_USERNAME_FAILURE',

  LOGIN_PASSWORD: 'auth/LOGIN_PASSWORD',
  LOGIN_PASSWORD_SUCCESS: 'auth/LOGIN_PASSWORD_SUCCESS',
  LOGIN_PASSWORD_FAILURE: 'auth/LOGIN_PASSWORD_FAILURE',

  LOGOUT: 'auth/LOGOUT'
}

const initialState = {
  isAuthenticated: false,
  loginSuccess: false,
  username: '',
  loading: false,
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_USERNAME:
      return Object.assign({}, state, {
        isAuthenticated: false,
        loginSuccess: false,
        loading: true,
        error: ''
      })
    case Types.LOGIN_USERNAME_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false,
        loginSuccess: action.payload && action.payload.success,
        username: action.payload && action.payload.username,
        loading: false,
        error: ''
      })
    case Types.LOGIN_USERNAME_FAILURE:
      return Object.assign({}, state, {
        isAuthenticated: false,
        loginSuccess: false,
        loading: false,
        error: action.payload.error
      })

    case Types.LOGIN_PASSWORD:
      return Object.assign({}, state, {
        isAuthenticated: false,
        loading: true,
        error: ''
      })
    case Types.LOGIN_PASSWORD_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        loading: false,
        error: ''
      })
    case Types.LOGIN_PASSWORD_FAILURE:
      return Object.assign({}, state, {
        isAuthenticated: false,
        loading: false,
        error: action.payload.error
      })

    case Types.LOGOUT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        loading: false,
        username: '',
        error: ''
      })
    default:
      return state
  }
}

export const loginUsername = username => async (dispatch) => {
  try {
    dispatch({ type: Types.LOGIN_USERNAME })

    const { data } = await Api.login(username)

    dispatch({ type: Types.LOGIN_USERNAME_SUCCESS, payload: data })
  } catch (err) {
    dispatch({ type: Types.LOGIN_USERNAME_FAILURE, payload: err.response.data })
  }
}

export const loginPassword = (password, navigationCallback = () => {}) => async (dispatch) => {
  try {
    dispatch({ type: Types.LOGIN_PASSWORD })

    const { data } = await Api.login(password)
    setUserToken(data.token)

    dispatch({ type: Types.LOGIN_PASSWORD_SUCCESS, payload: data.user })
    dispatch(getUserById(data.user._id))

    navigationCallback()
  } catch (err) {
    dispatch({ type: Types.LOGIN_PASSWORD_FAILURE, payload: err.response.data })
  }
}

export const logout = navigationCallback => (dispatch) => {
  removeUserToken()
  dispatch({ type: Types.LOGOUT })
  navigationCallback()
}
