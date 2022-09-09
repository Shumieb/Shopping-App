import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="flex flex-row px-6 py-2 bg-pink-900 mb-5">
        <h2 className="basis-1/2 p-1 text-2xl text-white">
            <Link to="/">Shopping List App</Link>
        </h2>
        <ul className="flex flex-row justify-end basis-1/2">
            <li className='py-1 mx-2 px-2 text-lg text-white'>
                <Link to="/">Home</Link>
            </li>
            <li className='py-1 mx-2 px-2 text-lg text-white'>
                <Link to="shoppinglists">Shopping Lists</Link>
            </li>
            <li className='py-1 mx-2 px-2 text-lg text-white'>
                <Link to="about">About</Link>
            </li>
        </ul>    
    </nav>
  )
}

export default NavBar