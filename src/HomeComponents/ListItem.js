import React from 'react'

const ListItem = () => {
  return (
    <div>
        <div>
            <p><input type="checkbox" name="item" /></p>
            <h2>Item name</h2>            
        </div>
        
        <div>
            <p>Edit</p>
            <p>Delete</p>
        </div>
    </div>
  )
}

export default ListItem