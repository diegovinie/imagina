import React from 'react'
import cx from 'classnames'
import './MainMenuItem.css'
import MIcon from '../MIcon'

const MainMenuItem = props => {

  const containerClasses = cx([
    'main-menu-item-container',
    props.active ? 'bg-secondary' : 'bg-white'
  ])

  const buttonClasses = cx({
    'main-menu-item-button': true,
    'bg-white': true,
    'd-flex': true,
    'border-0': props.active
  })

  return (
    <div className="main-menu-item">
      <div className={containerClasses}>
        <div className={buttonClasses} >
          <MIcon icon={props.icon} scale="1.5" />
        </div>
        <div className="mx-auto text-center pt-1">
          <small className="font-weight-bold">{ props.label }</small>

        </div>
      </div>
    </div>
  )
}



export default MainMenuItem
