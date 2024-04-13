import React from 'react'

const Hero = () => {
    return (
        <div className='hero h-screen w-full text-white flex items-center justify-center'>
           <div className='hero-box bg-secondary w-[80%] h-[551px] rounded-[24px] flex flex-col items-center justify-center mx-auto'>
                <h1 className='text-primary font-bold text-[36px] leading-[40px] w-[90%] mx-auto '>HI THERE,<br/>I’M HEMANTH.</h1>
                <p className='text-primary mt-[20px] w-[90%] leading-[20px]'>a frontend developer and designer bringing digital ideas into reality</p>
           </div>
        </div>
    )
}

export default Hero