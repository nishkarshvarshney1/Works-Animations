import React from 'react'
import ImageContainer from './ImageContainer';
import ImageContainer2 from './ImageConatiner2';
import ImageContainer3 from './ImageContainer3';
import { ChevronUp } from 'lucide-react';

const Page3 = ({locomotiveScroll}) => {
  return (
    <div>
    <div className='min-h-screen bg-white px-10 py-15 grid grid-cols-3 gap-6' >
      <div className='flex-col flex gap-6' data-scroll data-scroll-speed='0.2'>
        <ImageContainer />
      </div>
      <div className='flex-col flex gap-6' data-scroll>
        <ImageContainer2 />
      </div>
      <div className='flex-col flex gap-6' data-scroll data-scroll-speed='0.3'>
        <ImageContainer3 />
      </div>
    </div>
    <footer onClick={()=>{
      locomotiveScroll.scrollTo(0, 0)
    }} className='text-base uppercase font-[helvetica] text-white flex flex-col items-center py-5 cursor-pointer'>
      <ChevronUp size={40} strokeWidth={1} className='scale-x-120'/>
      <h6>back to top</h6>
    </footer>
    </div>
  )
}

export default Page3
