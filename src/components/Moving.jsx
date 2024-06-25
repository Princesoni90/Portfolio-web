import { motion } from 'framer-motion'
import React from 'react'

function Moving() {
  return (
    <div data-scroll data-scroll-speed="" className='w-full h-[63vh] flex items-center justify-center bg-[#004D43]  rounded-t-2xl max-md:h-[35vh] '>
      <div className='border-y-2 border-gray-400 items-center  flex overflow-hidden text-white whitespace-nowrap '>
        <motion.h1 className="font-semibold text-[19vw] max-md:text-[15vh] leading-none uppercase" initial={{x: 0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:"50"}} >Hey We are astra verse creating dynamic websites for clints</motion.h1>
        <motion.h1 className="font-semibold text-[19vw] max-md:text-[15vh] leading-none uppercase" initial={{x: 0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:"50"}} >Hey We are astra verse creating dynamic websites for clints</motion.h1>
      </div> 
      
    </div>
    
  )
}

export default Moving 