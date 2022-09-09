import React from 'react'
import CreateSearchSection from '../SharedComponents/CreateSearchSection'
import List from '../SharedComponents/List'
import PageHeading from '../SharedComponents/PageHeading'

const ShoppingLists = () => {
  return (
    <main className='container px-4 flex flex-col'>
        <PageHeading pageHeading={"Shopping Lists"}/>
        <CreateSearchSection addbtntitle={"Create New List"} searchbtntitle={"Search Lists"} />
        <span className='self-center mt-2'>
          <hr className='w-60 rounded border-4 border-pink-900'/>
        </span> 
        <List />
    </main>
  )
}

export default ShoppingLists