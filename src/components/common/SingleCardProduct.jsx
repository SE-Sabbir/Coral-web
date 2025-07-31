import React from 'react'

const SingleCardProduct = ({ pImg , pTitle , pType , pPrice}) => {
  return (
    <>
    <div className=' w-[312px] h-[484px]'>
        <div className="productImg w-full h-[400px] bg-[#0000001f] ">
            <img src={pImg} alt="product image" />
        </div>
        <div className=' px-[10px]'>
        <h2  className=' font-opensans font-semibold text-[16px] text-[#000000] pt-[16px] '>{pTitle}</h2>
        <div className='flex justify-between items-center pt-[16px]'>
            <p className=' font-opensans font-normal text-[16px] text-[#00000080] '>{pType}</p>
            <p className=' font-opensans font-semibold text-[16px] text-[#000000] '>{pPrice}</p>
        </div>
        </div>
    </div>
    </>
  )
}

export default SingleCardProduct