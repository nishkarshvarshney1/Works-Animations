import React from 'react'
import Loader from './Loader';

const Page1 = () => {
    return (
        <div id="page1" className="relative h-screen bg-(--yellow) text-[6.7vw]/[0.75] font-[fright] flex items-center justify-center">
            <h2 className='text-center'>
                CREATIVE PROFESSIONALS <br />
                <em> DEDICATED </em> TO CULTURAL <br />
                ADVANCEMENT THROUGH <br />
                <em> STRATEGY </em> AND <em>DESIGN</em>
            </h2>
            <Loader />

        </div>
    )
}

export default Page1
