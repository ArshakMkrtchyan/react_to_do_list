import React from 'react'
import TodoList from './TodoList'

export default function TodoFooter({todos, onClearComleted}) {
    const size = todos.filter((todo) => todo.isCompleted).length
  return (
    <div className='footer'>
        <span>{size}/{todos.length} Completed</span>
        <button onClick={onClearComleted}>Clear Completed</button>
    </div>
  )
}
