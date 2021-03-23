// 4 Parts of the reducer file: inital state, actions types, action creators, reducer functions

//INITIAL STATE
const initialState = {
  username: '',
  isLoggedIn: false
}

//ACTION TYPES
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

//ACTION CREATORS
export function loginUser(usernameStr) {
  return {
    type: LOGIN_USER,
    payload: usernameStr
  }
}
export function logoutUser() {
  return {
  type: LOGOUT_USER
  }
}
// REDUCER
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOGIN_USER:
      return {
        ...state,
        username: action.payload,
        isLoggedIn: true
      }
    case LOGOUT_USER:
      return initialState
    default: return state
  }

}