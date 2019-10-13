import React from 'react'
import './Cart.css'
import CartItem from '../CartItem'
import PlusMinusButton from '../PlusMinusButton'

const Cart = props => (
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
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
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

export default Cart
