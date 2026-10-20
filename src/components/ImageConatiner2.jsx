import React from 'react'

const ImageContainer2 = () => {
    const data = [
        {
            text1: 'converse',
            text2: 'nextstudio',
            img: 'comps/comp8.png'
        },
        {
            text1: 'FUTUREWORLD',
            text2: 'IDENTITY & WEBSITE',
            img: 'comps/comp9.png'
        },
        {
            text1: 'CONVERSE',
            text2: 'BASKETBALL IDENTITY',
            img: 'comps/comp10.png'
        },
        {
            text1: 'NIKE NFL',
            text2: '2024 CAMPAIGN',
            img: 'comps/comp11.png'
        },
        {
            text1: 'public.com',
            text2: 'campaign',
            img: 'comps/comp12.png'
        },
        {
            text1: 'jeen huhs',
            text2: 'film identity',
            img: 'comps/comp13.png'
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

export default ImageContainer2
