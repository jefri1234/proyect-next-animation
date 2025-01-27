'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

function Service() {
  const pathname = usePathname()
  return (
    <div>
      <p>ROUTE SERVICE:</p>
      <p>Current pathname: {pathname}
      </p></div>
  )
}

export default Service