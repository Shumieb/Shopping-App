import React from 'react'

const CreateSearchSection = ({ addbtntitle, searchbtntitle }) => {

  return (
    <section className='p-4 my-4 flex flex-row justify-center'>
        <button 
            className='bg-pink-900 text-white rounded px-6 py-2 mr-4 text-lg shadow-lg shadow-pink-100'
        >
            { addbtntitle }
        </button>
        <button 
            className='bg-pink-900 text-white rounded px-6 py-2 ml-4 text-lg shadow-lg shadow-pink-100'
        >
            { searchbtntitle }
        </button>
    </section>
  )
}

export default CreateSearchSection