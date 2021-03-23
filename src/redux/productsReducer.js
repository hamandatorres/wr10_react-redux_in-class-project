import axios from "axios"

const initialState = {
  products: [],
  isLoading: true
}

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'

export function getAllProducts() {
  return {
    type: GET_ALL_PRODUCTS,
    payload: axios.get('/api/products')
  }
}
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_ALL_PRODUCTS + '_FULFILLED': 
      return {
        ...state,
        products: action.payload.data,
        isLoading: false
      }
      case GET_ALL_PRODUCTS + '_PENDING':
        return {
          ...state,
          isLoading: true
        }
    default: return state
  }
}