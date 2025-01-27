"use client"
import React from 'react'
import * as motion from "motion/react-client"
import ScrollTriggered from "../components/scroll"


const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}


function Rotate() {
    return (
        <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
        />
    )
}


function Page() {
  return (
   <>
   <div className='container mx-auto bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center justify-center space-y-4'>
     <Rotate />
   </div>
    <ScrollTriggered />
   </>
  )
}

export default Page