import React from 'react'

const PageHeading = ({ pageHeading }) => {
  return (
    <header className='p-2 flex flex-col'>
        <h1 className='text-2xl self-center text-pink-900'>{pageHeading}</h1>
        <span className='self-center mt-2'>
          <hr className='w-40 rounded border-4 border-pink-900'/>
        </span>        
    </header>
  )
}

export default PageHeading