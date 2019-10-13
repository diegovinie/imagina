import React, {useEffect, useState} from 'react'
import './MainMenuCategories.css'
import Item from '../MainMenuCategoriesItem'
import {getCategories} from '../../../services/api'

const MainMenuCategories = props => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

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
