'use client'
 
import { useParams } from 'next/navigation'
 
import React from 'react'

function Page() {

    const params = useParams()
    console.log(params)
  return (
    <div>
        <p>{params.store}</p>
        <p>{params.id}</p>
    </div>
  )
}

export default Page