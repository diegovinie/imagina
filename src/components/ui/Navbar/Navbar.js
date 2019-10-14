import React from 'react'
import './Navbar.css'
import MIcon from '../MIcon'
import {useStateValue} from '../../../store/StateContext'


const Navbar = props => {
  const [{search}, dispatch] = useStateValue()

  const handleInput = e => dispatch({type: 'setSearch', search: e.target.value})

  return (
    <header className="navbar row py-4 px-0">
      <div className="col-1 col-sm-3 d-flex pl-0">
        <button className="btn pl-4 pl-sm-0">
          <i className="fa fa-bars" />
        </button>

        <div className="h5 font-weight-bold my-auto ml-3">
          <a href="/" className="d-none d-sm-block">Chukwudi</a>
        </div>
      </div>
      <div className="col-11 col-sm-9">
        <div className="form-group my-0 ml-3">
          <input
            onChange={handleInput}
            value={search}
            type="text"
            className="form-control border-0 bg-light"
            style={{ paddingLeft: '3.5rem' }}
            placeholder="Search" />
          <div className="hola px-4 d-flex">
            <MIcon icon="lens" scale="0.9" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
