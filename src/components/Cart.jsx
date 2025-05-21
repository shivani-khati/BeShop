import React from 'react'
import { CartComponent1 } from './CartComponent1'

import { CategoryFooter } from './CategoryFooter'
import { CartMiddleInteract } from './CartMiddleInteract'
export const Cart = () => {
  return (
    <div>
        <CartComponent1/>
        <CartMiddleInteract/>
        <CategoryFooter/>
    </div>
  )
}
