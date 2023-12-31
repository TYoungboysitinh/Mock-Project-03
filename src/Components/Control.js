import React, { useState } from 'react'
import Search from './Control/Search'
import Sort from './Control/Sort'
import Add from './Control/Add'

export default function Control({onAddTask, onSearch, onSort}) {

  // Hàm xử lý sự kiện Add
  const handleAddTask = (toggle,actionName, task)=>{
    onAddTask (toggle,actionName, task);
  }

  return (
    <div className='row'>
        <Search onSearch={onSearch} />
        <Sort onSort={onSort} />
        <Add  onAddTask={handleAddTask}/>
    </div>
  )
}
