import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {

  let [value,setValue]=useState(15)
  // let value=15
  const addValue=()=>{
    if(value<20){
    value=value+1 
    setValue(value)
  
    }

  
  }
  

  const removeValue=()=>{
    
    if(value>0){
      value=value-1 
      setValue(value)

    }
   
  }
  

  return (
    <>
       <h1>chai aur  react</h1>
       <h2>Counter Value: {value}</h2>
       <button onClick={addValue}>Add Value {value}</button>
       <br />
       <button onClick={removeValue}>Remove Value {value}</button>
    </>
  )
}
