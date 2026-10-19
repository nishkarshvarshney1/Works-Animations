import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useRef } from 'react'

const Moving = () => {
    const container = useRef()
    useGSAP(()=>{
        gsap.to(container.current, {
            x: '-100%',
            repeat: -1,
            duration: 5,
            ease: 'none'
        })
    })
    return (
        <div ref={container} className="flex items-center gap-3 uppercase font-bold py-1 pl-3">
            <h5>Creative direction</h5>
            <h5>Digital Design</h5>
            <h5>Art Direction</h5>
            <h5>Branding and Identity</h5>
            <h5>Type design</h5>
        </div>
    )
}

export default Moving
