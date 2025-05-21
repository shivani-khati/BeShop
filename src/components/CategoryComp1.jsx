import React from 'react'

import '../style/CategoryComp1.css'
export const CategoryComp1 = () => {
  return (
    <div className="cat-header">
      <div className="cat-overlay">
        <h1 className="cat-title">Categories</h1>
        <p className="cat-breadcrumb">
          Home &nbsp; - &nbsp; <span>Categories</span>
        </p>
      </div>
    </div>
  )
}
