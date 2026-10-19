import React from 'react'
import Moving from './Moving';

const MovingContainer = ({title}) => {
    return (
        <div className='relative flex items-center justify-center overflow-hidden'>
            <h1 className='text-[7.7vw]/[0.75] text-white relative z-2 font-[fright]'>{title}</h1>
            <div id="moving" className='bg-(--yellow) absolute top-1/2 -translate-y-1/2 flex whitespace-nowrap'>
            <div id="blur" className='absolute left-1/2 top-1/2 -translate-1/2 bg-(--yellow) w-[18%] z-1 h-full shadow-amber-200'></div>
                <Moving />
                <Moving />
                <Moving />
                <Moving />
            </div>
        </div>
    )
}

export default MovingContainer
