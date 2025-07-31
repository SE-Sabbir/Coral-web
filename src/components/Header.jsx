import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import logo from '../assets/images/coral-logo.png'
import { Link } from 'react-router';
import { FaUser } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";



const Header = () => {

    const [showSearch , setShowSearch ] =  useState(false)
    
    

  return (
    <>
    <header className=' hidden lg:block absolute w-full top-0 left-0 z-10'>
        <div className='container'>
            <div className="header_row flex items-center justify-between pt-[31px] pb-[25px] border-b border-[#E3E3E3]">
                <button onClick={()=>setShowSearch(true)} className="src_col text-[22px] text-primary cursor-text hover:text-[#FF8000] transition-all "><IoSearch/></button>
                <div className="logo_col w-[180px]">
                    <img className='w-full' src={logo} alt="corallogo" />
                </div>
                <div className="header_btn_col flex gap-[22px]">
                    <Link className='flex items-center gap-[8px] text-lg font-normal font-roboto text-primary hover:text-[#FF8000]' to ={'#'}><FaUser/>Account</Link>
                    <Link className='flex items-center gap-[8px] text-lg font-normal font-roboto text-primary hover:text-[#FF8000]' to ={'#'}><FaBagShopping/>Shoping</Link>
                </div>
            </div>
        </div>
        {/* -------Search Overlay */}
        {
            showSearch?
        <>
        <div onClick={()=>setShowSearch(false)} className=' w-full h-screen bg-[#00000033] absolute top-0 left-0'></div>
        <div className=' w-full h-[100px] flex items-center justify-around bg-[#fff] absolute top-0 left-0'>
            <div className="logo_col w-[180px] ">
                <img className='w-full' src={logo} alt="corallogo" />
            </div>
            <div className="search_input flex items-center w-[600px] h-[45px] border rounded-full ">
                <input className=' w-full px-[15px] outline-none text-lg font-normal font-roboto text-primary' type="text" placeholder='Search here '/>
            </div>
            <div className="header_btn_col flex gap-[22px]">
                    <Link className='flex items-center gap-[8px] text-xl font-normal font-roboto text-primary' to ={'#'}><FaBagShopping/>Shoping</Link>
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

export default Header