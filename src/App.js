import React, {useEffect} from 'react';
import './App.css';
import HomePage from './pages/Home'
import {useStateValue} from './store/StateContext'
import {getProducts, getCategories} from './services/api'

function App() {
  const [ , dispatch] = useStateValue()

  useEffect(() => {
    getCategories().then(categories => dispatch({type: 'setCategories', categories}))
    getProducts().then(products => dispatch({type: 'setProducts', products}))
  }, [dispatch])

  return (
    <HomePage />
  );
}

export default App;
