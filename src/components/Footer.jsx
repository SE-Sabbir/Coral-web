import React from 'react'
import { Link } from 'react-router'
import coralLogo from '../assets/images/coral-logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import paymentImg from '../assets/images/paymenticon.png'


const Footer = () => {
  return (
    <>
    <footer>
        <div className="container flex lg:flex-nowrap flex-wrap justify-around gap-10 pt-[50px] lg:pt-[140px] pb-[40px] lg:pb-[90px]">
            <div className=' flex flex-wrap lg:justify-start justify-center'>
                <Link className=' w-[180px]'> <img src={coralLogo} alt="logo image" /> </Link>
                <p className=' font-opensans font-normal text-[16px] text-[#1E2832bf] leading-[28px] w-[392px] pt-[32px] '>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua
                </p>
                <div className=' flex justify-between w-[208px] pt-[20px] '>
                    <div className=' w-[30px] h-[30px] flex justify-center items-center rounded-full hover:bg-[#FF8000] hover:text-[#ffffff] '>
                    <Link ><FaFacebookF/></Link>
                    </div>
                    <div className=' w-[30px] h-[30px] flex justify-center items-center rounded-full hover:bg-[#FF8000] hover:text-[#ffffff] '>
                    <Link><FaTwitter/></Link>
                    </div>
                    <div className=' w-[30px] h-[30px] flex justify-center items-center rounded-full hover:bg-[#FF8000] hover:text-[#ffffff] '>
                    <Link><FaLinkedinIn/></Link>
                    </div>
                    <div className=' w-[30px] h-[30px] flex justify-center items-center rounded-full hover:bg-[#FF8000] hover:text-[#ffffff] '>
                    <Link><FaInstagram/></Link>
                    </div>
                </div>
            </div>
            <div className=' w-full flex flex-wrap justify-around'>
                <div className='catalog'>
                    <ul>
                        <li className='pb-[22px]'><Link className=' font-opensans font-semibold text-[16px] text-[#000000] '>CATALOG</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832] hover:text-[#FF8000] transition-all duration-[.3s]'>Necklaces</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832] hover:text-[#FF8000] transition-all duration-[.3s]'>Hoodies</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832] hover:text-[#FF8000] transition-all duration-[.3s]'>Jewelry Box</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832] hover:text-[#FF8000] transition-all duration-[.3s]'>T-Shirt</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832] hover:text-[#FF8000] transition-all duration-[.3s]'>Jacket</Link></li>
                    </ul>
                </div>
                <div className='about_us'>
                    <ul>
                        <li className='pb-[22px]'><Link className=' font-opensans font-semibold text-[16px] text-[#000000] '>ABOUT US</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832] hover:text-[#FF8000] transition-all duration-[.3s]'>Our Producers</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832] hover:text-[#FF8000] transition-all duration-[.3s]'>Sitemap</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832] hover:text-[#FF8000] transition-all duration-[.3s]'>FAQ</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832] hover:text-[#FF8000] transition-all duration-[.3s]'>About Us</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832] hover:text-[#FF8000] transition-all duration-[.3s]'>Terms & Conditions</Link></li>
                    </ul>
                </div>
                <div className='customer_services'>
                    <ul>
                        <li className='pb-[22px]'><Link className=' font-opensans font-semibold text-[16px] text-[#000000] '>CUSTOMER SERVICES</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832] hover:text-[#FF8000] transition-all duration-[.3s]'>Contact Us</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832] hover:text-[#FF8000] transition-all duration-[.3s]'>Track Your Order</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832] hover:text-[#FF8000] transition-all duration-[.3s]'>Product Care & Repair</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832] hover:text-[#FF8000] transition-all duration-[.3s]'>Book an Appointment</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832] hover:text-[#FF8000] transition-all duration-[.3s]'>Shipping & Returns</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        {/* -----------Footer Bottom Bar--------- */}
        <div className=' w-full py-[20px] bg-[#1E2832] flex items-center'>
            <div className="container flex flex-wrap justify-center lg:justify-between px-5 lg:px-0 gap-5">
            <h2 className=' flex items-center font-opensans font-normal text-[16px] text-[#ffffff] gap-[6px] '><FaRegCopyright/>2022 Coral, Inc.</h2>
            <div>
                <Link><img src={paymentImg} alt="payment image" /></Link>
            </div>
            <Link className=' flex items-center font-opensans font-normal text-[16px] text-[#ffffff] gap-[6px] ' to={'#'}>Scroll To Top<FaArrowUp/></Link>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer