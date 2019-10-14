import React from 'react'
import './MainMenuCategories.css'
import Item from '../MainMenuCategoriesItem'

/**
 * @param {Object} props
 * @param {Array[Object]} props.categories
 * @param {Number[integer]} props.activeItem
 * @param {Function} props.setActiveItem
 */
const MainMenuCategories = props => (
  <section className="my-5">
    <div>
      {props.categories.map((cat, key) => (
        <Item
          active={cat.id === props.activeItem}
          setActiveItem={props.setActiveItem}
          id={cat.id}
          key={'cat-' + key}
          icon={cat.icon}
          name={cat.name} />
      ))}
    </div>
  </section>
)

export default MainMenuCategories
