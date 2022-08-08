import React from 'react'
import './style.css'
import logoImg from './images.png'

const Logo = () => {
  return (
    <div className="logo">
      <div>
        <img src={logoImg} alt="logo"/>
        <span>
          <b>FoodVilla</b>
        </span>
      </div>
      <p>
        Restaurant
      </p>
    </div>
  )
}

export default Logo;