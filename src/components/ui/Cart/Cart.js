import React, {useMemo} from 'react'
import './Cart.css'
import CartItem from '../CartItem'
import PlusMinusButton from '../PlusMinusButton'
import {useStateValue} from '../../../store/StateContext'

const Cart = props => {
  const [{products, cart}, dispatch] = useStateValue()

  const expandedItems = useMemo(() => cart.map(p => ({
      ...p,
      product: products.find(({id}) => id === p.productId) })
    ), [cart, products])

  const handlePlus = productId => () => dispatch({ type: 'addProductToCart', productId })

  const handleMinus = productId => () => dispatch({ type: 'removeProductFromCart', productId })

  return (
    <section className="cart">
      <h2 className="h5 font-weight-bold py-4">
        My <img src="/static/images/emoji.png" alt="emoji" className="mx-1 mb-1" style={{width: '1rem'}}></img>
        <br/> Order
      </h2>
      <div className="jumbotron bg-info row pt-5 pb-3">
        <div className="col-8 offset-4">

        </div>
      </div>
      <div>
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
        <span className="font-weight-bold">$25.97</span>
      </div>
      <div className="row my-4">
        <div className="col-6 pl-0 my-auto">
          Persons:
          <PlusMinusButton />
        </div>
        <div className="col-6 px-0 my-auto">
          <button className="btn btn-secondary btn-block btn-lg">
            Checkout
          </button>
        </div>
      </div>
    </section>

  )
}



export default Cart
