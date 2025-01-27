'use client'

import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";


import Texto from "../src/components/input"

export default function SearchBar() {

  const pathname = usePathname()


  const searchParams = useSearchParams()
  const women = searchParams.get('women')
  console.log(women)

  return <div className=' bg-gray-800 text-white'>
  
    <div className=' bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center justify-center space-y-4'>


      <h1>Welcome to my app!</h1>

      <Fade>
        <p>This content will fade in when scrolled into view</p>
      </Fade>

      {/* Multiple elements will animate together */}
      <Fade cascade
        delay={200} // Wait 200ms before starting
        duration={1000} // Animation lasts 1 second
        triggerOnce // Only animate once
        fraction={0.5} // Start animation when element is 50% visible
      >
        <h2>Features</h2>
        <p>Feature 1</p>
        <p>Feature 2</p>
        <p>Feature 3</p>
      </Fade>
      <div className='flex flex-col items-center justify-center space-y-4'>
        < Texto />
      </div>
    </div>

    <hr></hr>
    <div className='container mx-auto bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center justify-center py-10' >
      <h2>Our Features</h2>

      {/* Items slide in one after another */}
      <Slide direction="right" cascade triggerOnce >
        <div className="feature">🚀 Performance</div>
        <div className="feature">💡 Simplicity</div>
        <div className="feature">🎨 Customization</div>
      </Slide>
    </div>

    <Fade cascade damping={0.2} className='container mx-auto bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center justify-center py-10 my-2'>
      <div>First item (no delay)</div>
      <div>Second item (0.2s delay)</div>
      <div>Third item (0.4s delay)</div>
    </Fade>
    <Fade cascade damping={0.2} className='container mx-auto bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center justify-center py-10 my-2'>
      <div>First item (no delay)</div>
      <div>Second item (0.2s delay)</div>
      <div>Third item (0.4s delay)</div>
    </Fade>
    <Fade cascade damping={0.2} className='container mx-auto bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center justify-center py-10 my-2'>
      <div>First item (no delay)</div>
      <div>Second item (0.2s delay)</div>
      <div>Third item (0.4s delay)</div>
    </Fade>

  </div>
}