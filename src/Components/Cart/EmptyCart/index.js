import React from 'react'
import './style.css'
import emptyCartImg from './emptyCart.png'
import {useNavigate} from 'react-router'
const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="emptyCart">
      <img src={emptyCartImg} alt="empty"/>
      <button onClick={()=>navigate.push('/')}><i className="fas fa-long-arrow-alt-left"></i>Shop Now</button>
    </div>
  );
};

export default EmptyCart