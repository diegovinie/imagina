import React from 'react'
import './MainMenuCategories.css'
import Item from '../MainMenuCategoriesItem'
import {useStateValue} from '../../../store/StateContext'

const MainMenuCategories = props => {
  const [{categories}, ] = useStateValue()

  return (
    <section className="my-5">
      <div>
        {categories.map((cat, key) => (
          <Item
            id={cat.id}
            key={'cat-' + key}
            icon={cat.icon}
            name={cat.name} />
        ))}
      </div>
    </section>
  )
}

export default MainMenuCategories
