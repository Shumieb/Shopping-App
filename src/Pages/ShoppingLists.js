import React from 'react'
import { useState } from 'react'
import AddNewShoppingListForm from '../ShoppingListsComponents/AddNewShoppingListForm'
import CreateSearchListsSection from '../ShoppingListsComponents/CreateSearchListsSection'
import List from '../SharedComponents/List'
import PageHeading from '../SharedComponents/PageHeading'
import SearchShoppingListsForm from '../ShoppingListsComponents/SearchShoppingListsForm'

const ShoppingLists = () => {
     const [displayAddListForm, setDisplayAddListForm ] = useState(false);
     const [displaySearchListForm, setDisplaySearchListForm ] = useState(false);

     const toggleAddShoppingListForm = () =>{
        setDisplayAddListForm(!displayAddListForm);
        displaySearchListForm && setDisplaySearchListForm(false);
     }

     const toggleSearchShoppingListsForm = () =>{
        setDisplaySearchListForm(!displaySearchListForm);
        displayAddListForm && setDisplayAddListForm(false);
     }

  return (
    <main className='container px-4 flex flex-col justify-items-center items-center'>
        <PageHeading pageHeading={"Shopping Lists"}/>
        <CreateSearchListsSection 
            toggleAddShoppingListForm={toggleAddShoppingListForm}  
            toggleSearchShoppingListsForm={toggleSearchShoppingListsForm}          
        />
        {displayAddListForm && <AddNewShoppingListForm />}
        {displaySearchListForm && <SearchShoppingListsForm />}
        <span className='self-center mt-2'>
          <hr className='w-60 rounded border-4 border-pink-900'/>
        </span> 
        <List />
    </main>
  )
}

export default ShoppingLists