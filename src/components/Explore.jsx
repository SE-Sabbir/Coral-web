import React from 'react'
import { Link } from 'react-router'
import exploreimg1 from '../assets/images/explore1.png'
import exploreimg2 from '../assets/images/explore2.png'
import exploreimg3 from '../assets/images/explore3.png'
import exploreimg4 from '../assets/images/explore4.png'
import exploreimg5 from '../assets/images/explore5.png'

const Explore = () => {
  return (
    <>
    <section id='explore' className=' pt-[30px] lg:pt-[90px]'>
        <div className="container">
          <div className="explore_row relative">
                <h1 className=' uppercase text-[25px] lg:text-[34px] text-center font-roboto font-normal text-[#000000] rotate-0 lg:rotate-270 pb-15 lg:pb-0 pl-10 lg:pl-0 lg:left-[-300px] bottom-[45%] static lg:absolute'>Explore new and popular styles</h1>
            <div className="explore_row flex flex-wrap justify-around gap-5">
                <div className=' w-full max-w-[648px] overflow-hidden'>
                  <Link className=' block' to={'#'}><img className='w-full h-auto object-cover hover:scale-105 transition-all duration-[.6s]  ' src={exploreimg1} alt="explore image" /></Link>
                </div>
                <div className=' flex flex-wrap justify-center w-full max-w-[648px] h-auto gap-5'>
                    <Link className=' w-[312px] h-[312px] block overflow-hidden ' to={'#'}><img className='w-full h-full object-cover hover:scale-105 transition-all duration-[.6s] ' src={exploreimg2} alt="explore image" /></Link>
                    <Link className=' w-[312px] h-[312px] block overflow-hidden  ' to={'#'}><img className='w-full h-full object-cover hover:scale-105 transition-all duration-[.6s] ' src={exploreimg3} alt="explore image" /></Link>
                    <Link className=' w-[312px] h-[312px] block overflow-hidden  ' to={'#'}><img className='w-full h-full object-cover hover:scale-105 transition-all duration-[.6s] ' src={exploreimg4} alt="explore image" /></Link>
                    <Link className=' w-[312px] h-[312px] block overflow-hidden  ' to={'#'}><img className='w-full h-full object-cover hover:scale-105 transition-all duration-[.6s] ' src={exploreimg5} alt="explore image" /></Link>
                </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Explore