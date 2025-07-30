import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ResHeader from '../components/ResHeader'
import Footer from '../components/Footer'

const LayoutOne = () => {
  return (
    <>
    <Header/>
    <ResHeader/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default LayoutOne