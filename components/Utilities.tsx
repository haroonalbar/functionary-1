import Image from 'next/image'
import React from 'react'

// images 
import top from '../public/utilities/top.png'
import logo1 from '../public/utilities/logo1.svg'
import logo2 from '../public/utilities/logo2.svg'
import logo3 from '../public/utilities/logo3.svg'
import logo4 from '../public/utilities/logo4.svg'
import name1 from '../public/utilities/name1.svg'
import name2 from '../public/utilities/name2.svg'
import name3 from '../public/utilities/name3.svg'
import name4 from '../public/utilities/name4.svg'



type Props = {}

function Utilities({}: Props) {
  return (
    <div className='ml-[140px] mr-[143px]'>
        <div className='flex justify-between'>

        <h1 className='text-[48px] py-[80px] font-medium'>Utilities</h1>
        <Image src={top} alt='group name' className='object-contain'/>
        </div>
        <div className='flex justify-between pb-[105px]'>
            <div className=' w-[266px] h-[307px] border-[1px] border-[#ECECEC] relative '>
                <Image src={logo1} alt='logo' className='items-center mx-auto py-12'/>
                <Image src={name1} alt='company name' className='absolute left-[40px] bottom-6'/>
            </div>
            <div className=' w-[266px] h-[307px] border-[1px] border-[#ECECEC] relative '>
                <Image src={logo2} alt='logo' className='items-center mx-auto py-12'/>
                <Image src={name2} alt='company name' className='absolute left-[40px] bottom-6'/>
            </div>
            <div className=' w-[266px] h-[307px] border-[1px] border-[#ECECEC] relative '>
                <Image src={logo3} alt='logo' className='items-center mx-auto py-12'/>
                <Image src={name3} alt='company name' className='absolute left-[40px] bottom-6'/>
            </div>
            <div className=' w-[266px] h-[307px] border-[1px] border-[#ECECEC] relative '>
                <Image src={logo4} alt='logo' className='items-center mx-auto py-12'/>
                <Image src={name4} alt='company name' className='absolute left-[40px] bottom-6'/>
            </div>
        </div>
    </div>
  )
}

export default Utilities