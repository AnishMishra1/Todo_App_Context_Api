import React, { useState } from 'react'

const Todo = ({todoData, isFinished,changeFinished, onDelete, onEdit}) => {

    const [finished, setFinished] = useState(isFinished)
    const [ isEditding, setEditing] = useState(false)
    const [editText, setEditText] = useState('')
  return (
    <div>
        <input type='checkbox'  checked={finished} onChange={(e) =>{
            setFinished(e.target.checked);
            changeFinished(e.target.checked)
        }
        }
             />
        
        {(isEditding) ? <input type = "text" 
                        value={editText}
                        onChange={
                        e => setEditText(e.target.value)}
                        /> : 
                        <span>
                             {todoData}
                        </span>
        }
        <button onClick={() => 
                            {setEditing(!isEditding)
                             onEdit(editText);
                            }}>
              
                            {(!isEditding) ? "Edit" : "save"}
        </button>
        <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Todo;