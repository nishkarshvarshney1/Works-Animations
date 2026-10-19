import React from 'react'
import Moving from './Moving';

const MovingContainer = ({title}) => {
    return (
        <div className='relative flex items-center justify-center overflow-hidden'>
            <h1 className='text-[7.7vw]/[0.75] text-white relative z-2 font-[fright]'>{title}</h1>
            <div id="moving" className='bg-(--yellow) absolute top-1/2 -translate-y-1/2 flex whitespace-nowrap'>
                <Moving />
                <Moving />
                <Moving />
                <Moving />
            </div>
        </div>
    )
}

export default MovingContainer
