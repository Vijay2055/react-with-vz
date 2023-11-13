import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()

    //loading data by using loder

    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/vijay2055`).
    //     then((res)=>res.json()). 
    //     then((data)=>{
    //         console.log(data)
    //         setData(data)

    //     })

    // },[])
  return (
   <div className="text-white bg-gray-600 m-4 p-4 text-center text-3xl">
    Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git images" width={300}/>
   </div>
  )
}

export default Github

// This make fetching data faster than useEffect hook 
export const gitInfoLoader= async()=>{
    const response=await fetch(`https://api.github.com/users/vijay2055`)
    return response.json()
}
