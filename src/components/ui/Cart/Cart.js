import React from 'react'
import './Cart.css'
import CartItem from '../CartItem'

const Cart = props => (
  <section className="cart">
    <h2 className="h5 font-weight-bold py-4">
      My <img src="/static/images/emoji.png" className="mx-1 mb-1" style={{width: '1rem'}}></img>
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
    </div>
    <div  className="row">
      <span className="flex-grow-1">Total:</span>
      <span className="font-weight-bold">$25.97</span>
    </div>
    <div style={{ width: '4.5rem' }} className="input-group input-group-sm mb-3">
      <div className="input-group-prepend">
        <button style={{ width: '1.5rem' }} className="btn btn-outline-secondary m-auto px-0" type="button" id="button-addon1">-</button>
      </div>
      <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
      <div className="input-group-append">
        <button style={{ width: '1.5rem' }} className="btn btn-outline-secondary m-auto px-0" type="button" id="button-addon1">+</button>
      </div>
    </div>
  </section>

)

export default Cart
