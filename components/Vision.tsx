import Image from 'next/image'
import React from 'react'

import img from '../public/image/image 51.svg'
import group from '../public/image/Group.svg'

type Props = {}

const Vision = (props: Props) => {
  return (
    <div>
        <div className='float-right mt-[112px]'>
            <Image src={group} alt='vector group' className='pl-[20px]'/>
            <Image src={group} alt='vector group' className='pl-[10px]'/>
            <Image src={group} alt='vector group' className='pl-[40px]'/>
            <Image src={group} alt='vector group' className='pl-[30px]'/>
        </div>
        <div className='ml-[140px] relative'>
            <h1 className=' text-[48px] pt-[200px] '>
            Vision
            </h1>
                <div className='w-[469px] h-[398px] bg-[#95C24D] float-right absolute right-0 top-[250px] clip3'></div>
                <Image src={img} alt='image' className='float-right absolute right-0 top-[250px] clip2'/>
            <div className='relative'>
                <div className='max-w-[640px]'>
                    <p className='mt-[70px]'>
                    Striving to be the best in its class by offering a superior product with regard to the standard of workmanship and knowledge, safe working procedures, practices and policies and the installation of quality apparatus. With power division being an integral part of our lifestyle and the cornerstone for our quality of life, there is a continuing need for products and services to harness its use. To this end, whilst acting as a responsible corporate citizen, we are faithful to the investigation and development of economical and environmentally-sustainable solutions for our commercial, industrial and domestic clients alike. We continue to drive forward, offering new technology, products and business methods. Our vast product offering encompasses Electrical, HVAC, Fire System, Switchgear &amp; Control Panels and Network Communication Systems &amp; Components.
                    </p>
                </div>
                    <div className='mt-[100px]'>
                        <ul className='space-y-[24px]'>
                            <li className='shock'>Being recognized and compensated for our abilities, achievements and advancements</li>
                            <li className='shock'>Encouraging and exploring alternative forms of energy generation</li>
                            <li className='shock'>Being broadminded, creative and courageous in the expansion of our capabilities, knowledge and skills</li>
                            <li className='shock'>Promoting the health and well-being of our clients, our staff and our environment</li>
                            <li className='shock'>Being honest with our clients and with one another</li>
                            <li className='shock'>Promoting the safe use of electrical energy</li>
                        </ul>
                    </div>
            </div>
            
            </div>
    </div>
  )
}

export default Vision