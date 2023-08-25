import {React ,  useState} from 'react'

import './Navbar.css'

import Cartitem from '../Cart-item/Cart-item'

function Navbar({onValue}) {

const [toggle , setToggle] = useState('')

const onclickToggle = ()=>{
  if(toggle === ''){
    setToggle('navbar-toggle')
    
  }else{
    setToggle('')
  }
}

const [cartToggle , setCartToggle] = useState('')

const onclickCart=()=>{
  if(cartToggle === '' ){
    setCartToggle('cart-toggle')
    
  }else{
    setCartToggle('')
    
  }
}


  return (
    <header>
     <div className="navbar">
      <div className="logo">
         <span className='logo-txt'><span className='brand-name'>webflow</span>Merch Store</span>
      </div>
      <div className="right-container">
        <nav className={`nav ${toggle} `}>
          <ul className="menu">
            <li className="menu-item">
              <a href="sdafasd">Shop all</a>
            </li>
            <li className="menu-item">
              <a href="dsfad">Categories</a>
            </li>
            <li className="menu-item">
              <a href="asdfsaf">Collections</a>
            </li>
            <li className="menu-item">
              <a href="sdfksf">About</a>
            </li>
          </ul>
        </nav>
        <div className="menu-btn" onClick={onclickToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <button className='cart-btn' onClick={onclickCart}>Cart <span className='cart-item-num'>0</span></button>
      </div>
     </div>
     <div className={`cart ${cartToggle} `}>
       <div className="cart-header">
        <h1>Your Cart</h1>
        <h1 className='close-cart' onClick={onclickCart}>&#x2715;</h1>
       </div>
       <div className="cart-items">
       <Cartitem/>
       </div>
     <div className="cart-checkout-section">
     <div className='subtotal'>
     <h1>subtotal</h1>
     <h1>$0</h1>
     </div>
     <button className='checkout-btn'>Continue to Checkout</button>
     </div>
     </div>
    </header>
  )
}

export default Navbar
