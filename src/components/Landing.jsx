import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowUpLong } from "react-icons/fa6";
function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="main">
      <div className='h-screen py-[26vh] max-md:py-[18vh] '>
        {["Welcome To","Astra Verse","Created by Prince Soni"].map((item,index)=>{return (
        <div className="masker">
          <div className="textbox  flex items-center gap-2 pl-[1vw] py-2">
            {index ===1 && (<motion.div className="w-[19vh] h-[4vw] max-md:h-[5vh] bg-red-600 rounded-lg" initial={{width: 0}} animate={{width:"19vh"}} transition={{ease:[0.76,0,0.24,1],duration:"2"}} ></motion.div>)}
            <div className=" w-full flex items-center text-[6vw] text-gray-950 font-extrabold uppercase leading-[10vh] tracking-tight max-md:text-[11vw] max-md:leading-[5vh]">{item}
            </div>
          </div>
        </div>)})}
    
        <div className="  flex justify-between items-center border-t-[1px] mt-48 max-md:mt-[18vh] border-gray-400 text-xl font-medium tracking-tight px-[2vh] py-[2vh] capitalize text-gray-700 flex-wrap max-md:gap-10 max-md:text-sm ">
          {["pursuing B.C.A from baba masth nath university","Full Stack Web Developer"].map((item,index)=>{return <span className=''>{item}</span>})}
          <div className="start flex gap-2">
            <div className="flex justify-center items-center text border-[2px] border-gray-400 rounded-3xl px-2  uppercase">View Projects</div>
            <div className="logo p-3 rounded-full border-gray-600 border rotate-45"><FaArrowUpLong /></div>
          </div>
        </div>
        
      </div>                                            
    </div>
  )
}

export default Landing