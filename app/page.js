import React from 'react'
import Animation from './Animation'
import UploadForm from '@/app/pages/upload'
import Home from './pages'

function Page() {
  return (
    <div>
      <h1>COMPONENTE PAGE RAIZ/</h1>


      <div className='bg-gray-800 p-5 flex flex-col text-white'>
        <h1 className='text-white text-center font-bold uppercase text-2xl'>componente para subir archivos a SUPABASE</h1>
        <UploadForm />
      </div>

      <Home />
    </div>
  )
}

export default Page
