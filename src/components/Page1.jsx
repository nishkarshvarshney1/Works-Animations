
import { useGSAP } from '@gsap/react';
import loaderVideo from '../assets/vid.mp4'
import { gsap } from 'gsap';

const Page1 = () => {
    const tl = gsap.timeline()
    useGSAP(() => {
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
    })
    return (
        <div className='relative h-screen'>
            <div id="page1" className="relative z-1 h-screen bg-(--yellow) text-[6.7vw]/[0.75] font-[fright] flex items-center justify-center">
                <h2 className='text-center'>
                    CREATIVE PROFESSIONALS <br />
                    <em> DEDICATED </em> TO CULTURAL <br />
                    ADVANCEMENT THROUGH <br />
                    <em> STRATEGY </em> AND <em>DESIGN</em>
                </h2>
                <div id='loader' className='h-screen w-full absolute left-0 top-0 text-[6.7vw]/[0.75] font-[fright] flex items-center justify-center'>
                    <div id="yellow" className='size-full bg-(--yellow) absolute z-3'></div>
                    <video autoPlay muted loop src={loaderVideo} className='size-full absolute top-0 left-0 z-1 object-cover' />
                    <h2 className='text-center text-white relative z-3'>
                        CREATIVE PROFESSIONALS <br />
                        <em> DEDICATED </em> TO CULTURAL <br />
                        ADVANCEMENT THROUGH <br />
                        <em> STRATEGY </em> AND <em>DESIGN</em>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Page1
