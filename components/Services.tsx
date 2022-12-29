import Image from 'next/image'
import React from 'react'

// images 
import logo from '../public/image/image1.svg'
import box1 from '../public/services/image 30.svg'
import box2 from '../public/services/image 31.svg'
import box3 from '../public/services/image 32.svg'
import box4 from '../public/services/image 33.svg'
import box5 from '../public/services/image 34.svg'
import box6 from '../public/services/image 35.svg'

import vector from '../public/services/Vector 6.svg'

type Props = {}

const Services = (props: Props) => {
  return (
    <div className='bg-[#F4F4F4]'>
    <div className='ml-[140px]  '>
        <h1 className=' text-[48px] py-[80px] font-medium '>
        Services
        </h1>
        <div>
            <div className='grid grid-cols-4 gap-10 relative'>
             <div className=' serviceBox'>                 
                     <Image src={logo} alt='logo' className='w-[80px] float-left'/>
                    <Image src={box1} alt='device' className=' h-[83px] float-right'/>
                    <div className=' servicesBottomText'>Swithgear & Controls</div>
             </div>
             <div className=' serviceBox'>                 
                    <Image src={box2} alt='device' className=' h-[83px] float-right'/>
                    <div className=' servicesBottomText'>HVAC</div>
             </div>
             <div className=' serviceBox'>                 
                    <Image src={box3} alt='device' className=' h-[83px] float-right'/>
                    <div className=' servicesBottomText'>Retail Trade</div>
             </div>
              <div className=' w-[263px] bg-[#95C24D] row-span-2 relative p-8'>
                     <Image src={vector} alt='lightning' className='absolute top-[70px] right-[35px]'/>
                     <div className='text-[36px] font-medium'>Need <br />help?</div>
                     <div className='absolute bottom-[32px] left-[32px]'>
                            <div className='mb-[31px] text-lg font-medium'>talk to us</div>
                            <div className='h-[1px] w-[178px] bg-white mb-[18px]'/>
                            <div className=' font-medium text-xs'>9980883006 <br />mail@gmail.com</div>
                     </div>

              </div>
             <div className=' serviceBox'>                 
                    <Image src={box4} alt='device' className=' h-[83px] float-right'/>
                    <div className=' servicesBottomText'>MEP</div>
             </div>
             <div className=' serviceBox'>                 
                    <Image src={box5} alt='device' className=' h-[83px] float-right'/>
                    <div className=' servicesBottomText'>ELV</div>
             </div>
             <div className=' serviceBox'>                 
                    <Image src={box6} alt='device' className=' h-[83px] float-right'/>
                    <div className=' servicesBottomText'>FIRE & SAFETY</div>
             </div>



            </div>

            <div className='pb-[100px]'/>

        </div>
    </div>
    </div>
  )
}

export default Services