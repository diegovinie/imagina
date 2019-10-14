import React from 'react'
import './CartItem.css'

/**
 * @param {Object} props
 * @param {Object} props.product
 * @param {Number[integer]} props.quantity
 */
const CartItem = props => (
  <article className="cart-item row">
    <div
      className="cart-item-image col-3 px-0 m-auto"
      style={{ backgroundImage: `url(/static/images/salmon-dish-food-meal-46239.jpeg)` }}>
    </div>
    <div className="cart-item-details col-6 m-auto pr-0">
      <div className="cart-item-details-quantity my-auto pr-2"> {props.quantity} x</div>
      <div className="cart-item-details-title my-auto">{props.product && props.product.name}</div>

    </div>
    <div className="cart-item-price col-3 px-0 text-right m-auto text-muted">
      { props.product && props.product.price }
    </div>
    <div className="cart-item-buttons">
      <div className="cart-item-buttons-container">
        <i onClick={props.handlePlus} className="fa fa-plus text-light px-1" />
        <i onClick={props.handleMinus} className="fa fa-minus text-light px-1" />
      </div>
    </div>
  </article>
)

export default CartItem
