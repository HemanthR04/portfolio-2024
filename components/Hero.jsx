'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';



const Hero = () => {
    return (
        <div className='hero pb-[80px] w-full text-white flex items-center justify-center'>
           <div className='hero-box bg-secondary w-[80%] h-[551px] rounded-[24px] flex flex-col items-center justify-center mx-auto'>
                <h1 className='text-primary font-bold text-[32px] leading-[40px] w-[90%] mx-auto '>HI THERE,<br/>I’M 
                <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      500,
      ' HEMANTH.', // initially rendered starting point
      1000,
      ' DEVELOPER.',
      1000,
      ' DESIGNER.',
      500,
    ]}
    speed={50}
    repeat={Infinity}
  /></h1>
                <p className='text-primary mt-[20px] w-[90%] leading-[20px]'>a frontend developer and designer bringing digital ideas into reality.</p>
           </div>
        </div>
    )
}

export default Hero