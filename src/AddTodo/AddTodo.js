import React from 'react'
import { useState } from 'react'

const AddTodo = ({updateList}) => {

    const [inputText, setInputText] = useState('')
  return (
    <div>
        <input 
             type='text'
             value={inputText}
             placeholder='add your next todo...'
             onChange={e => setInputText(e.target.value)}
        />
        <button onClick={() => updateList(inputText)}>Add</button>
    </div>
  )
}

export default AddTodo