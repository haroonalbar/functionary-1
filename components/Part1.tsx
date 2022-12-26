import React from 'react'

type Props = {}

const Part1 = (props: Props) => {
  return (
    <div className='space-y-10'>
     <div className=' bg-[#FAF8F8] flex justify-between items-center space-y-10 mx-auto'>
        <div className='space-y-10 mx-auto'>
        <p className='text-5xl'>Quality with Excellence,<br/> Accurate and Precise.</p>
        <button className='uppercase ml-20 bg-[#95C24D] py-1 px-2 rounded-sm text-white'>
            See all products</button>    
        </div>
        <img src="public/image/image2.png" alt="man" className=''/>

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