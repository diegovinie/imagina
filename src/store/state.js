import {addOrIncrement, removeOrDecrement} from './helpers'

export const initialState = {
  categories: [],
  products: [],
  cart: [],
  search: '',
  order: {
    amount: 0,
    fee: 0,
    total: 0
  }
}

export const reducer = (state, action) => {
  // console.log(state, action)
  switch (action.type) {
    case 'setProducts':
      return {
        ...state,
        products: action.products
      }

    case 'setCategories':
      return {
        ...state,
        categories: action.categories
      }

    case 'setSearch':
      return {
        ...state,
        search: action.search
      }

    case 'addProductToCart':
      return { ...state, cart: addOrIncrement(state.cart)(action.productId) }

    case 'removeProductFromCart':
      return { ...state, cart: removeOrDecrement(state.cart)(action.productId) }

    default:
      return state
  }
}
