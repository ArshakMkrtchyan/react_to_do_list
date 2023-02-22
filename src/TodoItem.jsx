import React from 'react'

export default function TodoItem({todo, onChange, onDelete}) {
  return (
    <div>
        <label className='label'>
            <input type='checkbox' checked={todo.isCompleted} onChange={(e) => {
                onChange({
                    ...todo,
                    isCompleted: e.target.value
                })
            }}/>
            {todo.text}
            <button onClick={() => {
                onDelete(todo)
            }}>delete</button>
        </label>
    </div>
  )
}
