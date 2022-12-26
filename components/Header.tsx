import Image from 'next/image'
import React from 'react'
import logo from '../public/image/image1.png'
type Props = {}

const Header = (props: Props) => {
  return (
    <div className='px-20 py-5 flex justify-between items-center z-10 sticky'>
        {/* <img src='./public/image/image1.png' alt="logo" className='w-10 h-10 object-contain' /> */}
        <Image src={logo} className='mr-20'/>
        
        <div className='uppercase text-sm text-[#808080] hover:text-black py-2  border-b-4 border-[rgba(0,0,0,0)] hover:border-[#95C24D] '>Home</div>
        <div className='uppercase text-sm text-[#808080] hover:text-black py-2  border-b-4 border-[rgba(0,0,0,0)] hover:border-[#95C24D] '>Services</div>
        <div className='uppercase text-sm text-[#808080] hover:text-black py-2  border-b-4 border-[rgba(0,0,0,0)] hover:border-[#95C24D] '>Utilities</div>
        <div className='uppercase text-sm text-[#808080] hover:text-black py-2  border-b-4 border-[rgba(0,0,0,0)] hover:border-[#95C24D] '>About us</div>
        <div className='uppercase text-sm text-[#808080] hover:text-black py-2  border-b-4 border-[rgba(0,0,0,0)] hover:border-[#95C24D] '>Vision</div>
        <div className='uppercase text-sm text-[#808080] hover:text-black py-2  border-b-4 border-[rgba(0,0,0,0)] hover:border-[#95C24D] '>Contact us</div>
    </div>
  )
}

export default Header