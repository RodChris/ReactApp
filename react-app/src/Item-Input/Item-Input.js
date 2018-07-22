import React from 'react'
import './Item-Input.css'

const itemInput = () => {
    return (
        <div className='ItemInput'>
           <label className='label'>Add an item, then click "Add Item"</label>
           <input className='input'
                   type='text'
                   placeholder='Enter Item'></input>
            <button className='button'><b>Add Item</b></button>                    
        </div>
    )
}

export default itemInput;