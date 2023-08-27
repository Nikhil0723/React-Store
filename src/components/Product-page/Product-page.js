import React from 'react'
import './Product-page.css'
import Productcard from '../Product-card/Product-card'

const Productpage = () => {
  return (
    <div className='product-page'>
      <div className="productpage-header">
        <h1 className="categories" >All items</h1>
        <div className="product-items">
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
         <Productcard/>
        </div>
      </div>
    </div>
  )
}

export default Productpage
