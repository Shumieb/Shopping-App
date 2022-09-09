import React, { useState} from 'react'

const SearchShoppingListsForm = () => {
    const [ shoppingListName, setShoppingListName ] = useState("");
    const [ errorMessage, setErrorMessage ] = useState("");

    const handleSearchShoppingList = (e) =>{
        e.preventDefault();

        if(!shoppingListName){
          setErrorMessage("Please enter some text")
          return
        }

        console.log("SearchShoppingListForm " + shoppingListName)
        setErrorMessage("")
        setShoppingListName("")
    }

  return (
    <form onSubmit={handleSearchShoppingList} className='flex flex-col bg-pink-900 justify-items-center items-center w-1/2 p-8 rounded mb-8'>        
        <p className='text-white text-xl font-medium'>Search Shopping Lists</p>
        <hr className='w-1/3 mb-10 mt-2 border-4 rounded border-pink-100'/>
        <input 
          type="text" 
          placeholder='Shopping List Name' 
          className='w-2/4 p-2 text-lg rounded outline-pink-900 mb-6 text-center'
          onChange={(e) => setShoppingListName(e.target.value)}
          value={shoppingListName}
          onFocus={() => errorMessage && setErrorMessage("")}
        />
        <p className='mb-2 text-white italic'>{errorMessage}</p>
        <input 
          type="submit" 
          value="Search" 
          className='my-4 w-fit cursor-pointer bg-white rounded px-6 py-2 text-lg font-medium text-pink-900'
        />
    </form>
  )
}

export default SearchShoppingListsForm