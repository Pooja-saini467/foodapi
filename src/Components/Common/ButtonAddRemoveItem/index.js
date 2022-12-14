import React from 'react'
import './style.css'

const ButtonAddRemoveItem = ({quantity,handleAddItem,handleRemoveItem}) => {
  return (
    <div className="btnAddRemove">
        {quantity!==0? ( 
        <div className="btnAddRemove-positive">
            <i className="fa fa-minus" aria-hidden="true" onClick={handleRemoveItem}></i>
            <span>{quantity}</span>
            <i className="fa fa-plus" aria-hidden="true" onClick={handleAddItem}></i>
        </div>
        ):(
        <div className="btnAddRemove-negative" onClick={handleAddItem}>
          <span>ADD</span>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </div>
        )}
    </div>
  )
}

export default ButtonAddRemoveItem