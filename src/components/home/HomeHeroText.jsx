import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[inter500] pt-5 text-center'>
      <div className='text-[9vw] text-white uppercase leading-[9.5vw] justify-center flex items-center'>L'étincelle</div>
      <div className='text-[9vw] text-white uppercase leading-[9.5vw] justify-center flex items-center '>
        qui 
        <div className='h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden'><Video/></div> 
        génère
        </div>
      <div className='text-[9vw] text-black uppercase leading-[9.5vw] justify-center flex items-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText