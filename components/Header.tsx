import Image from 'next/image'
import Link from 'next/link'
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
          <Link href='#home'>
          <div className=' header '>Home</div>
          </Link>
          <Link href='#services'>
          <div className=' header '>Services</div>
          </Link>
          <Link href='#utilities'>
          <div className=' header '>Utilities</div>
          </Link>
          <Link href='#about'>
          <div className=' header '>About us</div>
          </Link>
          <Link href='#vision'>
          <div className=' header '>Vision</div>
          </Link>
          <Link href='#contact'>
          <div className=' header '>Contact us</div>
          </Link>
        </div>
    </div>
    </header>
  )
}

export default Header