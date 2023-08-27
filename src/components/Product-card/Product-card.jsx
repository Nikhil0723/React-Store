import React from 'react'
import './Product-card.css'
import Product from '../../product-img.png'

const Productcard = () => {
  return (
    <div className='product-card'>
      <div className="img-container">
        <img src={Product} alt="" />
        <p className='product-categories'>Lorem, ipsum dolor.</p>
      </div>
      <div className="product-detail">
        <h1 className='product-title'>Lorem, ipsum dolor.</h1>
        <h1 className='product-price'>$25</h1>
      </div>
    </div>
  )
}

export default Productcard
