import React from 'react'
import './MainMenuProductCard.css'

/**
 * @param {Object} props
 * @param {Number[integer]} props.id
 * @param {String} props.name
 * @param {Number[float]} props.qualification
 * @param {String} props.time
 * @param {Number[float]} props.price
 * @param {String} props.image
 * @param {Function} props.handleClick
 */
const MainMenuProductCard = props => (
  <article onClick={props.handleClick} className="main-menu-product-card p-3">
    <div
        className="main-menu-product-card-image"
        style={{ backgroundImage: `url(${props.image})` }}>
      <div className="main-menu-product-card-image-time bg-light px-3">
        { props.time }
      </div>
    </div>
    <div className="main-menu-product-card-title font-weight-bold pt-3 pb-2">
      { props.name }
    </div>
    <div className="main-menu-product-card-details">
      <span className="">
        <i className="fa fa-star-o mr-1" />
        { props.qualification }
      </span>
      <span className="px-3 text-muted">${ props.price }</span>
    </div>
  </article>
)

export default MainMenuProductCard
