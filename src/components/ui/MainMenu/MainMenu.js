import React, {useState} from 'react'
import './MainMenu.css'
import MainMenuProductCard from '../MainMenuProductCard'
import MainMenuCategories from '../MainMenuCategories'

import {useStateValue} from '../../../store/StateContext'

const MainMenu = props => {
  const [{products, categories}, dispatch] = useStateValue()

  const [activeItem, setActiveItem] = useState(1)

  const addProduct = productId => () => dispatch({type: 'addProductToCart', productId})

  return (
    <section className="main-menu">
      <div className="my-5">
        <MainMenuCategories
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          categories={categories} />
      </div>
      <div className="main-menu-products my-5">
        {products
          .filter(p => (activeItem === 1) || (p.categoryId === activeItem))
          .map((product, index) => (
            <MainMenuProductCard
              key={'product-' + index}
              handleClick={addProduct(product.id)}
              id={product.id}
              name={product.name}
              qualification={product.qualification}
              time={product.time}
              price={product.price}
              image={product.image} />
            ))
        }
      </div>
    </section>
  )
}

export default MainMenu
