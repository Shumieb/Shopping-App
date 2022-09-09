import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = () => {
  return (
    <li 
        className="w-96 text-center py-6 px-12 rounded border-2 border-pink-900 border-dashed text-pink-900 shadow-lg place-self-center cursor-pointer hover:shadow-xl transition ease-in-out delay-100"
    >
        <Link to="1">
            <p className='text-lg font-medium mb-1'>List item</p>
            <p className='text-base'>The list has 20 items</p>
            <p className='text-sm italic mt-1'>Last Updated: 2 weeks ago</p>
        </Link>        
    </li>
  )
}

export default ListItem