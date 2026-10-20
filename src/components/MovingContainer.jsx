import React from 'react'
import Moving from './Moving';
import set1 from '../assets/images/set1.png'
import set2 from '../assets/images/set2.png'
import set4 from '../assets/images/set4.png'
import set5 from '../assets/images/set5.png'
import set6 from '../assets/images/set6.png'

const MovingContainer = ({ title, setShowImage }) => {
    return (
        <div onMouseEnter={() => {
            title === 'converse' ? setShowImage(set1) : title === 'nike nfl' ? setShowImage(set2) : title === 'mineral' ? setShowImage(set6) : title === 'future world' ? setShowImage(set4) : title === 'beyonce' ? setShowImage(set5) : null
        }}
            className='js-container relative flex items-center justify-center overflow-hidden group cursor-pointer hover:italic transition'>
            <h1 className='text-[7.7vw]/[0.75] text-white group-hover:text-black transition relative z-2 font-[fright]'>{title}</h1>
            <div id="moving" className='bg-(--yellow) absolute top-1/2 -translate-y-1/2 whitespace-nowrap flex scale-y-0 group-hover:scale-y-100 transition duration-200'>
                <Moving />
                <Moving />
                <Moving />
                <Moving />
            </div>
        </div>
    )
}

export default MovingContainer
