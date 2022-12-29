import Image from 'next/image'
import React from 'react'

import corner from '../public/image/edge.svg'
import qoutes from '../public/image/q.svg' 
import img1 from '../public/image/image 52.svg'
import img2 from '../public/image/image 53.svg'


type Props = {}

const  Credits = (props: Props) => {
  return (
    <div className='h-[817px] bg-[#95C24D] relative'>
        <Image src={corner} alt='design element' className='absolute right-0 top-[-30px]'/>
        <Image src={corner} alt='design element' className='absolute left-[-70px] bottom-[-110px]'/>
        <div className='items-center h-[817px] justify-center mx-auto flex space-x-6'>
            <div className='h-[530px] w-[465px] bg-white relative'>
                <div className='py-[50px] pl-[40px] pr-[95px] space-y-3'>
                    <h1 className='font-medium text-[28px]'>Khalid Muslem Salmeen  Al Kiyumi</h1>
                    <h2 className='uppercase font-medium text-lg'>CHAIRMAN</h2>
                    <p className='max-w-[277px]'>
                    If the last century was about meeting human needs, this one is about matching human aspirations. We live in a world where the young reach higher, dream bigger and demand more, a world that is challenging the limits of hope and possibility. 
                    </p>
                    <span className='uppercase text-[#95C24D] absolute bottom-[50px]'>Read more</span>
                    <Image src={qoutes} alt='element' className='absolute right-[54px] top-[123px]'/>
                    <Image src={img1} alt='man' className='absolute bottom-0 right-0'/>
                </div>
            </div>
            <div className='h-[530px] w-[465px] bg-white relative'>
                <div className='py-[50px] pl-[40px] pr-[95px] space-y-3'>
                    <h1 className='font-medium text-[28px]'>Abbas KV </h1>
                    <h2 className='uppercase font-medium text-lg'>Manging Director</h2>
                    <p className='max-w-[277px]'>
                    On behalf of my company I do present my compliment. We are thankful to our valuable clients who guided us to lead a company which is well established and known in the market today. Here, I briefly introduce a well-known firm all over the country of Sultanate of Oman for its unique and incomparable products and services.
                    </p>
                    <span className='uppercase text-[#95C24D] absolute bottom-[50px]'>Read more</span>
                    <Image src={qoutes} alt='element' className='absolute right-[54px] top-[123px]'/>
                    <Image src={img2} alt='man' className='absolute bottom-0 right-0'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default  Credits