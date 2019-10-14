import React from 'react'
import cx from 'classnames'
import './MainMenuCategoriesItem.css'
import MIcon from '../MIcon'

/**
* @param {Object} props
* @param {Number[integer]} props.id
* @param {Boolean} props.active
* @param {String} props.name
* @param {String} props.src
* @param {String} props.icon
 */
const MainMenuCategoriesItem = props => {

  const containerClasses = cx([
    'main-menu-categories-item-container',
    props.active ? 'bg-secondary' : 'bg-white'
  ])

  const buttonClasses = cx({
    'main-menu-categories-item-button': true,
    'bg-white': true,
    'd-flex': true,
    'border-0': props.active
  })

  return (
    <section className="main-menu-categories-item">
      <div className={containerClasses}>
        <div className={buttonClasses} >
          <MIcon src={props.icon} scale="1.5" />
        </div>
        <div className="mx-auto text-center pt-1">
          <small className="font-weight-bold">{ props.name }</small>

        </div>
      </div>
    </section>
  )
}



export default MainMenuCategoriesItem
