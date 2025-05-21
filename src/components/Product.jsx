import React from 'react'
import { ProductComp1 } from './ProductComp1'
import { ProductComponent } from './ProductComponent'
import { SecondScroll } from './SecondScroll'
import { CategoryFooter } from './CategoryFooter'
import { ProductsReview } from './ProductsReview'
export const Product = () => {
  return (
    <div>
        <ProductComp1/>
        <ProductComponent/>
        <ProductsReview/>
        <SecondScroll/>
        <CategoryFooter/>
    </div>
  )
}
