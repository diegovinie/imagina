import React, {useMemo} from 'react'
import './Cart.css'
import CartItem from '../CartItem'
import PlusMinusButton from '../PlusMinusButton'
import MIcon from '../MIcon'
import {useStateValue} from '../../../store/StateContext'

const reduceTotal = (acc, item) => acc + (item.product && item.product.price) * item.quantity

const formatCurrency = value => value.toLocaleString('es-ES', {minimumFractionDigits: 2})

const Cart = props => {
  const [{products, cart}, dispatch] = useStateValue()

  const handlePlus = productId => () => dispatch({ type: 'addProductToCart', productId })

  const handleMinus = productId => () => dispatch({ type: 'removeProductFromCart', productId })

  const expandedItems = useMemo(() => cart.map(p => ({
      ...p,
      product: products.find(({id}) => id === p.productId) })
    ), [cart, products])

  const total = useMemo(() => expandedItems.reduce(reduceTotal, 0), [expandedItems])

  return (
    <section className="cart">
      <h2 className="h5 font-weight-bold py-4">
        My <img src="/static/images/emoji.png" alt="emoji" className="mx-1 mb-1" style={{width: '1rem'}}></img>
        <br/> Order
      </h2>
      {(expandedItems.length > 0) && (
          <div className="cart-board jumbotron bg-info row py-3 px-3">
            <div className="text-white w-100 py-2">
              <span>625 St Marks Ave</span>
              <span className="text-secondary float-right">Edit</span>

            </div>
            <div className="text-white w-100 py-2">
              <span>35 min</span>
              <span className="text-secondary float-right">Choose time</span>
            </div>
          </div>
        )}


      <div className={`cart-products ${expandedItems.length > 0 ? 'expand' : ''}`}>
        {expandedItems
          .map((i, index) => (
            <CartItem
              key={index}
              handlePlus={handlePlus(i.productId)}
              handleMinus={handleMinus(i.productId)}
              product={i.product}
              quantity={i.quantity} />
          ))}
      </div>
      <div  className="row">
        <span className="flex-grow-1">Total:</span>
        <span className="font-weight-bold">${formatCurrency(total)}</span>
      </div>
      <hr/>
      <div className="cart-persons row my-4">
        <div className="col-6 pl-0 my-auto">
          Persons:
          <PlusMinusButton />
        </div>
        <div className="cart-checkout col-6 px-0 my-auto">
          <button className="cart-checkout-button btn btn-secondary btn-block btn-lg font-weight-bold px-0 py-3">
            Checkout
            <MIcon icon="arrow-right" scale="0.8" class="ml-2" />
          </button>
        </div>
      </div>
    </section>

  )
}

export default Cart
