import React from 'react'

const ImageContainer3 = () => {
    const data = [
        {
            text1: 'essentials',
            text2: 'fear of god idetity',
            img: 'comps/comp14.png'
        },
        {
            text1: 'the xi',
            text2: 'brand design',
            img: 'comps/comp15.png'
        },
        {
            text1: 'jon eliot',
            text2: 'from nepal',
            img: 'comps/comp16.png'
        },
        {
            text1: 'l.e.d. studio',
            text2: 'website',
            img: 'comps/comp17.png'
        },
        {
            text1: 'de cara al sol',
            text2: 'book design',
            img: 'comps/comp18.png'
        },
        {
            text1: 'converse',
            text2: 'retial concept design',
            img: 'comps/comp19.png'
        },
        {
            text1: 'kith',
            text2: 'sports ss24',
            img: 'comps/comp20.png'
        }
    ]
    return (
        data.map((e, idx) => {
            return (
                <div key={idx} id="image-container" className='bg-purple-200 h-120 group relative overflow-hidden cursor-pointer'>
                    <div id="overlay" className='opacity-0 group-hover:opacity-100 transition duration-500 h-full w-full absolute bg-black z-10 text-white flex items-center justify-center'>
                        <h3 className='font-[fright] uppercase text-5xl/[0.8] text-center'>{e.text1}<br /><em>{e.text2}</em></h3>
                        </div>
                    <img src={e.img} className='size-full object-cover group-hover:scale-110 transition duration-500' alt="" />
            </div>
            )
        })
    )
}

export default ImageContainer3
