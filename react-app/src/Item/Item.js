import React from 'react'

import './Item.css'

const item = () => {
    return (
        <div className='Item'> 
            {/* <div className='row'> */}
                <input className='itemInput'
                    type='text'
                    disabled='disabled'></input>
                <div className='buttonContainer'>
                    <button className='editButton'><b>Edit Item</b></button>
                    <button className='deleteButton'><b>Delete Item</b></button>
                </div>
                
            {/* </div> */}
        </div>
    )
}

export default item;