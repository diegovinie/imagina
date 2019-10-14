import React from 'react'
import './MainMenu.css'
import MainMenuProductCard from '../MainMenuProductCard'
import {useStateValue} from '../../../store/StateContext'

const MainMenu = props => {
  const [{products}, dispatch] = useStateValue()

  const addProduct = productId => () => dispatch({type: 'addProductToCart', productId})

  return (
    <section>
      <div className="my-5"></div>
      <div className="my-5">
        {products.map((product, index) => (
          <MainMenuProductCard
            key={'product-' + index}
            handleClick={addProduct(product.id)}
            id={product.id}
            name={product.name}
            qualification={product.qualification}
            time={product.time}
            price={product.price}
            image={product.image}
           />
        ))}
      </div>
    </section>
  )
}

export default MainMenu
