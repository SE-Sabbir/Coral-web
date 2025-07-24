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
    <section id='explore' className=' pt-[30px] lg:pt-[90px]  lg:pb-[90px]'>
        <div className="container relative">
                <h1 className=' uppercase text-[20px] lg:text-[34px] font-roboto font-normal text-[#000000] rotate-0 lg:rotate-270 pb-15 lg:pb-0 pl-10 lg:pl-0 lg:left-[-350px] bottom-[45%] static lg:absolute'>Explore new and popular styles</h1>
            <div className="explore_row flex flex-wrap lg:flex-nowrap justify-between">
                <Link className=' w-[450px] lg:w-[648px] lg:h-[648px] block p-5 lg:p-0' to={'#'}><img className='w-full h-full' src={exploreimg1} alt="explore image" /></Link>
                <div className='middle_bar h-0 lg:h-[648px] w-2 bg-[#00000023] hidden lg:block'></div>
                <div className=' flex flex-wrap w-[420px] lg:w-[648px] h-[200px] lg:h-[648px] p-5 lg:p-0 gap-5 '>
                    <Link className='w-[180px] lg:w-[312px] h-[200px] lg:h-[312px] block ' to={'#'}><img className='w-full h-full object-cover' src={exploreimg2} alt="explore image" /></Link>
                    <Link className='w-[180px] lg:w-[312px] h-[200px] lg:h-[312px] block ' to={'#'}><img className='w-full h-full object-cover' src={exploreimg3} alt="explore image" /></Link>
                    <Link className='w-[180px] lg:w-[312px] h-[200px] lg:h-[312px] block ' to={'#'}><img className='w-full h-full object-cover' src={exploreimg4} alt="explore image" /></Link>
                    <Link className='w-[180px] lg:w-[312px] h-[200px] lg:h-[312px] block ' to={'#'}><img className='w-full h-full object-cover' src={exploreimg5} alt="explore image" /></Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Explore