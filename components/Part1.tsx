import Image from 'next/image'
import React from 'react'

// images 
import man from '../public/image/image2.png'
import logo1 from '../public/part2/logo1.svg'
import logo2 from '../public/part2/logo2.svg'
import logo3 from '../public/part2/logo3.svg'
import logo4 from '../public/part2/logo4.svg'
import logo5 from '../public/part2/logo5.svg'
import logo6 from '../public/part2/logo6.svg'
import logo7 from '../public/part2/logo7.svg'
import logo8 from '../public/part2/logo8.svg'
import logo9 from '../public/part2/logo9.svg'
import logo10 from '../public/part2/logo10.svg'



type Props = {}

const Part1 = (props: Props) => {
  return (
    <div>
     <div className=' bg-[#FAF8F8] flex justify-between items-center  mx-auto'>
        <div className='ml-[140px] mx-auto'>
        <div className='flex space-x-1 mt-[151px]'>
            <div className='h-[4px] w-[17.24px] bg-black'/>
            <div className='h-[4px] w-[17.24px] bg-gray-400 '/>
            <div className='h-[4px] w-[17.24px] bg-gray-400 '/>
        </div>
        <p className='text-[48px] mt-[55px]'>Quality with Excellence,<br/> Accurate and Precise.</p>
        <button className='uppercase bg-[#95C24D] py-[13px] px-[41px] rounded-sm text-white text-[18px] mt-[71px] mb-[189px] '>
            See all products</button>    
        </div>
        {/* <img src="public/image/image2.png" alt="man" className=''/> */}
        <Image src={man} alt='man' className='w-[948px] z-0 clip1' />

     </div>
     {/* part2 */}
     <div className='flex justify-between'>
       <p className='max-w-[500px] text-[36px] ml-[140px] mt-[118px] mb-[131px]'> We support wide range of industries with our services and products</p>
       <div className='grid grid-cols-4 mt-[57px] mr-[140px] space-x-5'>
        <Image alt='logo' src={logo1}/>
        <div className='h-[50px] w-[69px] bg-[#95C24D]/10 '/>
        <div></div>
        <div></div>
        <Image alt='logo' src={logo2}/>
        <Image alt='logo' src={logo4}/>
        <Image alt='logo' src={logo7}/> 
        <Image alt='logo' src={logo10}/> 
        <Image alt='logo' src={logo3}/>
        <Image alt='logo' src={logo5}/>
        <div className='h-[50px] w-[69px] bg-[#95C24D]/10 '/>
        <Image alt='logo' src={logo9}/> 
        <div></div>
        <Image alt='logo' src={logo6}/>
        <Image alt='logo' src={logo8}/> 
       </div>
     </div>
    </div>
  )
}

export default Part1