import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  //creating object to pass as props
  // const myDetail={
  //   name:"Bijay",
  //   cast:"Yadav",
  //   age:"25"
  // }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username='Priyanka' btnText='Click me'/>
    <Card username='Vijay'/>
    </>
  )
}

export default App
