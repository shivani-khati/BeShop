import React from 'react'
import '../style/ShopHeader.css'
export const ShopHeader = () => {
  return (
     <div className="shop-header">
      <div className="shop-overlay">
        <h1 className="shop-title">Shop</h1>
        <p className="shop-breadcrumb">
          Home &nbsp; - &nbsp; <span>Shop</span>
        </p>
      </div>
    </div>
  )
}
