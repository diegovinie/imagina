import React, {useEffect} from 'react';
import './App.css';
import LayoutDesktop from './layout/Desktop'
import {useStateValue} from './store/StateContext'
import {getProducts, getCategories} from './services/api'

function App() {
  const [ , dispatch] = useStateValue()

  useEffect(() => {
    getCategories().then(categories => dispatch({type: 'setCategories', categories}))
    getProducts().then(products => dispatch({type: 'setProducts', products}))
  }, [dispatch])

  return (
    <LayoutDesktop />
  );
}

export default App;
