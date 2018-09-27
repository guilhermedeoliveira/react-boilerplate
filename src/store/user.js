import Api from '../config/api'

export const Types = {
  GET_USER: 'user/GET_USER',
  GET_USER_SUCCESS: 'user/GET_USER_SUCCESS',
  GET_USER_FAILURE: 'user/GET_USER_FAILURE'
}

const initialState = {
  loadingUser: false,
  userData: {},
  errorUser: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER:
      return Object.assign({}, state, {
        loadingUser: true,
        errorUser: ''
      })
    case Types.GET_USER_SUCCESS:
      return Object.assign({}, state, {
        loadingUser: false,
        userData: action.payload,
        errorUser: ''
      })
    case Types.GET_USER_FAILURE:
      return Object.assign({}, state, {
        loadingUser: false,
        errorUser: action.payload
      })

    default:
      return state
  }
}

export const getUserById = userId => async (dispatch) => {
  try {
    dispatch({ type: Types.GET_USER })

    const user = await Api.getUserById(userId)
    dispatch({ type: Types.GET_USER_SUCCESS, payload: user })
  } catch (err) {
    dispatch({ type: Types.GET_USER_FAILURE, payload: err.response.data })
  }
}
