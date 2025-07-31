import React from 'react'
import CommonHead from './common/CommonHead'
import { FaFilter } from "react-icons/fa6";
import SingleCardProduct from './common/SingleCardProduct';
import cardImg1 from '.././assets/images/cardImg1.png'
import cardImg2 from '.././assets/images/cardImg2.png'
import cardImg3 from '.././assets/images/cardImg3.png'
import cardImg4 from '.././assets/images/cardImg4.png'
import cardImg5 from '.././assets/images/cardImg5.png'
import cardImg6 from '.././assets/images/cardImg6.png'
import cardImg7 from '.././assets/images/cardImg7.png'
import cardImg8 from '.././assets/images/cardImg8.png'

const Subscribe = () => {
  return (
    <>
    <section id='subscribe' className='pt-[50px] lg:pt-[140px]'>
        <div className="container">
            <CommonHead commonHeadText={'Or subscribe to the newsletter'}/>
            <div className=' flex flex-wrap justify-between gap-3 items-center pt-[35px]'>
                <div className='subBtn flex gap-[40px]'>
                    <button className=' capitalize font-opensans text-[16px] font-semibold text-[#000000] cursor-grab '>all products</button>
                    <button className=' capitalize font-opensans text-[16px] font-semibold text-[#00000080] '>t-shirt</button>
                    <button className=' capitalize font-opensans text-[16px] font-semibold text-[#00000080] '>hoodies</button>
                    <button className=' capitalize font-opensans text-[16px] font-semibold text-[#00000080] '>jacket</button>
                </div>
                <div className='subLink flex justify-center items-center w-[92px] h-[32px] gap-[4px] bg-[#000000] font-opensans font-normal text-base
                 text-[#ffffff] cursor-grab hover:bg-[#FF8000] '><FaFilter/> Filter</div>
            </div>
            <div className='productCard flex flex-wrap justify-center gap-[24px] pt-[35px]'>
                <div className='hover:scale-105 transition-all duration-[.6s] hover:bg-[#e8f0f5]'>
                <SingleCardProduct pImg={cardImg1} pTitle={'Adicolor Classics Joggers'} pType={'Dress'} pPrice={'$63.85'} />
                </div>
                <div className='hover:scale-105 transition-all duration-[.6s] hover:bg-[#e8f0f5]'>
                <SingleCardProduct pImg={cardImg2} pTitle={'Nike Sportswear Futura Luxe'} pType={'Bag'} pPrice={'$130.00'} />
                </div>
                <div className='hover:scale-105 transition-all duration-[.6s] hover:bg-[#e8f0f5]'>
                <SingleCardProduct pImg={cardImg3} pTitle={'Geometric print Scarf'} pType={'scarf'} pPrice={'$53.00'} />
                </div>
                <div className='hover:scale-105 transition-all duration-[.6s] hover:bg-[#e8f0f5]'>
                <SingleCardProduct pImg={cardImg4} pTitle={'Yellow Reserved Hoodie'} pType={'Dress'} pPrice={'$155.00'} />
                </div>
                <div className='hover:scale-105 transition-all duration-[.6s] hover:bg-[#e8f0f5]'>
                <SingleCardProduct pImg={cardImg5} pTitle={'Basic Dress Greens'} pType={'Dress'} pPrice={'$236.00'} />
                </div>
                <div className='hover:scale-105 transition-all duration-[.6s] hover:bg-[#e8f0f5]'>
                <SingleCardProduct pImg={cardImg6} pTitle={'Nike Air Zoom Pegasus'} pType={'shoe'} pPrice={'$198.00'} />
                </div>
                <div className='hover:scale-105 transition-all duration-[.6s] hover:bg-[#e8f0f5]'>
                <SingleCardProduct pImg={cardImg7} pTitle={'Nike Repel Miler'} pType={'Dress'} pPrice={'$120.50'} />
                </div>
                <div className='hover:scale-105 transition-all duration-[.6s] hover:bg-[#e8f0f5]'>
                <SingleCardProduct pImg={cardImg8} pTitle={'Nike Sportswear Futura Luxe'} pType={'Glasses'} pPrice={'$160.00'} />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Subscribe