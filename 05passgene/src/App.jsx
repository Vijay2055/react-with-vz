import { useState,useCallback,useEffect,useRef } from "react"
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [nAllow, setnAllow]=useState(false)
  const [charAllow,setcharAllow]=useState(false)
  const [pass,setPass]=useState("")
  const passwordRef=useRef(null)

  const passGenerator=useCallback(()=>{
    let password=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(nAllow) str+="0123456789"
    if(charAllow) str+="!@#$%^&-_+*=[]{}~`"

    for (let i = 1; i <= length; i++) {
      password+=str.charAt(Math.floor(Math.random()*str.length+1))
      
    }

    setPass(password)

  },[length,nAllow,charAllow,setPass])

  const copyPass=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,7)
    window.navigator.clipboard.writeText(pass)

  },[pass])

  useEffect(()=>{
    passGenerator()

  },[length,nAllow,charAllow,passGenerator])
  
  return (
    
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg
      px-4 py-8 text-orange-500 bg-gray-700 ">
      <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input type="text"
          value={pass} 
          className="outline-none w-full px-3 py-1"
          placeholder="password"
          ref={passwordRef}
          readOnly
          />
          <button className="outline-none bg-blue-700
           text-white px-3 py-0.5 shrink-0"
           onClick={copyPass}>copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=> {setLength(e.target.value)}}
             />
             <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={nAllow}
            id="numberInput"
            onChange={()=>{
              setnAllow((prev)=> !prev)
            }}
             />
             <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={nAllow}
            id="numberInput"
            onChange={()=>{
              setnAllow((prev)=> !prev)
            }}
             />
             <label htmlFor="numberInput">Characters</label>
          </div>


        </div>

      </div>
    </>
  )
}

export default App
