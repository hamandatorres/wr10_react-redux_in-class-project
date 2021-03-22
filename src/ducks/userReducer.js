//* 4 parts to a reducer: initialState, action constants, action creators, reducer

//* INITIAL STATE
const initialState = {
    username: '',
    isLoggedIn: false,
  }
  
  //* ACTION CONSTANTS
  const LOGIN_USER = 'LOGIN_USER'
  const LOGOUT = 'LOGOUT'
  
  //* ACTION CREATORS
  // All action creators will return an object with type and payload properties
  export function loginUser(username) {
    return {
      type: LOGIN_USER,
      payload: username,
    }
  }
  
  export function logout() {
    return {
      type: LOGOUT,
    }
  }
  
  //* REDUCER FUNCTION
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_USER:
        return { ...state, username: action.payload, isLoggedIn: true }
      case LOGOUT:
        return initialState
      default:
        return state
    }
  }
  