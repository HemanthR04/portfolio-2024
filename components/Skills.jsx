import React from 'react'
import Image from "next/image";
import Vector from '../public/Vector.png'

const Skills = () => {
  return (
    <div className='w-full  bg-primary flex flex-col justify-start items-center py-[200px]'>
        <div className='w-[80%]'>
            <h1 className='text-secondary font-bold text-[36px] leading-[40px] w-[90%] mx-auto '>WHAT I DO?</h1>
            <p className='text-secondary mt-[20px] w-[90%] leading-[20px] mx-auto'>My aim is to create beautiful digital experiences that not only look good but give your business an unfair advantage. </p>
        </div>
        <div className='w-[80%] mt-[20px]'>
            <ul className='flex flex-col w-[90%] mx-auto text-secondary leading-[40px] tracking-widest font-bold '>
                <li className='flex gap-2 items-center'>
                    <Image src={Vector}  className='w-[15px] h-[14px]'/>
                    WEB DEVELOPMENT</li>
                <li className='flex gap-2 items-center'><Image src={Vector} className='w-[15px] h-[14px]'/>WEB DESIGN</li>
                <li className='flex gap-2 items-center'><Image src={Vector} className='w-[15px] h-[14px]'/>SEO OPTIMIZATION</li>
            </ul>
        </div>
    </div>
  )
}

export default Skills