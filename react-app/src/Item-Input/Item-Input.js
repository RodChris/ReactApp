import React from 'react'
import './Item-Input.css'

const itemInput = () => {
    return (
        <div className='ItemInput'>
           <label className='label'>Enter an item, then click "Add Item" to add to the list.</label>
           <label className='label'>To add a description, click the "+" button on the right of the text box.</label>
           <input className='input'
                   type='text'
                   placeholder='Enter Item'></input><button className='buttonPlus'><b>+</b></button>  
            <button className='button'><b>Add Item</b></button>                    
        </div>
    )
}

export default itemInput;