import React from 'react'
import Search from './Control/Search'
import Sort from './Control/Sort'
import Add from './Control/Add'

export default function Control() {
  return (
    <div className='row'>
        <Search />
        <Sort />
        <Add />
    </div>
  )
}
