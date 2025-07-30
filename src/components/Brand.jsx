import React from 'react'
import brandimg1 from '../assets/images/brand-1.png' 
import brandimg2 from '../assets/images/brand-2.png' 
import brandimg3 from '../assets/images/brand-3.png' 
import brandimg4 from '../assets/images/brand-4.png' 
import brandimg5 from '../assets/images/brand-5.png' 

const Brand = () => {
  return (
    <>
    <section id='brand' className='pt-[30px] lg:pt-[90px]'>
        <div className="container">
            <div className="brand_row flex justify-around lg:justify-between flex-wrap lg:flex-nowrap">
                <div className=' w-[200px] h-[70px] '>
                    <img className='w-full' src={brandimg1} alt="brand image" />
                </div>
                <div className=' w-[200px] h-[70px] '>
                    <img className='w-full' src={brandimg5} alt="brand image" />
                </div>
                <div className=' w-[200px] h-[70px] '>
                    <img className='w-full' src={brandimg2} alt="brand image" />
                </div>
                <div className=' w-[200px] h-[70px] '>
                    <img className='w-full' src={brandimg4} alt="brand image" />
                </div>
                <div className=' w-[200px] h-[70px] '>
                    <img className='w-full' src={brandimg1} alt="brand image" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Brand