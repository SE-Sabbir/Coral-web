import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ResHeader from '../components/ResHeader'
import Banner from '../components/Banner'
import Brand from '../components/Brand'
import Explore from '../components/Explore'

const LayoutOne = () => {
  return (
    <>
    <Header/>
    <ResHeader/>
    <Navbar/>
    <Banner/>
    <Brand/>
    <Explore/>
    <Outlet/>
    </>
  )
}

export default LayoutOne