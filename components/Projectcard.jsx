import React from 'react'

const Projectcard = () => {
  return (
    <div className='w-[80%] mx-auto flex items-start flex-col justify-start'>
            <div className='bg-secondary w-[90%] h-[271px] rounded-[24px] mx-auto mt-[80px]'>
                
            </div>
            <div className='w-[90%] mx-auto'>
                <h1 className='text-secondary leading-[40px] tracking-widest font-bold '>PROJECT NAME</h1>
                <div className='flex'> 
                    <div className='px-4 text-secondary rounded-full border-2 mr-2' >Design</div>
                    <div className='px-4 text-secondary rounded-full border-2 mr-2' >Development</div>
                </div>
            </div>
        </div>
  )
}

export default Projectcard