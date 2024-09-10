import React from 'react'

 const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-3 '>
        <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
        <div className='flex flex-col items-center lg:items-start'>
            <h1 className='pb-16 text-2xl mx-10 font-thin tracking-tight lg:mt-16 lg:text-8xl'>Khushbu Khatri</h1>
           <span className='mx-10 bg-gradient-to-r from-cyan-100 via-slate-300 to-cyan-400 bg-clip-text text-4xl tracking-tight text-transparent'>Frontend Developer</span> 
        </div>
        </div>
        </div>

    </div>

  )
}
export default Hero;
