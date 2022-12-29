import Image from 'next/image'
import React from 'react'

import rightImg from '../public/image/about.svg'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
        <div className='w-[366px] h-[752px] float-right bg-[#95C24D] '/>
        <div className='ml-[140px] mr-[143px] relative'>
            <Image src={rightImg} alt='image' className='float-right absolute right-[139px] top-[253px]'/>
            <h1 className=' text-[48px] pt-[154px] font-medium '>
            About us
            </h1>
            <div className='max-w-[640px]'>
                <p className='mt-[63px]'>
                Anwar Al Meiha Modern LLC, founded in 1993, having objective to create new techniques in electrical field with best and improved methods, fulfilling all the modern demands of electrical works. An Oman based enterprise which is owned by Abbas KV and Khalid Muslem has won the trust of customers and the awe of competitors for ushering a modern way of serving customers in a traditional trade. Our approach is to provide you with the most innovative and cost effective service within the electrical industry. We pride ourselves on providing honest and reliable electrical solutions. As a market leader we can provide a diverse range of top quality products and services.
                </p>
                <p className='mt-[38px]'>
                Our work was appreciated favorably in a short period of time and it grew into a huge success. The industrial sector responded admirably to our services and work. The untiring efforts and honesty of labor is the key treasure of the company. A team of engineers, supervisors, foremen and technicians keep exploring new and modern techniques so that the optimum standard of quality work may be achieved. Quality of work with excellence and perfection is the main motive of the company which has always been the preference but the suggestions of customers are most valuable to us. Our future is secured with the knowledge that we have differentiated ourselves by offering the best products with unparalleled levels of customer empathy and service.
                </p>
            </div>
            <div className='flex mt-[200px] space-x-[130px] relative'>
                <div className='ml-[133px]'><span className='font-medium text-xs absolute bottom-[85px]'>AWARDS</span><div className='w-[36px] h-[79px] bg-[#95C24D] absolute bottom-0  '/><span className='tomorrow font-medium text-xs absolute top-4 -rotate-90'>2022</span></div>
                <div><span className='font-medium text-xs absolute bottom-[50px]'>ACHIEVEMENTS</span><div className='w-[36px] h-[44px] bg-[#95C24D] absolute bottom-0  '/><span className='tomorrow font-medium text-xs absolute top-4 -rotate-90'>2018</span></div>
                <div><span className='font-medium text-xs absolute bottom-[30px]'>EXPANDED</span><div className='w-[36px] h-[26px] bg-[#95C24D] absolute bottom-0  '/><span className='tomorrow font-medium text-xs absolute top-4 -rotate-90'>2009</span></div>
                <div><span className='font-medium text-xs absolute bottom-[15px]'>FOUNDED</span><div className='w-[36px] h-[10px] bg-[#95C24D] absolute bottom-0  '/><span className='tomorrow font-medium text-xs absolute top-4 -rotate-90'>1993</span></div>
                <div><span className='uppercase tomorrow font-medium text-2xl absolute right-10 bottom-5'>Story Line</span></div>
            </div>
            <div className='h-[1px] bg-black w-[1158px]'></div>

        </div>
    </div>
  )
}

export default About