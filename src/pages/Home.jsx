import React from 'react'
import Banner from '../components/Banner'
import Brand from '../components/Brand'
import Explore from '../components/Explore'
import Subscribe from '../components/Subscribe'
import BrandBanner from '../components/BrandBanner'
import Bestseller from '../components/Bestseller'
import SocialDiscount from '../components/SocialDiscount'

const Home = () => {
  return (
    <>
    <Banner/>
    <Brand/>
    <Explore/>
    <Subscribe/>
    <BrandBanner/>
    <Bestseller/>
    <SocialDiscount/>
    </>
  )
}

export default Home