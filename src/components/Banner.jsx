import React from 'react'
import bannerBg from '../assets/images/banner-bg.png'
import { Link } from 'react-router'
import { FaBagShopping } from "react-icons/fa6";
import banner1 from '../assets/images/banner1.png'

const Banner = () => {
  return (
    <>
    <section style={{background:`url(${bannerBg})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}} 
    className='pt-[50px] px-5 lg:px-0 lg:pt-[225px] pb-[10px] lg:pb-[60px]'>
        <div className="container">
            <div className="banner_row flex items-center flex-wrap justify-center lg:justify-between">
                <div className="banner_text">
                    <h1 className=' text-[55px] lg:text-[74px] font-roboto font-normal leading-[55px] text-black uppercase '>Collections</h1>
                    <h2 className=' text-[20px] lg:text-[30px] font-roboto font-normal leading-8 lg:leading-[55px] text-black 
                    capitalize w-full lg:w-[682px] pt-[52px] pb-[66px] '>you can explore ans shop many differnt collection
                        from various barands here.</h2>
                    <Link className=' flex items-center justify-center w-[100%] scale-80 lg:scale-100 lg:w-[223px] h-[72px] text-[29px] font-roboto 
                    font-normal text-[#ffffff] gap-[8px] bg-[#000000] hover:bg-[#FF8000] hover:rounded-3xl transition-all ' 
                    to={'#'}><FaBagShopping/>shop now</Link>
                </div>
                <div className="banner_img_group flex items-center relative pr-5 scale-[75%] lg:scale-[100%] ">
                    <div className="banner_img w-[424px] h-[542px] rounded-tl-[40%] rounded-br-[40%] overflow-hidden z-2">
                    <img className='w-full' src={banner1} alt="banner image" />
                    </div>
                    <div className="image_border w-[424px] h-[542px] border-2 border-[#00000025] rounded-tl-[40%] rounded-br-[40%]
                     left-[18px] top-[20px] absolute "></div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Banner