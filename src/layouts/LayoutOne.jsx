import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ResHeader from '../components/ResHeader'

const LayoutOne = () => {
  return (
    <>
    <Header/>
    <ResHeader/>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default LayoutOne