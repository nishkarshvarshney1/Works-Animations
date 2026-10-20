import React from 'react'

const ImageContainer = () => {
    const data = [
        {
            text1: 'between places',
            text2: 'visual idetity',
            img: 'comps/comp1.png'
        },
        {
            text1: 'cdl',
            text2: 'championship 2024',
            img: 'comps/comp2.png'
        },
        {
            text1: 'nike',
            text2: 'air fear of god IDENTITY',
            img: 'comps/comp3.png'
        },
        {
            text1: 'VERSACE',
            text2: 'TRIGREGA IDENTITY',
            img: 'comps/comp4.png'
        },
        {
            text1: 'converse',
            text2: 'basketball ho24',
            img: 'comps/comp5.png'
        },
        {
            text1: 'the north face',
            text2: 'climb festival',
            img: 'comps/comp6.png'
        },
        {
            text1: 'nike',
            text2: 'studio45',
            img: 'comps/comp7.png'
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

export default ImageContainer
