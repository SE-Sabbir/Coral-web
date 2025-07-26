import React, { useState } from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/coral-logo.png'
import { IoSearch } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const ResHeader = () => {
  const [ headSearch , setHeadSearch ] = useState (false)
  const [ showMenu , setShowMenu] = useState(false)
  const navItems = [
        {
            navBarLink:'#',
            navBarContent:'Jewelry & Accessories'
        },
        {
            navBarLink:'#',
            navBarContent:'Clothing & Shoes'
        },
        {
            navBarLink:'#',
            navBarContent:'Home & Living'
        },
        {
            navBarLink:'#',
            navBarContent:'Wedding & Party'
        },
        {
            navBarLink:'#',
            navBarContent:'Toys & Entertainment'
        },
        {
            navBarLink:'#',
            navBarContent:'Art & Collectibles'
        },
        {
            navBarLink:'#',
            navBarContent:'Craft Supplies & Tools'
        },
    ]
  return (
    <>
    <header className=' lg:hidden pt-7 pb-6 border-b border-[#E3E3E3]'>
        <div className="resHeaderRow flex justify-around">
            <button onClick={()=>setHeadSearch(true)} className=' text-3xl text-primary'><IoSearch/></button>
            <Link className=' w-50' to={'#'}> <img className='w-full' src={logo} alt="logo" /> </Link>
            <button onClick={()=>setShowMenu(!showMenu)} className={`text-2xl text-primary ${showMenu? ' rotate-90': ' rotate-0'}`}><FaBarsStaggered/></button>
        </div>
        {/* ------Show NavMenu */}
        <div className={`navmenu w-[80%] h-screen bg-primary absolute inline-block top-23 z-10 duration-[.4s] ${showMenu? 'right-0' : 'right-[-100%]'}`}>
        {/* <div className={`navmenu w-[80%] h-screen bg-primary absolute inline-block left-0 top-23 z-10 duration-[.4s] ${showMenu? 'left-0' : 'left-[-100%]'}`}> */}
          <div className=' flex justify-around pt-6 px-5 pb-5 border-b border-[#E3E3E3]'>
            <Link className='flex items-center gap-[8px] text-lg font-normal font-roboto text-[#ffffff]' to={'#'}><FaUser/>Account</Link>
            <Link className='flex items-center gap-[8px] text-lg font-normal font-roboto text-[#ffffff]' to={'#'}><FaBagShopping/>Shoping</Link>
          </div>
          <div className="navList w-full h-screen flex justify-center">
                <nav id="Navbar" className='pt-[30px]'>
                    <div className="container">
                        <ul className=' flex-wrap'>
                            {
                                navItems.map((item)=>{
                                return  <li className=' flex justify-start p-5 '><Link to={'item.navBarLink'} className='text-lg font-normal text-[#ffffff]' >{item.navBarContent}</Link></li>
                                })
                            }
                        </ul>
                    </div>
                </nav>
          </div>
        </div>
        {/* ------Search Overlay */}
        {
          headSearch?
          <>
          <div onClick={()=>setHeadSearch(false)} className='w-full h-screen bg-[#0000002a] absolute top-0 left-0'></div>
          <div className=' flex items-center justify-center w-full h-[92px] bg-[#fff] absolute top-0 left-0'>
            <div className=' flex items-center justify-between w-[300px] h-[50px] px-4 border rounded-full '>
              <input className=' outline-none py-6' type="text" placeholder='Search here'/>
              <Link className=' text-2xl' to={'#'}><IoSearchOutline/></Link>
            </div>
          </div>
          </>
          :
          ''
        }
    </header>
    </>
  )
}

export default ResHeader