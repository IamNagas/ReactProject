import React,{useEffect,useState} from 'react'
import './App.css'
import Currency from './Currency'

const BASE_URL='https://api.frankfurter.app/latest'

function App() {
    const [CurrencyOptions,setcurrencyOptions]=useState([])
    console.log(CurrencyOptions)
    useEffect(()=>{
        fetch(BASE_URL)
        .then(res=>res.json())
        .then(data=>{
            setcurrencyOptions([data.base,...Object.keys(data.rates)])
        })

      },[])
  return (
    <div>
        <h1>Currency Converter</h1>
        
        <Currency CurrencyOptions={CurrencyOptions}/>
        <div className='equals'>=</div>
        <Currency CurrencyOptions={CurrencyOptions}/>

    </div>
  )
}

export default App