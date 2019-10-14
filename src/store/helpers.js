export const addOrIncrement = items => productId => {
  const product = items.find(p => productId === p.productId)
  console.log(productId, items, product)
  if (product) {
    product.quantity++
    return [...items]
  } else {
    return [ ...items, {productId, quantity: 1} ]
  }
}

export const removeOrDecrement = items => productId => {
  const product = items.find(p => productId === p.productId)

  if (product.quantity > 1) {
    product.quantity--
    return [...items]
  } else {
    return items.filter(p => p.productId !== productId)
  }
}
