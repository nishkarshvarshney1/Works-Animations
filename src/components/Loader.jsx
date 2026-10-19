import React from 'react'
import loaderVideo from '../assets/vid.mp4'

const Loader = () => {
  return (
    <div className='h-screen w-full absolute left-0 top-0 text-[6.7vw]/[0.75] font-[fright] flex items-center justify-center'>
      <video autoPlay muted src={loaderVideo} className='size-full absolute top-0 left-0 z-1 object-cover' />
      <h2 className='text-center text-white relative z-2'>
                CREATIVE PROFESSIONALS <br />
                <em> DEDICATED </em> TO CULTURAL <br />
                ADVANCEMENT THROUGH <br />
                <em> STRATEGY </em> AND <em>DESIGN</em>
            </h2>
    </div>
  )
}

export default Loader
