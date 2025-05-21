import React from 'react'
import { ContactHeader } from './ContactHeader'
import { ContactPara } from './ContactPara'
import { ContactLogo } from './ContactLogo'
import { ContactPicture } from './ContactPicture'
import { CategoryFooter } from './CategoryFooter'

export const Contacts = () => {
  return (
    <div><ContactHeader/>
    <ContactPara/>
    <ContactLogo/>
    <ContactPicture/>
    <CategoryFooter />
  </div>
  )
}
