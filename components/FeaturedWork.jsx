import React from 'react'
import Projectcard from './Projectcard'

const FeaturedWork = () => {
  return (
    <div className='w-full  bg-primary flex flex-col justify-start items-center py-[100px]'>
        <div className='w-[80%] mx-auto'>
        <h1 className='text-secondary font-bold text-[36px] leading-[40px] w-[90%] mx-auto '>FEATURED <br/>WORK.</h1>
        </div>
        <Projectcard/>
        <Projectcard/>
        <Projectcard/>
        <Projectcard/>
    </div>
  )
}

export default FeaturedWork