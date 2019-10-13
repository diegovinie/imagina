import React from 'react'
import './MainMenuItem.css'
import MIcon from '../MIcon'

const MainMenuItem = props => (
  <div className="main-menu-item">
    <div className="main-menu-item-container bg-white">
      <div className="main-menu-item-button d-flex" >
        <MIcon icon="all" scale="2" />
      </div>
      <div className="mx-auto text-center pt-1">
        <small>All</small>

      </div>
    </div>
  </div>
)

export default MainMenuItem
