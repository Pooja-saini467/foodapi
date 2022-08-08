import React from 'react'
import './style.css'
import {useNavigate} from 'react-router'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../../redux/cart/cartselector'

const CartCountButton = ({cartCount}) => {
  const navigate = useNavigate();
  return (
    <div className="btnCartCount" onClick={()=>navigate.push('/cart')}>
      <div className="count">{cartCount >= 100 ? '99' :cartCount}</div>
      <i class="fa-solid fa-cart-plus"></i>
    </div>
  )
}
const mapStateTOProps=createStructuredSelector({
  cartCount:selectCartItemsCount,
});

export default connect(mapStateTOProps)(CartCountButton);
