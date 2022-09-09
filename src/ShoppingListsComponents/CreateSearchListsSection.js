import React from 'react'

const CreateSearchListsSection = ({ toggleAddShoppingListForm }) => {

  return (
    <section className='p-4 my-4 flex flex-row justify-center'>
        <button 
            className='bg-pink-900 text-white rounded px-6 py-2 mr-4 text-lg shadow-lg shadow-pink-100 hover:shadow-xl transition ease-in-out delay-100'
            onClick={toggleAddShoppingListForm}
        >
            Create New Shopping List
        </button>
        <button 
            className='bg-pink-900 text-white rounded px-6 py-2 ml-4 text-lg shadow-lg shadow-pink-100 hover:shadow-xl transition ease-in-out delay-100'
        >
            Search For Shopping Lists
        </button>
    </section>
  )
}

export default CreateSearchListsSection