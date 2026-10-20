import React from 'react'
import ImageContainer from './ImageContainer';
import ImageContainer2 from './ImageConatiner2';
import ImageContainer3 from './ImageContainer3';

const Page3 = () => {
  return (
    <div className='bg-white px-10 py-15 grid grid-cols-3 gap-6'>
      <div className='flex-col flex gap-6'>
        <ImageContainer />
      </div>
      <div className='flex-col flex gap-6'>
        <ImageContainer2 />
      </div>
      <div className='flex-col flex gap-6'>
        <ImageContainer3 />
      </div>
    </div>
  )
}

export default Page3
