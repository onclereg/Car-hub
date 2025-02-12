import SearchBar from '@/components/searchbar'
import React from 'react'

const Catalogue = () => {
  return (
    <div className='p-3 grid gap-3 text-base font-normal'>
        <h4 className='text-2xl font-semibold '>Car Catalogue</h4>
        <p>Explore the cars you might like.</p>
        <SearchBar/>
    </div>
  )
}

export default Catalogue