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
        <div className="container flex lg:flex-nowrap flex-wrap justify-around gap-10  pt-[140px] pb-[90px]">
            <div className=' flex flex-wrap lg:justify-start justify-center'>
                <Link className=' w-[180px]'> <img src={coralLogo} alt="logo image" /> </Link>
                <p className=' font-opensans font-normal text-[16px] text-[#1E2832bf] leading-[28px] w-[392px] pt-[32px] '>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua
                </p>
                <div className=' flex justify-between w-[208px] pt-[32px] '>
                    <Link><FaFacebookF/></Link>
                    <Link><FaTwitter/></Link>
                    <Link><FaLinkedinIn/></Link>
                    <Link><FaInstagram/></Link>
                </div>
            </div>
            <div className=' w-full flex flex-wrap justify-around'>
                <div>
                    <ul>
                        <li className='pb-[22px]'><Link className=' font-opensans font-semibold text-[16px] text-[#000000] '>CATALOG</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832]'>Necklaces</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832]'>Hoodies</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832]'>Jewelry Box</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832]'>T-Shirt</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832]'>Jacket</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='pb-[22px]'><Link className=' font-opensans font-semibold text-[16px] text-[#000000] '>ABOUT US</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832]'>Our Producers</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832]'>Sitemap</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832]'>FAQ</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832]'>About Us</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832]'>Terms & Conditions</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='pb-[22px]'><Link className=' font-opensans font-semibold text-[16px] text-[#000000] '>CUSTOMER SERVICES</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832]'>Contact Us</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832]'>Track Your Order</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832]'>Product Care & Repair</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832]'>Book an Appointment</Link></li>
                        <li className='pb-[12px]'><Link className=' font-opensans font-normal text-[14px] text-[#1E2832]'>Shipping & Returns</Link></li>
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