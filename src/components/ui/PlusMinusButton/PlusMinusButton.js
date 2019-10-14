import React, {useState} from 'react'
import './PlusMinusButton.css'

const PlusMinusButton = props => {
  const [count, setCount] = useState(0)

  const plusOne = () => setCount(count + 1)

  const minusOne = () => setCount(count > 1 ? count - 1 : 0)

  return (
    <div style={{ width: '4.5rem' }} className="plus-minus-button input-group input-group-sm mt-2 mb-3">
      <div className="input-group-prepend">
        <button
          style={{ width: '1.5rem' }}
          onClick={minusOne}
          className="plus-minus-button-minus btn btn-outline-dark m-auto px-0">-</button>
      </div>
      <input
          type="text"
          onChange={x => x}
          disabled
          value={count}
          className="form-control plus-minus-button-input" />
      <div className="input-group-append">
        <button
          style={{ width: '1.5rem' }}
          onClick={plusOne}
          className="plus-minus-button-plus btn btn-outline-dark m-auto px-0">+</button>
      </div>
    </div>
  )
}

export default PlusMinusButton
