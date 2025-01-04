
'use client'

import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function SearchBar() {

  const pathname = usePathname()


  const searchParams = useSearchParams()
  const women = searchParams.get('women')
  console.log(women)
  return <>
  <p>Current pathname: {pathname}</p>
    <p>Women: {women}</p>
    <p>Men:{searchParams.get('man')}</p>
  </>
}