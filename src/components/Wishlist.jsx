import React from 'react'
import { WishlistComp1 } from './WishlistComp1'
import { CategoryFooter } from './CategoryFooter'
import { SecondScroll } from './SecondScroll'
import { WishlistComp2 } from './WishlistComp2'

export const Wishlist = () => {
  return (
    <div>
        <WishlistComp1/>
        <WishlistComp2/>
        <SecondScroll/>
           <CategoryFooter/>
    </div>
  )
}
