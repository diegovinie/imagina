export const initialState = {
  categories: [],
  products: []
}

export const reducer = (state, action) => {
  // console.log(state, action)
  switch (action.type) {
    case 'setProducts':
      return {
        ...state,
        dishes: action.products
      }

    case 'setCategories':
      return {
        ...state,
        posts: action.categories
      }

    default:
      return state
  }
}
