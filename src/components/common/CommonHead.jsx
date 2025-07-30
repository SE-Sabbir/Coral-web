import React from 'react'

const CommonHead = ({commonHeadText}) => {
  return (
    <>
    <h2 className=' flex justify-center font-roboto text-[40px] lg:text-[50px] font-medium capitalize text-center text-[#000000] '>{commonHeadText}</h2>
    </>
  )
}

export default CommonHead