import React from 'react'
import ListItem from './ListItem'

const List = () => {
  return (
    <section className='p-4 flex justify-center mt-4'>
        <ul className='grid grid-cols-2 gap-x-4 gap-y-10 max-w-7xl p-4'>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />            
        </ul>        
    </section>
  )
}

export default List