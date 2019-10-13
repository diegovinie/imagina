export const getProducts = () => fetch('/db/products.json')
  .then(res => res.json())

export const getCategories = () => fetch('/db/categories.json')
  .then(res => res.json())
