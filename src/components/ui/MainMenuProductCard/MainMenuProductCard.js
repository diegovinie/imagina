import React from 'react'
import './MainMenuProductCard.css'

const MainMenuProductCard = props => (
  <div className="main-menu-product-card p-3">
    <div
        className="main-menu-product-card-image"
        style={{ backgroundImage: `url(/static/images/salmon-dish-food-meal-46239.jpeg)` }}>
      <div className="main-menu-product-card-image-time bg-light px-3">25 -30 min</div>
    </div>
    <div className="main-menu-product-card-title font-weight-bold pt-3 pb-2">
      Bagel Story
    </div>
    <div className="main-menu-product-card-details">
      <span className="">4.7</span>
      <span className="px-3 text-muted">Deli Bagels</span>
    </div>
  </div>
)

export default MainMenuProductCard
