import React from 'react'
import brandBanner1 from '../assets/images/brandBanner.png'
import zaralogo from '../assets/images/zaralogo.png'
import { Link } from 'react-router'

const BrandBanner = () => {
  return (
    <>
    <section id='brandBanner'style={{background:`url(${brandBanner1})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}} 
        className=' mt-[50px] lg:mt-[140px] pt-[140px] lg:pt-[220px] pb-[93px] '>
          <div className='container flex lg:justify-end'>
            <div className="brandBanner_row lg:flex-col flex flex-wrap justify-center ">
              <div className=' w-[191px] h-[81px] '>
                <img src={zaralogo} alt="zara logo" />
              </div>
              <p className=' w-[360px] lg:w-[504px] py-[55px] font-roboto font-normal text-[22px] lg:text-[26px] leading-[40px] text-center lg:text-left text-[#ffffff] '>Lustrous yet understated. The new evening wear collection exclusively offered
                 at the reopened Giorgio Armani boutique in Los Angeles.
              </p>
              <Link className='w-[233px] h-[72px] scale-[80%] lg:scale-[100%] bg-[#ffffff] font-roboto font-normal text-[29px] text-[#1E2832] flex justify-center items-center capitalize hover:bg-[#FF8000] hover:text-[#FFFFFF] hover:rounded-3xl transition-all ' >see collection</Link>
            </div>

          </div>
      
    </section>
    </>
  )
}

export default BrandBanner