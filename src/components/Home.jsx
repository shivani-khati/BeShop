import React from 'react'
import { HomeFixed } from './HomeFixed'
import { ImgCom } from './ImgCom'
import { Trending } from './Trending'
import { DiscountSection } from './DiscountSection'
import { Value } from './Value'
import { Pictures } from './Pictures'
import { VideoPhoto } from './VideoPhoto'
import { SecondScroll } from './SecondScroll'
import OurBlogs from './OurBlogs'
import { Email } from './Email'


 
export const Home = () => {
   
  return (
    <div>
    
    <ImgCom/>
    <Trending/>
    <DiscountSection/>
    <Value/>
    <Pictures/>
    <VideoPhoto/>
    <SecondScroll/>
   <OurBlogs/>
   <Email/>
  
    
    
    </div>
  )
}
