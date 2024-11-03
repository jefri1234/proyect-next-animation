"use client"
import React from 'react'
import { useParams } from 'next/navigation'

function page() {
  const params= useParams()
  return (
    <div>
        <button onClick={()=>{
          console.log(params)
        }}>
          click
          </button>        
    </div>
  )
}
export default page
