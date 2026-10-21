
import { useGSAP } from '@gsap/react';
import loaderVideo from '../assets/vid.mp4'
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Page1 = () => {
    const chevronRef = useRef()
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.to('#yellow', {
            y: '-100%',
            duration: 1,
            delay: 0.3,
            ease: 'expo.out'
        })
        tl.to('#loader video', {
            y: '-100%',
            duration: 1,
            ease: 'expo.out',
        })
        tl.to('#loader h2', {
            color: 'black'
        }, '-=0.9')

        tl.to('#loader', {
            display: 'none'
        })
        gsap.from('footer span', {
            opacity: 0,
            delay: 2,
            duration: 0.5
        })
        gsap.from(chevronRef.current, {
            y: -30,
            opacity: 0,
            delay: 2,
        })
    })
    return (
            <div id="page1" className="relative h-screen bg-(--yellow) text-[6.7vw]/[0.75] font-[fright] flex items-center justify-center" data-scroll data-scroll-speed='-0.1'>
                <h2 className='text-center'>
                    CREATIVE PROFESSIONALS <br />
                    <em> DEDICATED </em> TO CULTURAL <br />
                    ADVANCEMENT THROUGH <br />
                    <em> STRATEGY </em> AND <em>DESIGN</em>
                </h2>
                <footer className='absolute bottom-7 text-sm font-[helvetica] grid grid-cols-3 w-full px-15 items-center uppercase'>
                    <span className='justify-self-start'><a href="#" className='relative py-1 group'>
              <h3>Contact</h3>
              <span className='js-line absolute bottom-0 w-full h-px bg-black scale-x-0 group-hover:scale-x-100 transition duration-400 origin-right group-hover:origin-left'></span>
              </a></span>
                    <ChevronDown ref={chevronRef} strokeWidth={1} className='justify-self-center size-10 scale-x-150'/>
                    <span className='justify-self-end'><a href="#" className='relative py-1 group'>
              <h3>Instagram</h3>
              <span className='js-line absolute bottom-0 w-full h-px bg-black scale-x-0 group-hover:scale-x-100 transition duration-400 origin-right group-hover:origin-left'></span>
              </a></span>
                </footer>
                <div id='loader' className='z-2 h-screen w-full absolute left-0 top-0 text-[6.7vw]/[0.75] font-[fright] flex items-center justify-center'>
                    <div id="yellow" className='size-full bg-(--yellow) absolute z-4'></div>
                    <video autoPlay muted loop src={loaderVideo} className='size-full absolute top-0 left-0 z-3 object-cover' />
                    <h2 className='text-center text-white relative z-5'>
                        CREATIVE PROFESSIONALS <br />
                        <em> DEDICATED </em> TO CULTURAL <br />
                        ADVANCEMENT THROUGH <br />
                        <em> STRATEGY </em> AND <em>DESIGN</em>
                    </h2>
                </div>
            </div>
    )
}

export default Page1
