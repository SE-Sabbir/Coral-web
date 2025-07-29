import React from 'react'
import CommonHead from './common/CommonHead'
import { FaFilter } from "react-icons/fa6";
import SingleCardProduct from './common/SingleCardProduct';
import slickcardImg1 from '.././assets/images/cardImg1.png'
import slickcardImg2 from '.././assets/images/cardImg2.png'
import slickcardImg3 from '.././assets/images/cardImg3.png'
import slickcardImg4 from '.././assets/images/cardImg4.png'
import slickcardImg5 from '.././assets/images/cardImg5.png'
import slickcardImg6 from '.././assets/images/cardImg6.png'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';

const Bestseller = () => {

 var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <section id='bestSeller' className='pt-[140px]'>
        <div className="container">
            <CommonHead commonHeadText={'Best sellers'}/>
            <div className=' flex justify-between items-center pt-[35px]'>
                <div className='subBtn flex gap-[40px]'>
                    <button className=' capitalize font-opensans text-[16px] font-semibold text-[#000000] cursor-grab '>all products</button>
                    <button className=' capitalize font-opensans text-[16px] font-semibold text-[#00000080] '>t-shirt</button>
                    <button className=' capitalize font-opensans text-[16px] font-semibold text-[#00000080] '>hoodies</button>
                    <button className=' capitalize font-opensans text-[16px] font-semibold text-[#00000080] '>jacket</button>
                </div>
                <div className='subLink flex justify-center items-center w-[92px] h-[32px] gap-[4px] bg-[#000000] font-opensans font-normal text-base text-[#ffffff] cursor-grab '><FaFilter/> Filter</div>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <SingleCardProduct pImg={slickcardImg1} pTitle={'Adicolor Classics Joggers'} pType={'Dress'} pPrice={'$63.85'} />
                    </div>
                    <div>
                        <SingleCardProduct pImg={slickcardImg2} pTitle={'Adicolor Classics Joggers'} pType={'Dress'} pPrice={'$63.85'} />
                    </div>
                    <div>
                        <SingleCardProduct pImg={slickcardImg3} pTitle={'Adicolor Classics Joggers'} pType={'Dress'} pPrice={'$63.85'} />
                    </div>
                    <div>
                        <SingleCardProduct pImg={slickcardImg4} pTitle={'Adicolor Classics Joggers'} pType={'Dress'} pPrice={'$63.85'} />
                    </div>
                    <div>
                        <SingleCardProduct pImg={slickcardImg5} pTitle={'Adicolor Classics Joggers'} pType={'Dress'} pPrice={'$63.85'} />
                    </div>
                    <div>
                        <SingleCardProduct pImg={slickcardImg6} pTitle={'Adicolor Classics Joggers'} pType={'Dress'} pPrice={'$63.85'} />
                    </div>
                </Slider>
            </div>
        </div>
    </section>
    </>
  )
}

export default Bestseller