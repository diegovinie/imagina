import React from 'react'
import './DishCard.css'

const DishCard = props => (
  <div className="dish-card p-3">
    <div
        className="dish-card-image"
        style={{ backgroundImage: `url(/static/images/salmon-dish-food-meal-46239.jpeg)` }}>
      <div className="dish-card-image-time bg-light px-3">25 -30 min</div>
    </div>
    <div className="dish-card-title font-weight-bold pt-3 pb-2">
      Bagel Story
    </div>
    <div className="dish-card-details">
      <span className="">4.7</span>
      <span className="px-3 text-muted">Deli Bagels</span>
    </div>
  </div>
)

export default DishCard
