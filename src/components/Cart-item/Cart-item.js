import React from 'react'
import './Cart-item.css'

const Cartitem = () => {
  return (
    <div>
      <div className="cart-item">
        <div className="product-img">
          <img src="https://assets-global.website-files.com/5f8f37508eb9142de7c970e8/6491ada871eb15344c4f4e28_support-trans-creators-800x800.png" alt="" />
        </div>
        <div className="product-info">
           <h1 className='product-name'>Lorem ipsum dolor sit amet.</h1>
           <span className='product-size'>Size: <span>S</span></span>
           <a className='remove-product'>REMOVE</a>
        </div>
        <div className="detail">
             <h1 className='product-price'>$25</h1>
             <div className="quantity">
              <span>Qty</span>
              <input type="text" />
             </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitem
