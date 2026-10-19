

import MovingContainer from './MovingContainer';
import { useState } from 'react';


const Page2 = () => {
  const [showImage, setShowImage] = useState(false)
  return (
    <div className='bg-black h-screen uppercase flex flex-col justify-center' data-scroll data-scroll-speed='0.3'>
      <img src={showImage} className={`size-full object-cover absolute  ${!showImage && 'hidden'}`} alt="" />
      <MovingContainer showImage={showImage} setShowImage={setShowImage} title='converse'/>
      <MovingContainer showImage={showImage} setShowImage={setShowImage} title='nike nfl'/>
      <MovingContainer showImage={showImage} setShowImage={setShowImage} title='mineral'/>
      <MovingContainer showImage={showImage} setShowImage={setShowImage} title='future world'/>
      <MovingContainer showImage={showImage} setShowImage={setShowImage} title='beyonce'/>
    </div>
  )
}

export default Page2
