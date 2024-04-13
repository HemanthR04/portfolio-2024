import React from 'react'
import Image from "next/image";
import Logo from '../public/Logo.png'
const NavBar = () => {
  return (
    <div className='w-full   bg-primary flex flex-col justify-start items-center float-start'>
    <div className='w-[80%] mx-auto'>
        <div className='mt-6'>
            <Image src={Logo} className=''></Image>
        </div>
        
    </div>


</div>
  )
}

export default NavBar