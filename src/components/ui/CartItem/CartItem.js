import React from 'react'
import './CartItem.css'

const CartItem = props => (
  <article className="cart-item row">
    <div
      className="cart-item-image col-3 px-0 m-auto"
      style={{ backgroundImage: `url(/static/images/salmon-dish-food-meal-46239.jpeg)` }}>
    </div>
    <div className="cart-item-details col-6 m-auto pr-0">
      <div className="cart-item-details-quantity my-auto pr-2">1 x</div>
      <div className="cart-item-details-title my-auto">Beach BBQBurger</div>

    </div>
    <div className="cart-item-price col-3 px-0 text-right m-auto text-muted">
      $14.99
    </div>
  </article>
)

export default CartItem
