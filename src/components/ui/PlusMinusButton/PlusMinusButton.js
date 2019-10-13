import React from 'react'
import './PlusMinusButton.css'

const PlusMinusButton = props => (
  <div style={{ width: '4.5rem' }} className="input-group input-group-sm mb-3">
    <div className="input-group-prepend">
      <button style={{ width: '1.5rem' }} className="btn btn-outline-secondary m-auto px-0" type="button" id="button-addon1">-</button>
    </div>
    <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
    <div className="input-group-append">
      <button style={{ width: '1.5rem' }} className="btn btn-outline-secondary m-auto px-0" type="button" id="button-addon1">+</button>
    </div>
  </div>
)

export default PlusMinusButton
