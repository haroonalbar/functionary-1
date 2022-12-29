import Image from 'next/image'
import React from 'react'
import logo from '../public/image/image1.svg'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className='bg-white '>

    <div className='max-w-7xl mx-auto  flex justify-between space-x-5 items-center'>
        {/* <img src='./public/image/image1.png' alt="logo" className='w-10 h-10 object-contain' /> */}
        <Image src={logo} alt='logo' className='w-[130px]'/>
        <div className='flex space-x-28 '>
          <div className=' header '>Home</div>
          <div className=' header '>Services</div>
          <div className=' header '>Utilities</div>
          <div className=' header '>About us</div>
          <div className=' header '>Vision</div>
          <div className=' header '>Contact us</div>
        </div>
    </div>
    </header>
  )
}

export default Header