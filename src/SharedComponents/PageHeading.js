import React from 'react'

const PageHeading = ({ pageHeading }) => {
  return (
    <header className='p-2 mt-8'>
        <h1 className='text-2xl text-pink-900 mb-2'>{pageHeading}</h1>
        <hr className='w-40 rounded border-4 border-pink-900'/>             
    </header>
  )
}

export default PageHeading