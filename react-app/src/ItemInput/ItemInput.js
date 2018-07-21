import React from 'react'
import './ItemInput.css'

const itemInput = () => {
    return (
        <div className='ItemInput'>    
            <label>Add an item, then click "Add Item"</label>        
            <input className='input'
                   type='text'></input>
            <button className='button'><b>Add Item</b></button>
            
        </div>
    )
}

export default itemInput;