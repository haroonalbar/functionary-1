import Image from 'next/image'
import React from 'react'

import mob from '../public/contact/Vectormobile.svg'
import tele from '../public/contact/Vectortele.svg'
import shock from '../public/contact/Vector 16.svg'
import foot1 from '../public/contact/image 44.svg'
import foot2 from '../public/contact/image 45.svg'


type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='h-[834px] relative'>
        <div className=' h-[390px] w-[1160px] bg-[#FFC928]/20 items-center mx-auto my-[100px] '>
            <div className='h-[390px] w-[1160px] pl-[68px] pt-[59px] pr-[90px] pb-[56px] flex justify-between relative'>
                <div className='flex flex-col justify-between'>
                    {/* left  */}
                    <div>
                       <h1 className='text-[40px]  font-medium '>Contact Us</h1>
                    </div>
                    <div className='flex flex-col space-y-3'>
                         <div className='flex space-x-5 items-center'><Image src={mob} alt='mob'/><span className='font-medium text-lg tomorrow'>+96891924377</span></div>
                         <div className='flex space-x-5 items-center'><Image src={tele} alt='tele'/><span className='font-medium text-lg tomorrow'>+26988333</span><span className='text-xs tomorrow font-medium text-[#151630]/50 uppercase'>(Landline)</span></div>

                    </div>
                </div>
                <Image src={shock} alt='lightning'/>
                <div>
                    {/* right  */}
                    <form action="" className='h-[390px] flex flex-col space-y-3 relative'>
                        <span className='uppercase  font-medium text-[20px] py-5'>Send Enquiry</span>
                        <textarea name="no/mail" id="no/mail" className='w-[434px] h-[48px] px-5 py-2'>Enter Email ID or number</textarea>
                        <textarea name="message" id="message" className='w-[434px] h-[74px] px-5 py-2'>Type your message</textarea>
                        <button className='uppercase font-medium w-[200px] py-[15px] px-[68px] bg-[#95C24D] tomorrow absolute right-0 bottom-[105px]'>submit</button>
                    </form>
                </div>
            </div>

        </div>
        <div className='flex w-[1160px] mx-auto items-center justify-between'>
            <Image src={foot2} alt='image' />
            <Image src={foot1} alt='image' />
        </div>
        <div className=' mt-[74px] bg-[#23242A] h-[100px] w-full absolute bottom-0'>
            <div className='w-[1160px] flex justify-between mx-auto items-center h-[100px]'>
                <span className='font-[700] text-[14px] text-white/50'>© 2019-2020 All Rights Reserved.</span>
                <span className='font-[700] text-[14px] text-white'>Terms of Service</span>
            </div>

        </div>
    </div>
  )
}

export default Contact