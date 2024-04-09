import { motion } from "framer-motion";
import React from 'react'

function Marquee() {
  return (
    <div  data-scroll  data-scroll-speed="0.1" className='w-full py-10 bg-[#004D43] rounded-t-3xl' >
        <div className='text border-t-2 border-b-2  border-zinc-300 flex  whitespace-nowrap overflow-hidden'>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:4}} className='text-[20vw] leading-none font-["FoundersGrotesk-Semibold (1)"] uppercase font-semibold pr-10'>we are ochi</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:4}} className='text-[20vw] leading-none font-["FoundersGrotesk-Semibold (1)"] uppercase font-semibold pr-10'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee