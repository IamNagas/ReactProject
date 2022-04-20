import React from 'react'
import CurrencyOptions from './CurrencyOptions'

function Currency(props) {
    const {
        currencyOptions
    }=props
    
  return (
    <div>
        <input type="number" className='input'/>
        <select>
            {currencyOptions.map()}
            <option value="hi">HI</option>
        </select>
        <CurrencyOptions/>
    </div>
  )
}

export default Currency