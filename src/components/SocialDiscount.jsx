import React, { useState } from 'react'
import CommonHead from './common/CommonHead'
import discountProImg1 from '../assets/images/disProduct1.png'
import discountProImg2 from '../assets/images/disProduct2.png'
import discountProImg3 from '../assets/images/disProduct3.png'
import discountProImg4 from '../assets/images/disProduct4.png'
import discountProImg5 from '../assets/images/disProduct5.png'
import discountProImg6 from '../assets/images/disProduct6.png'
import { Link } from 'react-router'

const SocialDiscount = () => {


  const [ inputData , setinputData] = useState('')
  const [inputError , setinputError] = useState('border-[#000000]')
  const handelSubmit= ()=>{
    if(!inputData){
      setinputError('border-[#FF8000]')
    }
    else{
      console.log('Data submit')
    }
  }

  return (
    <>
    <section id='socialDiscount' className=' pt-[100px] bg-[#1e28320d]'>
        <div className="container">
            <CommonHead commonHeadText={'Follow products and discounts on Instagram'}/>
            <div className=' flex flex-wrap justify-around lg:justify-between gap-2 pt-[60px]'>
                <Link className=' w-[200px] h-[200px] ' to={'#'}> <img src={discountProImg1} alt="discount product image" /> </Link>
                <Link className=' w-[200px] h-[200px] ' to={'#'}> <img src={discountProImg2} alt="discount product image" /> </Link>
                <Link className=' w-[200px] h-[200px] ' to={'#'}> <img src={discountProImg3} alt="discount product image" /> </Link>
                <Link className=' w-[200px] h-[200px] ' to={'#'}> <img src={discountProImg4} alt="discount product image" /> </Link>
                <Link className=' w-[200px] h-[200px] ' to={'#'}> <img src={discountProImg5} alt="discount product image" /> </Link>
                <Link className=' w-[200px] h-[200px] ' to={'#'}> <img src={discountProImg6} alt="discount product image" /> </Link>
            </div>
  {/* -----------------Email part-------- */}
            <div className=' pt-[70px] pb-[100px]'>
                <CommonHead commonHeadText={'Or subscribe to the newsletter'}/>
                <div className=' lg:px-0 px-5 pt-[74px] flex justify-center gap-[26px]'>
                <input onChange={(alu)=>{setinputData(alu.target.value), setinputError('border-[#000000]')}}
                 className={` w-[643px] border-b-2 font-roboto font-semibold text-[16px] text-[#000000] pl-4 outline-none ${inputError}`} type="text" placeholder='Email address...'/>
                <button onClick={handelSubmit} className=' w-[115px] border-b-2 border-[#000000] font-opensans font-normal text-[16px] text-[#000000] cursor-grab '>SUBMIT</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SocialDiscount