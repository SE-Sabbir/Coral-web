import React from 'react'
import brandBanner1 from '../assets/images/brandBanner.png'
import zaralogo from '../assets/images/zaralogo.png'

const BrandBanner = () => {
  return (
    <>
    <section id='brandBanner'  className='pt-[140px] flex justify-center'>
        <div className='brandBannerImg'>
            <img src={brandBanner1} alt="Brand Banner Image" className=' w-full object-cover' />
        </div>
            <div className="container absolute pt-[233px] flex justify-end">
                <div className=' pr-[33px]'>
                <img src={zaralogo} alt="zara logo" />
                <p className=' w-[504px] py-[55px] capitalize font-roboto font-normal text-[26px] leading-[40px] text-[#ffffff] '>Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Armani boutique in LosAngeles.
                </p>
                <button className=' capitalize w-[223px] h-[72px] font-roboto font-normal text-[29px] text-primary bg-[#ffffff] cursor-grab ' >see collection</button>
                </div>
            </div>
    </section>
    </>
  )
}

export default BrandBanner