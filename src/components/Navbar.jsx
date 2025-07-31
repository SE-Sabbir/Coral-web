import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
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
    <nav id="Navbar" className='pt-[120px] hidden lg:block absolute top-0 left-0 w-full'>
        <div className="container">
            <ul className=' flex items-center justify-between'>
                {
                    navItems.map((item)=>{
                    return  <li><Link to={'item.navBarLink'} className='text-base font-normal text-[#000] hover:border-b border-[#FF8000] 
                    pb-[4px] hover:text-[#FF8000] transition-all duration-[.2s]' >{item.navBarContent}</Link></li>
                    })
                }
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar