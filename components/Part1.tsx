import Image from 'next/image'
import React from 'react'
import man from '../public/image/image2.png'
type Props = {}

const Part1 = (props: Props) => {
  return (
    <div className=''>
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
        <Image src={man} className='w-[948px] z-0 clip1' />

     </div>
     {/* part2 */}
     <div className='flex space-x-32 justify-between px-20'>
       <p className='max-w-[300px]'> We support wide range of industries with our services and products</p>
       <div className='grid grid-cols-3 space-x-2'>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
       </div>
     </div>
    </div>
  )
}

export default Part1