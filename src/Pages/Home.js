import React from 'react'
import AddItemForm from '../HomeComponents/AddItemForm'
import EditListName from '../HomeComponents/EditListName'
import List from '../HomeComponents/List'
import SearchItemForm from '../HomeComponents/SearchItemForm'

const Home = () => {
  return (
    <div>
        <header>
            <h1>My Shopping list</h1>
            <button>Edit</button>
        </header>
        <hr />
        <button>Add</button>
        <button>Search</button>
        <List/>  
        <EditListName/>
        <AddItemForm/> 
        <SearchItemForm/>   
    </div>
  )
}

export default Home